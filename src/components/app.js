class App {
  constructor() {
  	this.restaurants = []
    this.filtered = null
  }

  filterRestaurantsByZip(zipcode) {
     this.filtered = this.restaurants.filter(restaurant => restaurant.zipcode == zipcode)
  }
   // input button and eventListener on main page
  	//  callback function when event gets fired to fetch the list of restaurants
  	//  will then call the adapter(searches) then run getSearches
  	//   - add a ".then" to save promise data

}
