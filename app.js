//let getColor = document.getElementsByTagName("LI");
//alert(getColor.length);
let colorChange = document.querySelector(".color-change");
const colorClick = document.querySelectorAll(".click-color");


colorClick.forEach((element,index) => {
  element.addEventListener("click",function(){
    let innerColor= colorClick[index].innerHTML;
    

    colorChange.style.backgroundColor=innerColor;
  }) 
});



