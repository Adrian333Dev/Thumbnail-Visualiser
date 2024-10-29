import React from 'react';
import { useTypography } from '../context/TypographyContext';
import { TextEffects } from '../types';

export const StyleOption: React.FC = () => {
  const { selectedElementId, texts, updateTextConfig } = useTypography();

  // Tailwind-compatible text effect classes
  const textEffects: Array<{ label: string; class: TextEffects }> = [
    { label: 'Italic', class: 'italic' },
    { label: 'Underline', class: 'underline' },
    { label: 'Line-Through', class: 'line-through' },
    { label: 'Uppercase', class: 'uppercase' },
    { label: 'Lowercase', class: 'lowercase' },
    { label: 'Capitalize', class: 'capitalize' },
  ];

  const selectedText = texts.find((text) => text.id === selectedElementId);
  if (!selectedText) return null;

  const handleEffectChange = (effect: TextEffects) => {
    if (selectedElementId) {
      updateTextConfig(selectedElementId, { effects: effect });
    }
  };

  return (
    <div className='mb-4'>
      <h3 className='font-bold text-lg mb-2'>Text Effects</h3>
      <div className='flex flex-wrap gap-2'>
        {textEffects.map((effectOption) => (
          <button
            key={effectOption.class}
            onClick={() => handleEffectChange(effectOption.class)}
            className={`p-2 border rounded ${
              selectedText.effects === effectOption.class
                ? 'border-blue-500 bg-blue-100'
                : 'border-gray-300'
            } 
                        ${
                          effectOption.class
                        } hover:bg-gray-200 transition-colors duration-200`}
          >
            {effectOption.label}
          </button>
        ))}
      </div>
    </div>
  );
};
