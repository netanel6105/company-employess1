import { doApi } from "./peopleManager.js";
import { declareBodyEvent } from "./eventView.js";
import { lightBoxInit } from "./lightBox.js";
import { checkEmail } from "./footerEmail.js";

const init = () =>{
    
doApi();
declareBodyEvent();
lightBoxInit();
checkEmail();

}



init();