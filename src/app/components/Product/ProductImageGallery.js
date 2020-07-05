import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import ProductImageMagnify from "./ProductImageMagnify";

class ProductImageGallery extends Component {
  // myRenderItem() {
  //   return <ProductImageMagnify {...this.props} />;
  // }

  render() {
    const properties = {
      thumbnailPosition: "bottom",
      useBrowserFullscreen: false,
      showPlayButton: false,
      // disableArrowKeys:true,
      showIndex:true,
      showNav:false,
      showFullscreenButton:false,
      // renderItem: this.myRenderItem.bind(this),
      items: [
        {
          original: require('../images/haldi.jpg'),
          thumbnail: require('../images/haldi.jpg')
        },
        {
          original: require('../images/haldi.jpg'),
          thumbnail: require('../images/haldi.jpg')
        },
        {
          original: require('../images/haldi.jpg'),
          thumbnail: require('../images/haldi.jpg')
        }
      ]
    };

    return <ImageGallery {...properties} />;
  }
}

export default ProductImageGallery;
