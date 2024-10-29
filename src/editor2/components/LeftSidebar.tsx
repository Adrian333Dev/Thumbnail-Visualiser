import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from '@/components/ui/sidebar';
import { FontFamilyOptions } from './FontFamilyOptions';
import { OptionsList } from './OptionsList';
import { customTextStyles, fontSizes } from '../constants';

export const LeftSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>Text Options</SidebarHeader>
      <SidebarContent>
        <OptionsList label='Font Size' list={customTextStyles} optionKey='customStyle' />
        <FontFamilyOptions />
        <OptionsList label='Font Size' list={fontSizes} optionKey='size' />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};
