import { OptionsListType } from './types';

export const fontFamilies: OptionsListType = [
  { label: 'This is Sans', class: 'font-sans' },
  { label: 'This is Serif', class: 'font-serif' },
  { label: 'This is Mono', class: 'font-mono' },
  { label: 'This is Display', class: 'font-display' },
  { label: 'This is Body', class: 'font-body' },
];

export const fontSizes: OptionsListType = [
  { label: 'Extra Small', class: 'text-xs' },
  { label: 'Small', class: 'text-sm' },
  { label: 'Medium', class: 'text-base' },
  { label: 'Large', class: 'text-lg' },
  { label: 'Extra Large', class: 'text-xl' },
  { label: '2X Large', class: 'text-2xl' },
  { label: '3X Large', class: 'text-3xl' },
  { label: '4X Large', class: 'text-4xl' },
  { label: '5X Large', class: 'text-5xl' },
  { label: '6X Large', class: 'text-6xl' },
];

export const textEffects: OptionsListType = [
  { label: 'This is Italic', class: 'italic' },
  { label: 'This is Underline', class: 'underline' },
  { label: 'This is Line-through', class: 'line-through' },
  { label: 'This is Uppercase', class: 'uppercase' },
  { label: 'This is Lowercase', class: 'lowercase' },
  { label: 'This is Capitalize', class: 'capitalize' },
];

export const background: OptionsListType = [
  { label: 'This is Transparent', class: 'bg-transparent' },
  { label: 'This is Gray-100', class: 'bg-gray-100' },
  { label: 'This is Gray-200', class: 'bg-gray-200' },
];

export const position: OptionsListType = [
  { label: 'This is Top-0 Left-0', class: 'top-0 left-0' },
  { label: 'This is Top-0 Right-0', class: 'top-0 right-0' },
  { label: 'This is Bottom-0 Left-0', class: 'bottom-0 left-0' },
  { label: 'This is Bottom-0 Right-0', class: 'bottom-0 right-0' },
];

export const textColor: OptionsListType = [
  { label: 'This is Black', class: 'text-black' },
  { label: 'This is Gray-500', class: 'text-gray-500' },
  { label: 'This is Red-500', class: 'text-red-500' },
  { label: 'This is Blue-500', class: 'text-blue-500' },
];

export const customTextStyles: OptionsListType = [
  // Last Five
  {
    label: 'Bold 3D Shadow Effect',
    class:
      'text-5xl font-extrabold text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,0.9)]',
  },
  {
    label: 'Oversized Black Text with Neon Double Outline',
    class:
      'text-5xl font-extrabold text-black drop-shadow-[3px_3px_0px_rgba(255,255,255,1),6px_6px_0px_rgba(0,170,255,0.9)]',
  },
  {
    label:
      'Italicized Bold Text with Thick White Shadow and Light Glowing Edge',
    class:
      'text-5xl italic font-extrabold text-gray-900 drop-shadow-[0_0_8px_rgba(255,255,255,1),0_0_12px_rgba(0,0,0,0.4)]',
  },
  {
    label: 'Gradient Text with Bold Dark Shadow and Light Glowing Outline',
    class:
      'text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500 drop-shadow-[2px_2px_6px_rgba(0,0,0,0.8),0_0_4px_rgba(255,255,255,0.9)]',
  },
  {
    label: 'Retro Comic Book Style with Heavy Drop Shadow and Outline',
    class:
      'text-6xl font-extrabold text-yellow-400 drop-shadow-[6px_6px_0px_rgba(0,0,0,1)] tracking-wider',
  },
  {
    label: 'Your Text Here',
    class:
      'text-5xl font-extrabold text-black drop-shadow-[0_0_5px_rgba(255,255,255,1)]',
  },
  {
    label: 'Your Text Here',
    class:
      'text-5xl font-extrabold text-white drop-shadow-[0_0_5px_rgba(0,0,0,1)]',
  },
  {
    label: 'Your Text Here',
    class:
      'text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 drop-shadow-lg',
  },
  {
    label: 'Your Text Here',
    class:
      'text-5xl font-extrabold text-black drop-shadow-[0_0_8px_rgba(0,170,255,0.9)]',
  },
  {
    label: 'Your Text Here',
    class:
      'text-5xl font-extrabold text-white drop-shadow-[0_0_5px_rgba(255,255,0,0.7)]',
  },
  {
    label: 'Your Text Here',
    class:
      'text-5xl font-extrabold text-black drop-shadow-[0_0_3px_rgba(255,255,255,1),0_0_6px_rgba(0,0,0,0.8)]',
  },
  {
    label: 'Your Text Here',
    class:
      'text-5xl font-bold text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.7),-2px_-2px_0_rgba(0,0,0,0.7)]',
  },
  {
    label: 'Your Text Here',
    class:
      'text-5xl font-bold text-black drop-shadow-[0_0_6px_rgba(255,0,0,0.6)]',
  },
  {
    label: 'Your Text Here',
    class:
      'text-5xl font-extrabold text-white drop-shadow-[0_0_1px_rgba(0,0,0,1),0_0_5px_rgba(0,0,0,0.5)]',
  },
  {
    label: 'Your Text Here',
    class:
      'text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]',
  },
];
