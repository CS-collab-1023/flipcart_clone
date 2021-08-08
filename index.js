let imgs = ["slide-1.png" ,"slide-2.jpg" ,"slide-3.jpg"];

let next = document.getElementById("nxt");
let prev_btn = document.getElementById("prev");
let slider = document.getElementById("slider");
let shoe_btn = document.getElementById("shoe_s");
let shoe = document.getElementById("shoes");
let i =0;
next.addEventListener("click" ,()=>{
    i=i+1;
 
    if(i>2){
        i=0;
    } 
    slider.setAttribute("src" , imgs[i]);
    
});

prev_btn.addEventListener("click" ,()=>{

    i=i-1;
    if(i<0){
        i=2;
    }
    slider.setAttribute("src" , imgs[i]);

});
shoe_btn.addEventListener("click" ,()=>{

    shoe.classList.add("move");
    
});
