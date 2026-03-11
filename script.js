let cart=[];

function addItem(name,price){

cart.push(name+" ₹"+price);

document.getElementById("cart").innerHTML="Cart: "+cart.join(", ");

}

function sendOrder(){

let name=document.getElementById("name").value;
let mobile=document.getElementById("mobile").value;

let message="New Order%0A";
message+="Customer: "+name+"%0A";
message+="Mobile: "+mobile+"%0A";
message+="Items: "+cart.join(", ");

let whatsapp="https://wa.me/919082369588?text="+message;

window.open(whatsapp);


}
