const div = document.querySelector("#mouse");
div.style.backgroundColor = "yellow";
div.style.width = "200px";
div.style.height = "200px";

//This changes the color once clicked the color object...!
div.addEventListener("click", (e) => {
  console.log("you click mouse !");
  div.style.backgroundColor = "blue";
});

// This is use change the color once pressed and chanegs the color once
// it got released
// div.addEventListener("mousedown",e=>{
//     console.log("You holding the mouse right NOW!");
//     div.style.backgroundColor="violet";
// })

// div.addEventListener("mouseup",e=>{
//     console.log("You released the mouse now :) ");
//     div.style.backgroundColor="green";
// })

//This changes the color when we are double clicked the
//mouse pointer in the website like that...
// div.addEventListener("dblclick",e=>{
//     console.log("You double clicked mouse right now :) ");
//     div.style.backgroundColor="red";
// })

//This is used to display msg when contextmenu is opened...
// div.addEventListener("contextmenu",e=>{
//     console.log("You opened the content memu :: ");
//     alert("You opened the content memu :: ");
// })

//This is used to display the message that mouse pointer is the
// area of the square or not in both console & color;
// div.addEventListener("mouseover",e=>{
//     console.log("You are in the area of covid :( ");
//     div.style.backgroundColor="black";
// })
// div.addEventListener("mouseleave",e=>{
//     console.log("You gone away from the covid :) ");
//     div.style.backgroundColor="purple";
// })
