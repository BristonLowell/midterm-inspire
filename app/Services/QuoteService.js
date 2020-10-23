import { api } from "./AxiosService.js";
import { ProxyState } from "../AppState.js"
import Quote from "../models/Quote.js";


//TODO create methods to retrieve data and update the State
class QuoteService {
  async getQuotes() {
    let res = await api.get("quotes")
    console.log(res.data);
    ProxyState.quotes = res.data.quote
  }



  constructor() {

  }
}


export const quoteService = new QuoteService();