import React from 'react';
import ImageCard from './ImageCard';

const ImageList = ({ images }) => {
  const renderImages = images.map(img => (
    <ImageCard key={img.id} img={img} />
  ));

  return (
    <div className="img-list">
      {renderImages}
    </div>
  );
};

export default ImageList;
