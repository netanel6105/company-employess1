import { showLightBox } from "./lightBox.js";

export default class peopelClass {
    constructor(_parent, _item) {
        this.parent = _parent;
        this.country = _item.location.country;
        this.name = _item.name.first;
        this.img = _item.picture.large;
        this.age = _item.dob.age;
        this.email = _item.email;
        this.phone = _item.phone;
        this.street = _item.location.street.name;
    }

    render() {
        let div = document.createElement("div");
        div.className = "out-card col-md-6";
        document.querySelector(this.parent).append(div);

        div.innerHTML = `
        <div class="card shadow  overflow-hidden p-2 ">
        <img src="${this.img}" alt="${this.name}" class="top w-50  me-2">
        <h2 class="my-3">${this.name}</h2>
        <h3>country: ${this.country}</h3>
        <h4>age: ${this.age}</h4>
        <button class="btn btn-dark my-btn my-5">More info</button>
        </div>

        `

        let btn = div.querySelector(".my-btn");
        btn.addEventListener("click" , ()=>{
            showLightBox(this);
        })
    }

}