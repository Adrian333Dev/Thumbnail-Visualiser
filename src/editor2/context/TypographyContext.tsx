import React, { createContext, useContext, useState } from 'react';
import { TextConfig, IconConfig } from '../types';

type TypographyContextType = {
  texts: TextConfig[];
  icons: IconConfig[];
  selectedElementId: string | null;
  addText: () => void;
  addIcon: () => void;
  selectElement: (id: string) => void;
  updateTextConfig: (id: string, updatedConfig: Partial<TextConfig>) => void;
  updateIconConfig: (id: string, updatedConfig: Partial<IconConfig>) => void;
};

const TypographyContext = createContext<TypographyContextType | undefined>(
  undefined
);

export const TypographyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [texts, setTexts] = useState<TextConfig[]>([
    {
      id: 'text-1',
      text: 'Hello, World!',
      font: 'font-mono',
      size: 'text-lg',
      effects: '',
      background: '',
      position:
        'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center',
      color: 'text-black',
      customStyle: '',
    },
  ]);
  const [icons, setIcons] = useState<IconConfig[]>([]);
  const [selectedElementId, setSelectedElementId] = useState<string | null>(
    texts[0].id
  );

  const addText = () => {
    const newText: TextConfig = {
      id: `text-${Date.now()}`,
      text: 'New Text',
      font: 'font-mono',
      size: 'text-lg',
      effects: '',
      background: '',
      position: 'bottom-0 right-0',
      color: 'text-black',
      customStyle: '',
    };
    setTexts([...texts, newText]);
    setSelectedElementId(newText.id);
  };

  const addIcon = () => {
    const newIcon: IconConfig = {
      id: `icon-${Date.now()}`,
      src: '/path/to/icon.png',
      alt: 'New IconConfig',
      position: 'bottom-0 left-0',
      color: 'text-black',
      effects: '',
    };
    setIcons([...icons, newIcon]);
    setSelectedElementId(newIcon.id);
  };

  const selectElement = (id: string) => {
    setSelectedElementId(id);
  };

  const updateTextConfig = (id: string, updatedConfig: Partial<TextConfig>) => {
    setTexts((prev) =>
      prev.map((text) =>
        text.id === id ? { ...text, ...updatedConfig } : text
      )
    );
  };

  const updateIconConfig = (id: string, updatedConfig: Partial<IconConfig>) => {
    setIcons((prev) =>
      prev.map((icon) =>
        icon.id === id ? { ...icon, ...updatedConfig } : icon
      )
    );
  };

  return (
    <TypographyContext.Provider
      value={{
        texts,
        icons,
        selectedElementId,
        addText,
        addIcon,
        selectElement,
        updateTextConfig,
        updateIconConfig,
      }}
    >
      {children}
    </TypographyContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTypography = () => {
  const context = useContext(TypographyContext);
  if (!context)
    throw new Error('useTypography must be used within a TypographyProvider');
  return context;
};
