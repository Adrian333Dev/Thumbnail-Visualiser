import React from 'react';
import { useTypography } from '../context/TypographyContext';
import { FontFamily } from '../types';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

export const FontFamilyOptions: React.FC = () => {
  const { selectedElementId, texts, updateTextConfig } = useTypography();

  const selectedText = texts.find((text) => text.id === selectedElementId);

  // Tailwind-compatible font classes
  const fontFamilies: Array<{ label: string; class: FontFamily }> = [
    { label: 'This is Sans', class: 'font-sans' },
    { label: 'This is Serif', class: 'font-serif' },
    { label: 'This is Mono', class: 'font-mono' },
    { label: 'This is Display', class: 'font-display' },
    { label: 'This is Body', class: 'font-body' },
  ];

  const handleFontChange = (font: FontFamily) => {
    if (selectedElementId) {
      updateTextConfig(selectedElementId, { font });
    }
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Font Family</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {fontFamilies.map((item) => (
            <SidebarMenuItem key={item.class}>
              <SidebarMenuButton
                onClick={() => handleFontChange(item.class)}
                className={`p-2 border rounded ${
                  selectedText && selectedText.font === item.class
                    ? 'border-blue-500 bg-blue-100'
                    : 'border-gray-300'
                } 
                        ${
                          item.class
                        } hover:bg-gray-200 transition-colors duration-200`}
              >
                {item.label}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
