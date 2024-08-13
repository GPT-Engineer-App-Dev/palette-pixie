import React from 'react';
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const ColorPalette = ({ colors }) => {
  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color);
    toast.success(`Copied ${color} to clipboard!`);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {colors.map((color, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-4">
          <div
            className="w-full h-32 rounded-md mb-2"
            style={{ backgroundColor: color }}
          ></div>
          <p className="text-sm font-medium mb-2">{color}</p>
          <Button
            onClick={() => copyToClipboard(color)}
            variant="outline"
            size="sm"
            className="w-full"
          >
            Copy
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;