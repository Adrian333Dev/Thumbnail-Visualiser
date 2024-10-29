import React from 'react';

import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { TypographyProvider } from './context/TypographyContext';
import { LeftSidebar } from './components/LeftSidebar';
import ThumbnailVisualiser from './components/ThumbnailVisualiser';
import { RightSidebar } from './components/RightSidebar';

const Editor1: React.FC = () => {
  return (
    <TypographyProvider>
      <SidebarProvider
        style={{
          '--sidebar-width': '18rem',
          '--sidebar-width-mobile': '18rem',
        }}
      >
        <LeftSidebar />
        <div className='w-full min-h-screen flex items-center justify-between'>
          <SidebarTrigger className='place-self-start' />
          <ThumbnailVisualiser />
          <RightSidebar />
        </div>
      </SidebarProvider>
    </TypographyProvider>
  );
};

export default Editor1;
