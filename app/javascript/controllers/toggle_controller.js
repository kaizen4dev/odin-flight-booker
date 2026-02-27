import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = ["box", "text", "warning", "input"];
  static classes = ["highlight"];

  connect() {
  }

  box() {
    this.boxTarget.toggleAttribute("hidden")
  }

  text() {
    this.textTarget.toggleAttribute("hidden")
    this.box()
  }

  highlight() {
    // this.element.style.border = "solid yellow";
    this.element.classList.toggle(this.highlightClass);
  }

  input() {
    if (this.inputTarget.value.length > 10) {
      this.warningTarget.removeAttribute("hidden")
    } else {
      this.warningTarget.setAttribute("hidden", "")
    }
  }
}
