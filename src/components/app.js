class App {
  constructor() {
  	this.restaurants = []
  }

  filterRestaurantsByZip(zipcode) {
     this.restaurants = this.restaurants.filter(restaurant => restaurant.zipcode == zipcode)
  }
   // input button and eventListener on main page
  	//  callback function when event gets fired to fetch the list of restaurants
  	//  will then call the adapter(searches) then run getSearches
  	//   - add a ".then" to save promise data

}
