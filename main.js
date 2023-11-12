let slides = document.querySelectorAll(".slides div");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let currentSlide = 0;
        

     next.addEventListener("click",showNext);
     prev.addEventListener("click",showPrev);
     function showNext(){
       
        slides[currentSlide].style.animation="next1 1s ease-in forwards";
        if(currentSlide>= slides.length-1){
            currentSlide=0;  
           
        }
        else{currentSlide++}
        slides[currentSlide].style.animation="next2 1s ease-in forwards";
       
        pagination();

     }
     function showPrev(){
        slides[currentSlide].style.animation="prev1 1s ease-in forwards";
        if(currentSlide == 0){
            currentSlide = slides.length-1;  
            currentSlide--
        }
        else{currentSlide--}
        slides[currentSlide].style.animation="prev2 1s ease-in forwards";
        pagination();

     }
     function slideShow(){
        deletInterval = setInterval(time,2000);
        function time(){
            showNext();
            pagination();
        }
        
     }
     slideShow();
     let container = document.querySelector(".slider-container");
     container.addEventListener("mouseover",function(){
     clearInterval(deletInterval);
     
     });
     container.addEventListener("mouseout",slideShow);

function pagination(){
let dots = document.querySelectorAll(".dot");

dots.forEach(dot => {
 
        dot.classList.remove("active");
    

    
    
});
dots[currentSlide].className +=" active";  
        
}
// Add click event to the indicator
function switchImage(){
    let dots = document.querySelectorAll(".dot");
    dots.forEach(dot => {
 
        dot.addEventListener("click",function(){
            
            this.classList.add("active");
            
            let imageIndex = this.getAttribute("data");
            if(imageIndex  > currentSlide){
                slides[currentSlide].style.animation = 'next1 0.5s ease-in forwards';
                currentSlide = imageIndex;
                slides[currentSlide].style.animation = 'next2 0.5s ease-in forwards';
                }
                else if(imageIndex == currentSlide){
                    return;
                }
                else{
                slides[currentSlide].style.animation = 'prev1 0.5s ease-in forwards';
                currentSlide = imageIndex;
                slides[currentSlide].style.animation = 'prev2 0.5s ease-in forwards';	
                }
                pagination();
        });
    

        
    
});

}
switchImage();