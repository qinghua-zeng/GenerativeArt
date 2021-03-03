//01 所有绘画内容的变量设定都在这
function myDrawingSetup(event) {

    //参数区
    let dotNumW = 10;
    let dotNumY = 10;
    let dotDistance = 90;

    //按距离与点半径
    let dotRadius = randomBetween(1, 5);

    let dotDistX = randomBetween(9, 20);
    let dotDistY = randomBetween(9, 20);

    //alert(Math.random());


    let pathRect = new Array;

    pathRect.push(new Path.Rectangle({
        point: [60, 60],
        size: [380, 580],
        fillColor: 'grey',
    }));

    var dots = new Array;


    //计算相交
    var dots3 = makeDots(pathRect[0], dotDistX, dotDistY, 1, 10);

    for (let i = 0; i < pathRect.length; i++) {
        //pathRect[i].remove();
    }



    for (let i = 0; i < dots3.length; i++) {
        //dots3[i].fillColor = "red";
    }










}