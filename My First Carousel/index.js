let slidecount=1;

document.querySelector('.indi_1').style.backgroundColor="rgba(255, 251, 251, 0.5)";
setInterval(function(){
    NextSlide();
},5000)

function Prevslide(){
    slidecount--;
    MoveTo(slidecount);
    Color_Indicators(slidecount);  
}

function NextSlide(){
    slidecount++;
    MoveTo(slidecount);
    Color_Indicators(slidecount);
}

function MoveTo(slidecoun){
    let margin=slidecoun*100;
    document.querySelector('.slider').style.marginLeft=-margin+"%";
    document.querySelector('.slider').style.transition="2s";

    if(slidecoun==5){
        slidecount=1;
        setTimeout(function(){
            document.querySelector('.slider').style.marginLeft="-100%";
            document.querySelector('.slider').style.transition="0s";
        },2000)
        Color_Indicators(slidecount);
    }

    if(slidecoun==0){
        slidecount=4;
        setTimeout(function(){
            document.querySelector('.slider').style.marginLeft="-400%";
            document.querySelector('.slider').style.transition="0s";
        },2000)
        Color_Indicators(slidecount);
    }
    Color_Indicators(slidecoun);
}

function Color_Indicators(num){
    switch(num){
        case 1:
            document.querySelector('.indi_1').style.backgroundColor="rgba(255, 251, 251, 0.5)";
            document.querySelector('.indi_2').style.backgroundColor="rgba(1,1,1,0.5)";
            document.querySelector('.indi_3').style.backgroundColor="rgba(1,1,1,0.5)";
            document.querySelector('.indi_4').style.backgroundColor="rgba(1,1,1,0.5)";
            document.querySelector('.indi_5').style.backgroundColor="rgba(1,1,1,0.5)";
            break;
       
        case 2:
            document.querySelector('.indi_2').style.backgroundColor="rgba(255, 251, 251, 0.5)";
            document.querySelector('.indi_1').style.backgroundColor="rgba(1,1,1,0.5)";
            document.querySelector('.indi_3').style.backgroundColor="rgba(1,1,1,0.5)";
            document.querySelector('.indi_4').style.backgroundColor="rgba(1,1,1,0.5)";
            document.querySelector('.indi_5').style.backgroundColor="rgba(1,1,1,0.5)";
            break;
       
        case 3:
            document.querySelector('.indi_3').style.backgroundColor="rgba(255, 251, 251, 0.5)";
            document.querySelector('.indi_2').style.backgroundColor="rgba(1,1,1,0.5)";
            document.querySelector('.indi_1').style.backgroundColor="rgba(1,1,1,0.5)";
            document.querySelector('.indi_4').style.backgroundColor="rgba(1,1,1,0.5)";
            document.querySelector('.indi_5').style.backgroundColor="rgba(1,1,1,0.5)";
            break;
       
        case 4:
            document.querySelector('.indi_4').style.backgroundColor="rgba(255, 251, 251, 0.5)";
            document.querySelector('.indi_2').style.backgroundColor="rgba(1,1,1,0.5)";
            document.querySelector('.indi_3').style.backgroundColor="rgba(1,1,1,0.5)";
            document.querySelector('.indi_1').style.backgroundColor="rgba(1,1,1,0.5)";
            document.querySelector('.indi_5').style.backgroundColor="rgba(1,1,1,0.5)";
            break;
       
        case 5:
            document.querySelector('.indi_5').style.backgroundColor="rgba(255, 251, 251, 0.5)";
            document.querySelector('.indi_2').style.backgroundColor="rgba(1,1,1,0.5)";
            document.querySelector('.indi_3').style.backgroundColor="rgba(1,1,1,0.5)";
            document.querySelector('.indi_4').style.backgroundColor="rgba(1,1,1,0.5)";
            document.querySelector('.indi_1').style.backgroundColor="rgba(1,1,1,0.5)";
            break;
    }
   
}
