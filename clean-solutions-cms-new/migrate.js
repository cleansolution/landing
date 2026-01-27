import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cliente de Sanity
const client = createClient({
  projectId: '46yhl3mt',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN || '' // Usaremos token si está disponible
});

// Función para leer archivos JSON
const readJSON = (filePath) => {
  const fullPath = path.join(__dirname, '..', 'src', 'data', filePath);
  return JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
};

async function migrateData() {
  console.log('🚀 Iniciando migración de datos a Sanity...\n');

  try {
    // 1. Migrar Features
    console.log('📝 Migrando Features...');
    const featuresData = readJSON('featuresData.json');
    for (const feature of featuresData.features) {
      await client.create({
        _type: 'feature',
        id: feature.id,
        title: feature.title,
        description: feature.description,
        // Nota: Las imágenes se tendrán que subir manualmente desde el Studio
      });
      console.log(`  ✓ Feature creado: ${feature.title}`);
    }

    // 2. Migrar Services
    console.log('\n🛠️  Migrando Services...');
    const servicesData = readJSON('servicesData.json');
    for (const service of servicesData.services) {
      await client.create({
        _type: 'service',
        id: service.id,
        title: service.title,
        desc: service.desc,
        link: service.link,
        // Nota: Las imágenes se tendrán que subir manualmente desde el Studio
      });
      console.log(`  ✓ Service creado: ${service.title}`);
    }

    // 3. Migrar Team Members
    console.log('\n👥 Migrando Team Members...');
    const teamData = readJSON('teamData.json');
    for (const member of teamData) {
      await client.create({
        _type: 'teamMember',
        id: member.id,
        name: member.name,
        position: member.role,
        bio: '',
        experience: '',
        // Nota: Las imágenes se tendrán que subir manualmente desde el Studio
      });
      console.log(`  ✓ Team member creado: ${member.name}`);
    }

    // 4. Migrar Testimonials
    console.log('\n💬 Migrando Testimonials...');
    const testimonialData = readJSON('testimonailData.json');
    for (const testimonial of testimonialData) {
      await client.create({
        _type: 'testimonial',
        id: testimonial.id,
        clientName: testimonial.name,
        clientTitle: testimonial.role || '',
        rating: 5,
        testimonial: testimonial.text,
        featured: false,
        // Nota: Las imágenes se tendrán que subir manualmente desde el Studio
      });
      console.log(`  ✓ Testimonial creado: ${testimonial.name}`);
    }

    // 5. Migrar About Section
    console.log('\n🏢 Migrando About Section...');
    const aboutData = readJSON('aboutData.json');
    await client.create({
      _type: 'aboutSection',
      sectionTitle: aboutData.sectionTitle,
      mainTitle: aboutData.mainTitle,
      description: aboutData.description,
      // Nota: Las imágenes se tendrán que subir manualmente desde el Studio
    });
    console.log('  ✓ About Section creado');

    // 6. Migrar Why Choose Us
    console.log('\n🎯 Migrando Why Choose Us...');
    const sectionsData = readJSON('sectionsData.json');
    await client.create({
      _type: 'whyChooseUs',
      sectionTitle: sectionsData.whyChooseUs.sectionTitle,
      mainTitle: sectionsData.whyChooseUs.mainTitle,
      description: sectionsData.whyChooseUs.description,
      benefits: sectionsData.whyChooseUs.benefits,
    });
    console.log('  ✓ Why Choose Us creado');

    console.log('\n✅ ¡Migración completada exitosamente!');
    console.log('\n📌 Nota: Las imágenes deben ser subidas manualmente desde el Sanity Studio');
    console.log('   Ve a http://localhost:3333 para agregar las imágenes a cada documento\n');

  } catch (error) {
    console.error('❌ Error durante la migración:', error.message);
    process.exit(1);
  }
}

// Ejecutar migración
migrateData();
