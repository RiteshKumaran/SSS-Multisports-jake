import React from 'react';
import ImageComponent from './ImageComponent';
import VisitUs from './VisitUs.jsx';

const images = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/85a211d4367c01e460846f8113ad15564b8620c81854aa17cb54cbc4b9a85ed6?placeholderIfAbsent=true&apiKey=255c12830b254ce88f1fb2f0fec3dd68", alt: "", className: "aspect-[1.6] max-md:max-w-full" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d55a724c7e47bcbaac30a1c633718b9584b29976c5c2662833fcc0486b1a5eb7?placeholderIfAbsent=true&apiKey=255c12830b254ce88f1fb2f0fec3dd68", alt: "", className: "aspect-[1.8] max-md:max-w-full" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/30814b7bc84f35dd61f16f65e909846c9d5cbe4435b374180d155dfc048915a1?placeholderIfAbsent=true&apiKey=255c12830b254ce88f1fb2f0fec3dd68", alt: "", className: "aspect-[1.6] max-md:max-w-full" }
];

function MyComponent() {
  return (
    <main className="flex flex-col text-white">
      {images.map((image, index) => (
        <ImageComponent key={index} {...image} />
      ))}
      <VisitUs />
    </main>
  );
}

export default MyComponent;