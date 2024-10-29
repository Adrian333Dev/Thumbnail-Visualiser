import React from 'react';
import { SidebarContent } from '@/components/ui/sidebar';
import TextsList from './TextsList';
import IconsList from './IconsList';

export const RightSidebar: React.FC = () => {
  return (
    <div className='w-64 h-full border-l bg-sidebar'>
      <SidebarContent>
        <TextsList />
        <IconsList />
      </SidebarContent>
    </div>
  );
};
