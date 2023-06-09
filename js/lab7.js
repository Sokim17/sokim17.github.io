function askPassword(ok, fail){
    let password = prompt("Password?", '');
    if(password == "rockstar") ok();
    else fail();
}
let user = {
    name : 'John',

    loginOk: function(){
        alert(`${this.name} logged in`);
    },
    loginFail: function(){
        alert(`${this.name} failed to log in`);
    },
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

//Question 2
let group = {
    title : "Our Group",
    students : ["John", "Pete", "Alice"],
    showList:function(){
        this.students.forEach(function(student){
            console.log(this.title + ": " + student);
        }.bind(this));
    }
};
group.showList();