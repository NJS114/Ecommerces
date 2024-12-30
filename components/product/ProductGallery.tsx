import React from 'react';

type ProductGalleryProps = {
  images: string[];
};

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  return (
    <div className="product-gallery">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Gallery image ${index + 1}`} />
      ))}
    </div>
  );
};

export default ProductGallery;
