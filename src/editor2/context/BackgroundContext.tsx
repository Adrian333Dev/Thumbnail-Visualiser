// src/context/TypographyContext.tsx
import React, { createContext, useContext, useState } from 'react';

type BackgroundContextType = {
  selectedBackground: string;
  setSelectedBackground: (background: string) => void;
};

const BackgroundContext = createContext<BackgroundContextType | undefined>(
  undefined
);

export const BackgroundProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedBackground, setSelectedBackground] = useState<string>('');

  return (
    <BackgroundContext.Provider
      value={{ selectedBackground, setSelectedBackground }}
    >
      {children}
    </BackgroundContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useBackground = () => {
  const context = useContext(BackgroundContext);
  if (!context)
    throw new Error('useBackground must be used within a BackgroundProvider');
  return context;
};
