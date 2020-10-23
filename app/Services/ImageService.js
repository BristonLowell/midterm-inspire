//TODO create methods to retrieve data and save to the State
import { api } from "./AxiosService.js"
import { ProxyState } from "../AppState.js"
import Image from "../models/Image.js"
class ImageService {
  async getImages() {
    console.log("hello from the image service");
    let res = await api.get("images")
    ProxyState.images = res.data
  }
}

const imageService = new ImageService();
export default imageService;




