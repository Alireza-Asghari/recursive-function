let obj1 = {
    firstName: "ali",
    inner_object:{
        age:20,
    }   
};
let key = 0;
function detection(object) { 
    let len_1 = Object.keys(object);
    let counter_2 = Object.values(object);
    if (key <= len_1.length  && typeof counter_2[key] =="object"){
        
}else if(key <= len_1.length){
    key++;
    detection(len_1[key]);
}
}


 


