var ArrAnh=[];
var i=1;
var anh1=1;
var anh2=1;
var anhx=1;
function loadanh(){ 
    for (i=1 ; i <4; i++)
    {
    ArrAnh[i] = new Image();
    ArrAnh[i].src = "./images/banner"+i+".png";
    }	
}
function back(){
    if(anhx>1){   
        anh1=anhx;
        anh1=anh1-1;
        document.getElementById("abc").src = ArrAnh[anh1].src;     
        anhx--;  
    } else{
        anhx=3;
        anh1=anhx;
        anh1=anh1-1;
        document.getElementById("abc").src = ArrAnh[anh1].src;     
        anhx--; 
    }
}
function next(){
    if(anhx<3){
    anh2=++anhx;
    document.getElementById("abc").src = ArrAnh[anh2].src; 
    } else {
        anhx=1;
        anh2=++anhx;
        document.getElementById("abc").src = ArrAnh[anh2].src; 
    }
}
    run = setInterval("next()", 10000);
    
    
    



    

