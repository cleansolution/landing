import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const client = createClient({
  projectId: '46yhl3mt',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN
});

// Función para subir imagen
async function uploadImage(imagePath) {
  try {
    const imageBuffer = fs.readFileSync(imagePath);
    const asset = await client.assets.upload('image', imageBuffer, {
      filename: path.basename(imagePath)
    });
    return asset;
  } catch (error) {
    console.error(`  ❌ Error subiendo ${path.basename(imagePath)}:`, error.message);
    return null;
  }
}

// Función para actualizar documento con imagen
async function updateDocumentImage(documentId, imagePath, fieldName = 'image') {
  const asset = await uploadImage(imagePath);
  if (!asset) return false;

  await client
    .patch(documentId)
    .set({
      [fieldName]: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: asset._id
        }
      }
    })
    .commit();
  
  return true;
}

async function migrateImages() {
  console.log('🖼️  Iniciando migración de imágenes...\n');

  const imagesBasePath = path.join(__dirname, '..', 'src', 'assets', 'images');

  try {
    // 1. Servicios
    console.log('📸 Subiendo imágenes de servicios...');
    const serviceImages = {
      1: 'services/slider-img1.jpg',
      2: 'services/slider-img2.jpg',
      3: 'services/slider-img3.jpg',
      4: 'services/slider-img4.jpg',
      5: 'services/slider-img5.jpg',
      6: 'services/slider-img6.jpg',
      7: 'services/slider-img7.jpg',
      8: 'services/slider-img1.jpg' // Reutilizamos la primera para el 8vo servicio
    };

    // Obtener todos los servicios de Sanity
    const services = await client.fetch('*[_type == "service"] | order(id asc)');
    for (const service of services) {
      const imagePath = path.join(imagesBasePath, serviceImages[service.id]);
      if (fs.existsSync(imagePath)) {
        const success = await updateDocumentImage(service._id, imagePath, 'img');
        if (success) console.log(`  ✓ Imagen agregada: ${service.title}`);
      }
    }

    // 2. Team Members
    console.log('\n📸 Subiendo fotos del equipo...');
    const teamMembers = await client.fetch('*[_type == "teamMember"] | order(id asc)');
    for (let i = 0; i < teamMembers.length; i++) {
      const member = teamMembers[i];
      const imagePath = path.join(imagesBasePath, 'team', `team-mem-img${i + 1}.png`);
      if (fs.existsSync(imagePath)) {
        const success = await updateDocumentImage(member._id, imagePath, 'image');
        if (success) console.log(`  ✓ Foto agregada: ${member.name}`);
      }
    }

    // 3. Testimonials
    console.log('\n📸 Subiendo avatares de testimonios...');
    const testimonials = await client.fetch('*[_type == "testimonial"] | order(id asc)');
    for (let i = 0; i < testimonials.length; i++) {
      const testimonial = testimonials[i];
      const imagePath = path.join(imagesBasePath, 'testimonials', `testimonial-client-img${i + 1}.jpg`);
      if (fs.existsSync(imagePath)) {
        const success = await updateDocumentImage(testimonial._id, imagePath, 'avatar');
        if (success) console.log(`  ✓ Avatar agregado: ${testimonial.clientName}`);
      }
    }

    // 4. Features (iconos SVG)
    console.log('\n📸 Subiendo iconos de features...');
    const features = await client.fetch('*[_type == "feature"] | order(id asc)');
    const featureIcons = ['check-icon1.svg', 'trophy-icon1.svg', 'clean-agent-icon1.svg', 'service-icon1.svg'];
    for (let i = 0; i < features.length && i < featureIcons.length; i++) {
      const feature = features[i];
      const iconPath = path.join(imagesBasePath, 'svg', featureIcons[i]);
      if (fs.existsSync(iconPath)) {
        const success = await updateDocumentImage(feature._id, iconPath, 'icon');
        if (success) console.log(`  ✓ Icono agregado: ${feature.title}`);
      } else {
        console.log(`  ⚠️  No se encontró: ${featureIcons[i]}`);
      }
    }

    // 5. About Section
    console.log('\n📸 Subiendo imágenes de About...');
    const aboutSection = await client.fetch('*[_type == "aboutSection"][0]');
    if (aboutSection) {
      const aboutImg1 = path.join(imagesBasePath, 'about', 'about-expand-img1.png');
      const aboutImg2 = path.join(imagesBasePath, 'about', 'about-expand-img2.png');
      
      if (fs.existsSync(aboutImg1)) {
        await updateDocumentImage(aboutSection._id, aboutImg1, 'image1');
        console.log('  ✓ Imagen 1 agregada a About Section');
      }
      if (fs.existsSync(aboutImg2)) {
        await updateDocumentImage(aboutSection._id, aboutImg2, 'image2');
        console.log('  ✓ Imagen 2 agregada a About Section');
      }
    }

    console.log('\n✅ ¡Migración de imágenes completada!');
    console.log('🎉 Ahora puedes ver todo el contenido con imágenes en http://localhost:3333\n');

  } catch (error) {
    console.error('❌ Error durante la migración de imágenes:', error.message);
    process.exit(1);
  }
}

migrateImages();
