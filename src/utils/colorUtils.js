export const generateRandomColors = (count) => {
  const colors = [];
  for (let i = 0; i < count; i++) {
    const color = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    colors.push(color);
  }
  return colors;
};