//let getColor = document.getElementsByTagName("LI");
//alert(getColor.length);
let colorChange = document.querySelector(".color-change");
const colorClick = document.querySelectorAll(".click-color");



colorClick.forEach((element,index) =>{
  element.addEventListener("click",function(){
    let innerColor= colorClick[index].innerText;
    element.classList.add("dorotate");
    colorChange.style.backgroundColor=innerColor;

    setTimeout(()=>{
      element.classList.remove("dorotate");
      
    let getFirstChild = element.firstChild;
    console.log(getFirstChild);
    //let getAudio= colorClick[index].innerHTML;
    getFirstChild.play();
    //console.log(getAudio);
    },300);


    
  }) 

  /*element.addEventListener("mouseout",function(){
    //let innerColor= colorClick[index].innerHTML;
    element.classList.remove("dorotate");
    //colorChange.style.backgroundColor=innerColor;
  })*/

 
});



