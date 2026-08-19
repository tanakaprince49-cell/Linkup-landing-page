const sharp = require('sharp');
const pngToIco = require('png-to-ico');
const fs = require('fs');

async function generate() {
  try {
    // Make PNGs
    await sharp('./public/raw_logo.webp').resize(192, 192).png().toFile('./public/linkup-logo-v6.png');
    await sharp('./public/raw_logo.webp').resize(180, 180).png().toFile('./public/linkup-apple-icon-v6.png');
    
    // Make a 256x256 temporary PNG for the ICO
    await sharp('./public/raw_logo.webp').resize(256, 256).png().toFile('./public/temp.png');
    
    // Convert to true ICO
    let converter = pngToIco;
    if (typeof converter !== 'function') converter = converter.default || converter.pngToIco;
    const buf = await converter('./public/temp.png');
    fs.writeFileSync('./public/linkup-logo-v6.ico', buf);
    fs.writeFileSync('./public/favicon.ico', buf);
    
    // Cleanup
    fs.unlinkSync('./public/temp.png');
    console.log('Successfully created v6 icons!');
  } catch (err) {
    console.error(err);
  }
}
generate();
