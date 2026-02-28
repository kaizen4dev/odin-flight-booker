import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="passengers"
export default class extends Controller {
  connect() {
  }

  new() {
    let number = this.element.children.length
    if (number < 5) {
      let element = document.createElement("div")

      console.log(this.element.children)
      this.element.prepend(element)

      element.outerHTML = `
        <div data-controller="passenger-inputs">
          <div>
            <label for="booking_passengers_attributes_${number}_name">Name</label>
            <input type="text" name="booking[passengers_attributes][${number}][name]" id="booking_passengers_attributes_${number}_name">
          </div>
          <div>
            <label for="booking_passengers_attributes_${number}_email">Email</label>
            <input type="email" name="booking[passengers_attributes][${number}][email]" id="booking_passengers_attributes_${number}_email">
          </div>
          <button name="button" type="button" data-action="passenger-inputs#remove">Remove Passenger</button>
          <hr>
        </div>`
    }
  }
}
