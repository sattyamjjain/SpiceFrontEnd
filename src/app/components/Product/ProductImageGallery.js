import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

class ProductImageGallery extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }

  render() {
    const { product } = this.props;
    const imgArray = []
    if(product!==null){
      product.productImages.map(prodImg=>{
        imgArray.push({
          original: prodImg.image,
          thumbnail: prodImg.image
        })
      })
    }
    
    const properties = {
      thumbnailPosition: "bottom",
      useBrowserFullscreen: false,
      showPlayButton: false,
      // disableArrowKeys:true,
      showIndex:true,
      showNav:false,
      showFullscreenButton:false,
      // renderItem: this.myRenderItem.bind(this),
      items:imgArray
    };

    return <ImageGallery {...properties} />;
  }
}

export default ProductImageGallery;
