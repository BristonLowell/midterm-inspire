export default class Image {
  constructor(data) {
    this.id = data.id
    this.url = data.large_url || data.url
  }
}




// copyright: "CC0"
// id: 332
// large_url: "https://splashbase.s3.amazonaws.com/unsplash/large/1fhhlK6"
// site: "unsplash"
// source_id: 89
// url: "https://splashbase.s3.amazonaws.com/unsplash/regular/tumblr_n5e5qd8BB81st5lhmo1_1280.jpg"