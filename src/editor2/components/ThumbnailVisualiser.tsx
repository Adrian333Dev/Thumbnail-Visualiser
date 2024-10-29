import { useState } from 'react';
import { Card } from '@/components/ui/card'; // Assuming Shadcn is set up
import { cn } from '@/lib/utils'; // Assuming a utility class from Shadcn setup
import { useTypography } from '../context/TypographyContext';

const images = [
  { id: 1, src: '/public/1.jpeg', alt: 'Image 1' },
  { id: 2, src: '/public/2.jpg', alt: 'Image 2' },
  { id: 3, src: '/public/3.avif', alt: 'Image 3' },
  { id: 4, src: '/public/4.jpg', alt: 'Image 4' },
  { id: 5, src: '/public/5.jpg', alt: 'Image 5' },
];

export default function ThumbnailVisualiser() {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const { texts } = useTypography();

  return (
    <div className='h-full flex flex-1 p-4 max-h-screen flex-col'>
      {/* Thumbnail Image List */}
      <div className='h-28 flex overflow-x-auto space-x-3'>
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            onClick={() => setSelectedImage(image)}
            className={cn(
              'h-20 w-20 object-cover rounded-sm shadow-sm hover:shadow-lg transition duration-200 ease-in-out',
              selectedImage.id === image.id
                ? 'border-2 border-indigo-500 transform scale-105'
                : 'border border-transparent hover:border-gray-300'
            )}
          />
        ))}
      </div>

      <Card className='flex-grow h-full rounded-sm shadow-lg overflow-hidden relative'>
        <img
          src={selectedImage.src}
          alt={selectedImage.alt}
          className='object-cover w-full h-full transition-all duration-300 ease-in-out'
        />

        {/* Texts */}
        {texts.map((text) => (
          <span
            key={text.id}
            className={cn(
              'absolute',
              text.customStyle,
              text.position,
              // text.effects,
              // text.color,
              // text.font,
              text.size,
              text.background
              // Add more styles as needed
            )}
          >
            {text.text}
          </span>
        ))}
      </Card>
    </div>
  );
}
