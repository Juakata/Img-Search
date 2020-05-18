import React from 'react';

const ImageList = ({ images }) => {
  const renderImages = images.map(img => (
    <img src={img.urls.regular} alt={img.description} key={img.id} />
  ));

  return (
    <div className="img-list">
      {renderImages}
    </div>
  );
};

export default ImageList;
