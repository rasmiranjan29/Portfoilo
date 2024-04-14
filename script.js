
function loaderTimer(){
    var  h5timer = document.querySelector("#loaderpercent h5");
    var grow =0;
    setInterval(function(){
        if(grow<=100){
            h5timer.innerHTML=grow++;
        }
    },40);
}

var tl = gsap.timeline();

tl.from(".line h1",{
    y:150,
    duration:1,
    opacity:0,
    stagger:0.25 

});

tl.from("#loaderpercent",{
     opacity:0,
     onstart:loaderTimer()    
})

tl.to("#loader",{
    opacity:0,
    duration:0.4,
    delay:3
})
 