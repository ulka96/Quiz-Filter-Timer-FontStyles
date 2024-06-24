const textEl = document.querySelector("p");
const btns = document.querySelectorAll("button");

const [italicBtn, boldBtn, colorBtn, backgroundBtn, resetBtn, customBtn] = btns;

class App {
    constructor() {
        this.key;
        this.value;
    italicBtn.addEventListener("click",this.toggleItalic.bind(this));
    boldBtn.addEventListener("click",this.toggleBold.bind(this));
    colorBtn.addEventListener("click",this.changeColor.bind(this));
    backgroundBtn.addEventListener("click",this.changeBgColor.bind(this));
    customBtn.addEventListener("click",this.addCustomStyle.bind(this));
    resetBtn.addEventListener("click",this.resetStyles.bind(this));


    }

toggleItalic() {
    textEl.classList.toggle("italic");
}

toggleBold() {
    textEl.classList.toggle("bold");
}

changeColor() {
    this.color = prompt("Please enter a valid color");
    textEl.style.color = this.color;
}

changeBgColor() {
    this.backgroundColor = prompt("Please enter a valid color");
    textEl.style.backgroundColor = this.backgroundColor;
}
addCustomStyle() {
    this.key = prompt("Please enter a property you want to change");
    this.value = prompt(`Please enter a value you want to set to ${this.key}`);
    textEl.style[this.key] = this.value;
}

resetStyles() {
    textEl.classList.remove("italic", "bold");
    textEl.style.color ="#000";
    textEl.style.background = "none";
}
}

const app = new App ();