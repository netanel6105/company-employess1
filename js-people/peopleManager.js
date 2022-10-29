import peopelClass from "./peopleClass.js";

export const doApi = async () =>{
    
    let url = "https://randomuser.me/api/?results=10&seed=google"
    try{
        let resp = await fetch(url)
        let data = await resp.json();
        console.log(data.results);
        createList(data.results);
    }
    catch(err){
        console.log(err);
        alert("There problem come back later");
        
    }
}



export const doApiSearch = async(searchQ) =>{
    document.querySelector("#id_row").innerHTML = `<h2>Loading...</h2>`
    let url = `https://randomuser.me/api/?results=10&seed=${searchQ}`
    try{
        let resp = await fetch(url);
        let data = await resp.json();
        console.log(data.results);
        createList(data.results);
    }

    catch (err){
        console.log(err);
        alert("There problem come back later");
    }
}







const createList = (_ar) =>{
    document.querySelector("#id_row").innerHTML ="";
    _ar.forEach(item => {
        let peop = new peopelClass("#id_row", item);
        peop.render();
    });
}