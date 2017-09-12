class Restaurant {
  constructor(searchJSON) {
    debugger
    this.body = searchJSON.body
    this.id = searchJSON.id
  }

  render() {
    return `<li data-searchid='${this.id}' data-props='${JSON.stringify(this)}' class='seach-element'>${this.body} <i data-action='delete-search' class="em em-scream_cat"></i></li>`
  }
}
