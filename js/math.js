

//产生一个随机整数，介于两个数之间
function randomBetween(num1,num2){
    var num=num1+(num2-num1)*Math.random();
    
    num=Math.round(num);
    //alert(num);
    return num;
}