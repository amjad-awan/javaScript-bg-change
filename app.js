//let getColor = document.getElementsByTagName("LI");
//alert(getColor.length);
let colorChange = document.querySelector(".color-change");
const colorClick = document.querySelectorAll(".click-color");
console.log(colorClick);

colorClick.forEach((element,index) => {
  element.addEventListener("click",function(){
    let innerColor= colorClick[index].innerHTML;
    console.log(innerColor);

    colorChange.style.backgroundColor=innerColor;
  }) 
});



