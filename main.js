var name = prompt ("Enter your name: ");
var age = prompt ("Enter your age: ");

function text(){
    document.getElementById("display").innerHTML = "Hi " + name + "." + "<br>" + "you are " + age + " years old " + ".";
}
