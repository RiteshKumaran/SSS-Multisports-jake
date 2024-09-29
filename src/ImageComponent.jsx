import React from 'react';

const ImageComponent = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={`object-contain w-full ${className}`} />
);

export default ImageComponent;