var h1 = document.createElement("h1");
h1.innerHTML = "Welcome to My Web Page";
console.log(h1);
document.body.append(h1);

var button = document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("onclick","foo()");
button.innerHTML = "Click Here";

document.body.append(button);

function foo(){
    var create_br = document.createElement("br")
    var res = prompt("Enter your profession:");
    var span = document.createElement("span");
    span.innerHTML = `You are a ${res}`;
    document.body.append(create_br,span);
}