import React from "react";
import ImageBlock from "./ImageBlock";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const SearchResults = (props) => {
  const images = (props.images.data || []).map((image) => {
    return (
      <GridList cellHeight={160} cols={3}>
        {(props.images.data || []).map((image) => (
          <GridListTile key={image.id}>
            <ImageBlock key={image.id} image={image} />
          </GridListTile>
        ))}
      </GridList>
    );
  });

  return <div className="image-gallery"> {images} </div>;
};

export default SearchResults;
