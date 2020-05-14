import React from "react";
import Masonry from "react-masonry-component";

const Gallery = () => {
  const masonryOptions = {
    transitionDuration: 0,
  };

  const imagesLoadedOptions = {
    itemSelector: ".grid-item",
    columnWidth: ".grid-sizer",
    percentPosition: true,
  };

  const content = () => {
    const list = [];
    for (let i = 1; i <= 39; i++) {
      list.push(
        <div className="gallery-element">
          <img
            src={require(`images/gallery/${i}.jpeg`)}
            alt="demo pictures of different dimensions, elements for mansonry display"
          />
        </div>
      );
    }
    return list;
  };

  return (
    <Masonry
      className="gallery"
      elementType="div"
      options={masonryOptions}
      // disableImagesLoaded={false}
      // updateOnEachImageLoad={false}
      imagesLoadedOptions={imagesLoadedOptions}
    >
      {content()}
    </Masonry>
  );
};

export default Gallery;
