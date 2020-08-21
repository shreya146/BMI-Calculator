function getbmivalue(){
    var weight=document.getElementById("weight").value;
    var height=document.getElementById("height").value;
    height=height*12;
    height=height*0.025;
    
    var newbmi=weight/ Math.pow(height,2) ;
    newbmi=Math.round(newbmi)
    document.getElementById("urbmi").value=newbmi;
}
   