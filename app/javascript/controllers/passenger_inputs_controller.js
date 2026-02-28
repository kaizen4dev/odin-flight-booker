import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="passenger-inputs"
export default class extends Controller {
  connect() {
  }

  remove() {
    this.element.remove()
  }
}
