const app = new App()
const adapter = new SearchesAdapter()

	const saveSearch = document.getElementById('search')

  	saveSearch.addEventListener('click', restaurantHandler)



  function restaurantHandler() {
  	event.preventDefault()
  	adapter.getSearches()
  	.then((response) => {
  		console.log(response)
  		response.forEach(restaurant => app.restaurants.push(restaurant))
  		console.log(app.restaurants)
  	})
  }










// console.log(app);
