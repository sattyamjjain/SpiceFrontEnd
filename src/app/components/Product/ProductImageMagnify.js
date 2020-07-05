import React, { Component } from "react";

import ReactImageMagnify from "react-image-magnify";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {}
});

class ProductImageMagnify extends Component {
  render() {
    return (
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: "Wristwatch by Ted Baker London",
            isFluidWidth: true,
            // width: 400,
            // height: 400,
            src: require('../images/haldi.jpg')
          },
          largeImage: {
            src: require('../images/haldi.jpg'),
            width: 640,
            height: 480
          },
          enlargedImagePortalId: "myPortal",
        //   enlargedImagePosition:"over"
        }}
      />
    );
  }
}

export default withStyles(styles)(ProductImageMagnify);
