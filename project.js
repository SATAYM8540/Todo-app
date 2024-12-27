let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){
   let item=document.createElement("li");
   item.innerHTML=inp.value;

//    let delBtn=document.createElement("button");
//    delBtn.innerText="delete";
//    delBtn.classList.add("delete");

// let delBtn=document.createElement("i");
// delBtn=innerText="fa-thin fa-circle-xmark";
// delBtn.classList.add("fa-thin fa-circle-xmark");

// let delBtn=document.createElement("li");
// delBtn.innerHTML=input.value;
// delBtn.classList.add("\u00d7");



//    item.appendChild(delBtn);
ul.appendChild(item);
let span=document.createElement("span");
span.innerHTML="\u00d7";

   item.appendChild(span);
   inp.value="";
});

ul.addEventListener("click",function(event){
    console.dir(event.target.nodeName);
    let ListItem=event.target.parentElement;
    ListItem.remove();
  

})