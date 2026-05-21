const { Jimp } = require('jimp');

async function processLogo() {
    try {
        const image = await Jimp.read('f:\\\\Peer redesign\\\\react-app\\\\src\\\\assets\\\\logos\\\\peer_transparent.png');
        
        // Autocrop the transparent padding around the logo
        image.autocrop();
        
        await image.write('f:\\\\Peer redesign\\\\react-app\\\\src\\\\assets\\\\logos\\\\peer_transparent_cropped.png');
        console.log('Successfully created cropped transparent PNG');
    } catch (err) {
        console.error('Error processing image:', err);
    }
}

processLogo();
