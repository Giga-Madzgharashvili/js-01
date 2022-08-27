let user = {
    name: "giorgi",
    age: 20,
    studentstatus: "active"
};

if(user.age < 18 && user.studentstatus == 'active'){
    console.log("Hello");
} else if (user.name == "levan"){
    console.log("Hello levan");
} else if(user.studentstatus == "active" || user.age < 25){
    console.log("hello world");
} else{
    console.log("error");
};