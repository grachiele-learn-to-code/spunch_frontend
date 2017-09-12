class Searches {
  constructor() {
    this.searches = []
    this.initBindingsAndEventListeners()
    this.adapter = new SearchesAdapter()
    this.fetchAndLoadSearches()
  }

  initBindingsAndEventListeners() {
    this.searchesForm = document.getElementById('new-search-form')
    this.searchInput = document.getElementById('new-search-body')
    this.searchesNode = document.getElementById('searches-container')
    this.searchesForm.addEventListener('submit',this.handleAddSearch.bind(this))
    this.searchesNode.addEventListener('click',this.handleDeleteSearch.bind(this))
  }

  fetchAndLoadSearches() {
    this.adapter.getSearches()
    .then( searchesJSON => searchesJSON.forEach( search => this.searches.push( new Search(search) )))
      .then( this.render.bind(this) )
      .catch( () => alert('The server does not appear to be running') )
  }

  handleAddSearch() {
    event.preventDefault()
    const body = this.searchInput.value
    this.adapter.createSearch(body)
    .then( (searchJSON) => this.searches.push(new Search(searchJSON)) )
    .then(  this.render.bind(this) )
    .then( () => this.searchInput.value = '' )
  }

  handleDeleteSearch() {
    if (event.target.dataset.action === 'delete-search' && event.target.parentElement.classList.contains("search-element")) {
      const searchId = event.target.parentElement.dataset.searchid
      this.adapter.deleteSearch(searchId)
      .then( resp => this.removeDeletedSearch(resp) )
    }
  }

  removeDeletedSearch(deleteResponse) {
    this.searches = this.searches.filter( search => search.id !== deleteResponse.searchId )
    this.render()
  }

  searchesHTML() {
    return this.searches.map( search => search.render() ).join('')
  }

  render() {
    this.searchesNode.innerHTML = `<ul>${this.searchesHTML()}</ul>`
  }
}
