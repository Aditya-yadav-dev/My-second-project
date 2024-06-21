
let left = document.querySelector('.left');
let right = document.querySelector('.right');
let slider = document.querySelector('.fcontainer');
let images = document.querySelectorAll('.images')
let slidercount=1;
let length= images.length;
  
let x = function nextimage(){
    if(slidercount< length){
      slider.style.transform = `translateX(-${slidercount*950}px)`;
      slidercount++;

    }
    else{
      slider.style.transform = `translateX(0px)`
      slidercount = 1;

    }
    
}

    let y = function priviousimage(){
       if(slidercount>=1){
         slidercount--;
         slider.style.transform =`translateX(-${slidercount*950}px)`;
       }
       else if(slidercount == 0){
         slider.style.transform = 'translateX(0px)';
       
       }
       else{
         slider.style.transform = `translateX(-${length*950}px)`
         slidercount = length;
       }

    }

      left.addEventListener('click', x);
     right.addEventListener('click', y);
  
   // left.addEventListener('click', ()=>{
   //    if(s < images.length){

   //       slide.style.transform = `translateX(-${count*950}px)`;
   //       s++;
   //       count++;
   //    }
   //    else{
   //       slide.style.transform = 'translateX(0px)';
   //         s = 1; 
   //         count = 1;

   //    }

   // })
   // let v= 1;
   // right.addEventListener('click', ()=>{
   //    if(v < s){

   //       slide.style.transform = `translateX(${(count-1)*950}px)`;
   //     v++
   //       count--;
   //    }
   //    else{
   //       slide.style.transform = 'translateX(0px)';
   //         s = 1; 
   //         count = 1;

   //    }

   // })
