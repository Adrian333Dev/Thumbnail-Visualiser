export type FontFamily =
  | 'font-sans'
  | 'font-serif'
  | 'font-mono'
  | 'font-display'
  | 'font-body';
export type FontSize =
  | 'text-xs'
  | 'text-sm'
  | 'text-base'
  | 'text-lg'
  | 'text-xl'
  | 'text-2xl';
export type TextEffects =
  | 'italic'
  | 'underline'
  | 'line-through'
  | 'uppercase'
  | 'lowercase'
  | 'capitalize';
export type Background = 'bg-transparent' | 'bg-gray-100' | 'bg-gray-200';
export type Position =
  | 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'
  | 'top-0 left-0'
  | 'bottom-0 right-0'
  | 'bottom-0 left-0';
export type TextColor =
  | 'text-black'
  | 'text-gray-500'
  | 'text-red-500'
  | 'text-blue-500';

export type CustomTextStyle = string;

export type TextConfig = {
  id: string;
  text: string;
  font: FontFamily;
  size: FontSize;
  effects: TextEffects | '';
  background: Background | '';
  position: Position;
  color: TextColor;
  customStyle: CustomTextStyle;
};

// ! Icons
export type IconEffects =
  | 'shadow-md'
  | 'shadow-lg'
  | 'opacity-50'
  | 'opacity-75';

export type IconConfig = {
  id: string;
  src: string;
  alt: string;
  position: Position;
  color: TextColor;
  effects: IconEffects | '';
};

// ---

export type OptionsListProps = {
  label: string;
  list: Array<{
    label: string;
    class: ClassValue;
  }>;
  key: keyof Omit<TextConfig, 'id' | 'text'>;
};

export type ClassValue =
  | FontFamily
  | FontSize
  | TextEffects
  | Background
  | Position
  | TextColor
  | CustomTextStyle;

export type OptionsListType = Array<{ label: string; class: ClassValue }>;
