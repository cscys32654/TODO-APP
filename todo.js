let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let input  = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
let item = document.createElement("li");
item.innerText = input.value;
ul.appendChild(item);

let  delbtn = document.createElement("button");
delbtn.innerText = "Delete";
delbtn.classList.add("dele");
item.appendChild(delbtn);
ul.appendChild(item);
input.value = "";

});
 ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("delete");

    }
 });

