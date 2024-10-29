import { FC } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { useTypography } from '../context/TypographyContext';

const TextsList: FC = () => {
  const { texts, addText, selectElement, selectedElementId } = useTypography();
  return (
    <SidebarGroup className='border-b'>
      <SidebarGroupContent>
        <div className='flex justify-between items-center'>
          <p className='text-lg'>Texts</p>
          <Button variant='outline' size='icon' onClick={addText}>
            <Plus />
          </Button>
        </div>
        <SidebarMenu>
          {texts.map((item) => {
            const isSelected = item.id === selectedElementId;
            return (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton
                  className={`p-2 border rounded ${
                    isSelected
                      ? 'border-blue-500 bg-blue-100'
                      : 'border-gray-300'
                  } hover:bg-gray-200 transition-colors duration-200`}
                  onClick={() => selectElement(item.id)}
                >
                  {item.text}
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default TextsList;
