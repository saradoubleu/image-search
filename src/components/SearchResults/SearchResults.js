import React from "react";
import ImageBlock from "./ImageBlock";

const SearchResults = (props) => {
  const images = props.images.data
    ? props.images.data.map((image) => {
        return <ImageBlock key={image.id} image={image} />;
      })
    : [];

  return <div className="image-gallery"> {images} </div>;
};

export default SearchResults;
