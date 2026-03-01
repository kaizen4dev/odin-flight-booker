import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="passenger-inputs"
export default class extends Controller {
  static values = {index: Number};
  static targets = ["nameLabel", "nameInput", "emailLabel", "emailInput"];

  connect() {
    if(this.element.children.length == 0) {
      this.removed()
    }
  }

  removed() {
    const template = document.querySelector("#add-passenger-button-template")
    const clone = document.importNode(template.content, true)
    this.element.replaceChildren(clone)
  }

  added() {
    const template = document.querySelector("#passenger-inputs-template")
    const clone = document.importNode(template.content, true)
    this.element.replaceChildren(clone)

    this.nameLabelTarget.htmlFor = `booking_passengers_attributes_${this.indexValue}_name`
    this.nameInputTarget.id = `booking_passengers_attributes_${this.indexValue}_name`
    this.nameInputTarget.name = `booking[passengers_attributes][${this.indexValue}][name]`

    this.emailLabelTarget.htmlFor = `booking_passengers_attributes_${this.indexValue}_email`
    this.emailInputTarget.id = `booking_passengers_attributes_${this.indexValue}_email`
    this.emailInputTarget.name = `booking[passengers_attributes][${this.indexValue}][email]`
  }
}
