import React, { Component } from "react";

class ImageBlock extends Component {
  render() {
    const { description } = this.props.image;
    return (
      <div className="image-block">
        <img alt={description} src={this.props.image.assets.small_thumb.url} />
      </div>
    );
  }
}

export default ImageBlock;
