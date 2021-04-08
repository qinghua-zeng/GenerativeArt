//01 所有绘画内容的变量设定都在这
function myDrawingSetup(event) {

    //参数区
    let dotNumW = 5;
    let dotNumY = 10;
    let dotDistance = 190;

    //按距离与点半径
    let dotRadius = randomBetween(1, 5);

    let dotDistX = randomBetween(5, 20);
    let dotDistY = randomBetween(1, 60);

    //alert(Math.random());


    let pathRect = new Array;

    pathRect.push(new Path.Rectangle({
        point: [60, 60],
        size: [380, 580],
        fillColor: 'blue',
    }));

    var dots = new Array;


    //计算相交
    var dots3 = makeDots(pathRect[0], dotDistX, dotDistY, 5, 2);//第4，5个参数表示圆的半径范围

    for (let i = 0; i < pathRect.length; i++) {
        //pathRect[i].remove();
    }


    //设置颜色
    for (let i = 0; i < dots3.length; i++) {
        dots3[i].fillColor = "yellow";
    }










}