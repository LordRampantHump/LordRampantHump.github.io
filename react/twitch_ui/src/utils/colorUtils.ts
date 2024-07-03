// utils/colorUtils.ts

// Helper function to generate a random color in HSL format
const getRandomColor = (): string => {
  const hue = Math.floor(Math.random() * 360); // Random hue value (0-360)
  const saturation = '70%'; // Fixed saturation for vibrancy
  const lightness = Math.floor(Math.random() * 30 + 50) + '%'; // Random lightness (50-80%)

  return `hsl(${hue}, ${saturation}, ${lightness})`;
};

// Function to check if a color is light
const isColorLight = (color: string): boolean => {

  return parseInt(color.replace(/[^\d.]/g, '')) > 90; // Example threshold (adjust as needed)
};

// Function to darken a color
const darkenColor = (color: string, amount: number): string => {
  // Parse the HSL values from the color string
  const [, hue, saturation, lightness] = color.match(/hsl\((\d+), (\d+%?), (\d+%?)\)/) || [];
  if (!hue || !saturation || !lightness) {
    //console.log(`Color Utils: Couldnt Parse Color`);
     return color;} // Return original color if parsing fails
  
  // Convert lightness to a numeric value
  const lightnessValue = parseInt(lightness.replace('%', ''));

  // Calculate the new lightness value after darkening
  const newLightness = lightnessValue - amount;

  // Ensure lightness doesn't go below 0
  const finalLightness = Math.max(newLightness, 0);
   
  // Construct the darkened color string
  const finalColor = `hsl(${hue}, ${saturation}, ${finalLightness}%)`;
  //console.log(`Color Utils: ${finalColor}`);
  return finalColor
};


export { getRandomColor, isColorLight, darkenColor };
