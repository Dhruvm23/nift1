const sizeChartImage = document.getElementById('sizeChartImage');
const sizeChartImageH = document.getElementById('sizeChartImageH');
const garmentImage = document.getElementById('garmentImage');

// Get the query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);
const garment = urlParams.get('garment');
const fabric = urlParams.get('fabric');

// Set the size chart image based on the selected garment and fabric
sizeChartImage.src = `size-charts/${garment}_${fabric}_English.png`;
sizeChartImageH.src = `size-charts/${garment}_${fabric}_Hindi.png`;

garmentImage.src = `garment-images/${garment}.png`;  // Assuming the size chart images are stored in a "size-charts" folder in the same directory

