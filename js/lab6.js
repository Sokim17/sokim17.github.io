function makeArmy(){
    let shooters = [];
    for(let i=0; i<5; i++){
        var shooter = () => {
                alert(i);  
        };
        shooters.push(shooter);
    }
    return shooters;
}
let army = makeArmy();
army[0]();
for(let j = 0; j<army.length; j++){
    army[j]();
}