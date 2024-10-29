import { FC } from 'react';

import { useTypography } from '../context/TypographyContext';
import { ClassValue, OptionsListType, TextConfig } from '../types';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Card } from '@/components/ui/card';
import { cn } from '../../lib/utils';

type OptionsListProps = {
  label: string;
  list: OptionsListType;
  optionKey: keyof Omit<TextConfig, 'id' | 'text'>;
};

export const OptionsList: FC<OptionsListProps> = ({
  label,
  list,
  optionKey,
}) => {
  const { selectedElementId, texts, updateTextConfig } = useTypography();

  const selectedText = texts.find((text) => text.id === selectedElementId);

  const handleFontChange = (font: ClassValue) => {
    if (selectedElementId)
      updateTextConfig(selectedElementId, { [optionKey]: font });
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{label}</SidebarGroupLabel>
      <SidebarGroupContent>
        <div className='flex flex-col gap-2'>
          {list.map((item) => (
            <Card
              key={item.class}
              onClick={() => handleFontChange(item.class)}
              className={cn(
                'p-2 border rounded cursor-pointer',
                selectedText && selectedText[optionKey] === item.class
                  ? 'border-blue-500'
                  : 'border-gray-300',
                'hover:bg-gray-400 transition-colors duration-200'
              )}
            >
              <p className={cn(item.class, 'text-xl')}>{item.label}</p>
            </Card>
          ))}
        </div>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
