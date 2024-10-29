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

const IconsList: FC = () => {
  const { icons, addIcon, selectElement, selectedElementId } = useTypography();
  return (
    <SidebarGroup className='border-b'>
      <SidebarGroupContent>
        <div className='flex justify-between items-center'>
          <p className='text-lg'>Icons</p>
          <Button variant='outline' size='icon' onClick={addIcon}>
            <Plus />
          </Button>
        </div>
        <SidebarMenu>
          {icons.map((item) => {
            const isSelected = item.id === selectedElementId;
            return (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton
                  className={`p-2 border rounded ${
                    isSelected
                      ? 'border-blue-500 bg-blue-100'
                      : 'border-gray-300'
                  } hover:bg-gray-200 transition-colors duration-200`}
                  onSelect={() => selectElement(item.id)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className='w-8 h-8 object-contain'
                  />
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default IconsList;
