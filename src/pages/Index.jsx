import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ColorPalette from '../components/ColorPalette';
import Sidebar from '../components/Sidebar';
import { generateRandomColors } from '../utils/colorUtils';

const Index = () => {
  const [colors, setColors] = useState(generateRandomColors(7));
  const [inputColor, setInputColor] = useState('');

  const handleGenerateColors = () => {
    setColors(generateRandomColors(7));
  };

  const handleInputChange = (e) => {
    setInputColor(e.target.value);
  };

  const handleAddColor = () => {
    if (inputColor) {
      setColors([...colors, inputColor]);
      setInputColor('');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Color Palette Generator</h1>
        <div className="mb-6 flex space-x-4">
          <Input
            type="text"
            placeholder="Enter a color (e.g., #FF5733)"
            value={inputColor}
            onChange={handleInputChange}
            className="flex-grow"
          />
          <Button onClick={handleAddColor}>Add Color</Button>
          <Button onClick={handleGenerateColors}>Generate Random</Button>
        </div>
        <ColorPalette colors={colors} />
      </main>
    </div>
  );
};

export default Index;