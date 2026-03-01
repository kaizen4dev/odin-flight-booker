import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="passengers"
export default class extends Controller {
  connect() {
    while (this.element.children.length < 4) {
      let number = this.element.children.length
      let element = document.createElement("div")

      this.element.append(element)

      element.outerHTML = `
        <div data-controller="passenger-inputs" data-passenger-inputs-index-value="${number}">
        </div>
      `
    }
  }
}
