// Script de prueba para verificar el servidor
const http = require('http');

console.log('🔍 Probando conexión al servidor...');

const options = {
  hostname: 'localhost',
  port: 5000,
  path: '/api/services',
  method: 'GET'
};

const req = http.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('✅ Servidor responde correctamente!');
    console.log('Status:', res.statusCode);
    console.log('Response:', data.substring(0, 200) + '...');
  });
});

req.on('error', (error) => {
  console.error('❌ Error conectando al servidor:', error.message);
  console.log('\n⚠️ Asegúrate de que el servidor esté corriendo en el puerto 5000');
});

req.end();

// Timeout
setTimeout(() => {
  console.log('⏱️ Timeout alcanzado');
  process.exit(0);
}, 5000);
