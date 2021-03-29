let user ={
    name:"ali",
    age:20,
    inner_obj:{
        fullName: "alireza asghari",
    },
};
function detection(object){
    if (object == "object"){
        let arr = []
        for (let key in object){
            arr = Object.values(object);
            let counter=0;
            hold ={key:arr[counter]};
            detection(arr[counter])
        }
        return hold
    }else if(typeof object !==null || typeof object !==undefined){
        counter++;
        detection(arr[counter])
    }
}





