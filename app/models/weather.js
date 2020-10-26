export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
  }

  get Template() {
    let cel = (this.kelvin - 273.15)
    // @ts-ignore
    let far = parseInt(cel * 9 / 5 + 32)
    return /*html*/`
<div class="mr-2 mt-2">
<div class="d-flex justify-content-end align-items-center"><h1 class="display-4 text-warning"><b>${far}</b></h1><h4 class="text-warning mt-2 align-self-start">&#8457;</h4></div>
<h3 class="mr-3 text-warning"><b>${this.city}</b></h3>
</div>
    `
  }
}


// ((this.kelvin − 273.15) × 9 / 5 + 32)