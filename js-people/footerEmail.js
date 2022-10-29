
export const checkEmail = () =>{

    let id_form = document.querySelector("#id_sub");
    id_form.addEventListener("submit" , (e)=>{
        e.preventDefault();
        let email_val = document.querySelector("#id_email").value;
        // let search_btn = document.querySelector("#search_btn");

        if(!email_val.includes("@") || !email_val.includes(".")){
            return alert("Email invalid");
        }

        else{
           return alert("Thank you for entering your email !!")
        }
    })
}
        
            
            
        
       
          

       
           


        
