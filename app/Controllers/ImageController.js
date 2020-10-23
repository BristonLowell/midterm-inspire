
//TODO Create methods for constructor, and rendering the image to the page

import { ProxyState } from "../AppState.js";
import imageService from "../Services/ImageService.js";

//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)

function _drawImages() {
  console.log(ProxyState.images);
  document.body.style.backgroundImage = `url('${ProxyState.images.url}')`
}
export default class ImageController {
  constructor() {
    this.getImages()
    ProxyState.on("images", _drawImages)
    console.log("hello from the image controller");
  }

  getImages() {
    try {
      imageService.getImages()
    } catch (error) {
      console.error(error);
    }
  }
}