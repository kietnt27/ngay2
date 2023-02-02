let b = Math.floor(Math.random(1,100) * 100);
let anwser;
do{
 anwser = prompt("your numb", 0);

    if(anwser < b){
        alert ("nho hon");
    }
    else if( anwser > b){
        alert  ("lon hon");
    }
    else{
        alert ("dung");
    }
}
while(anwser!=b)
