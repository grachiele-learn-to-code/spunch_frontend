class SearchesAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/searches'
  }

  getSearches() {
    return fetch(this.baseUrl).then(response => response.json())
  }

  deleteSearch(searchId) {
    const deleteUrl = `${this.baseUrl}/${searchId}`
    const searchDeleteParams = {
      method: 'DELETE',
      headers: {
        'Content-Type':'application/json'
      }
    }
    return fetch(deleteUrl, searchDeleteParams).then(response => response.json())
  }

  createSearch(body) {
    const searchCreateParams = {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({body})
    }
    return fetch(this.baseUrl, searchCreateParams).then(resp => resp.json())
  }

}
