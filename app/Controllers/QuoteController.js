import { ProxyState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js";

//TODO Create methods for constructor, and rendering the quote to the page
function _drawQuotes() {
  document.getElementById("quote").innerHTML = (`<b>"` + ProxyState.quotes.body + `"` + ` -` + ProxyState.quotes.author + `</b>`)
}
export default class QuoteController {
  constructor() {
    this.getQuotes()
    ProxyState.on("quotes", _drawQuotes)
  }

  getQuotes() {
    try {
      quoteService.getQuotes()
    } catch (error) {
      console.error(error);
    }
  }
}