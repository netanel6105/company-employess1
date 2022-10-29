

export const lightBoxInit = () =>{
    createLightBox();
    hideLightBox();
}

const createLightBox = () =>{
    let divLight = document.createElement("div");
    divLight.className = "light_box";
    divLight.id = "id_lightbox";
    document.body.append(divLight);
    divLight.innerHTML = `
        
    <div class="light_box_inside ">
    <img id="id_light_img" src=""  alt="" >
    <h2 id="id_light_name">name: </h2>
    <h5>Email:<span id="id_light_email"></span> , Phone: <span id="id_light_phone"></span> </h5> 
    <h4> Address: <span id="id_light_address"></span></p>
    <button id="close_light_btn">Close</button>
    </div> 
    
    `
    let closeBtn = divLight.querySelector("#close_light_btn");
    closeBtn.addEventListener("click" , hideLightBox);

}

const hideLightBox = () =>{
    let id_lightbox = document.querySelector("#id_lightbox");
    id_lightbox.style.display = "none"
}

export const showLightBox = (_item) =>{
    let id_lightbox = document.querySelector("#id_lightbox");
    id_lightbox.style.display = "flex";

    document.querySelector("#id_light_img").src = _item.img
    document.querySelector("#id_light_name").innerHTML = _item.name;
    document.querySelector("#id_light_email").innerHTML = _item.email;
    document.querySelector("#id_light_phone").innerHTML = _item.phone;
    document.querySelector("#id_light_address").innerHTML = _item.street;
      
}
