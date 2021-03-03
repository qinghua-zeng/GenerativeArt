
//02点击鼠标时，显示鼠标点击序号==============================================
function drawMouseClickPoints() {
    var points = new Array;
    //var numbers = new Array; 
    var tool = new Tool();
    var currentNum = 0;
    //var path;

    function enter(event) {
        this.fillColor = 'red';
    }

    function leave(event) {
        this.fillColor = 'black';
    }

    // Define a mousedown and mousedrag handler
    tool.onMouseDown = function (event) {

        points.push(new Path.Circle(event.point, 15));
        currentNum++;
        showInfo(currentNum, event.point, "num");
        //numbers.push(currentNum);
        //this.yes++;

        for (var i = 0; i < points.length; i++) {
            points[i].fillColor = 'black';
            points[i].onMouseEnter = enter;
            points[i].onMouseLeave = leave;
        }
    }
}

//03 二维点阵  函数==============================================
function myPoints(xBase, yBase, xNum, yNum, xLength, yLength) {
    class myPoints {
        constructor() {
            this.circles = new Array;
            this.thePoints = new Array;
        }
    }
    //var basePoint = new Point(0,0);
    /* var xBase = 30;
    var yBase = 20;
    var xNum = 2;
    var yNum = 20;
    var xLength = 10;
    var yLength = 15; */

    //var oo = new Shape.Circle(new Point(40, 40), 5);
    //oo.strokeColor = 'black';
    //circles.push();
    //circles[0].strokeColor = 'black';
    for (var i = 0; i < xNum; i++) {
        for (var j = 0; j < yNum; j++) {
            var tempPoint = new Point(i * xLength + xBase, j * yLength + yBase);
            thePoints.push(tempPoint);
            circles.push(new Path.Circle(tempPoint, 1));
            //=一个圆shape====================
        }
    }
    for (w = 0; w < circles.length; w++) {
        circles[w].fillColor = 'black';
    }
    return thePoints;
}

//04 Point2D 二维点阵 真正的类==============================================

class Points2D {
    constructor(x1, y1, x2, y2, x3, y3) {
        this.circles = new Array;
        this.thePoints = new Array;
        this.xBase = x1;
        this.yBase = y1;
        this.xNum = x2;
        this.yNum = y2;
        this.xLength = x3;
        this.yLength = y3;

    }

    draw() {
        for (let p = 0; p < this.xNum; p++) {
            for (let j = 0; j < this.yNum; j++) {
                var tempPoint = new Point(p * this.xLength + this.xBase, j * this.yLength + this.yBase);
                this.thePoints.push(tempPoint);
                this.circles.push(new Path.Circle(tempPoint, 1));
                //=一个圆shape====================
            }
        }
        for (let w = 0; w < this.circles.length; w++) {
            this.circles[w].fillColor = 'black';
        }
    }

}


//文件==================
function writeObj(obj) {
    var description = "";
    for (var i in obj) {
        var property = obj[i];
        description += i + " = " + property + "\n";
    }
    alert(description);
}


//打印对象信息====================================================
function po(o) {
    var out = '';
    for (var p in o) {
      out += p + ': ' + o[p] + '\n';
    }
    alert(out);
  }
  
  //========================================
  function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status == 0) {
          var allText = rawFile.responseText;
          alert(allText);
        }
      }
    }
    rawFile.send(null);
  }
  //=================
  function FileHelper() {
    FileHelper.readStringFromFileAtPath = function (pathOfFileToReadFrom) {
      var request = new XMLHttpRequest();
      request.open("GET", pathOfFileToReadFrom, false);
      request.send(null);
      var returnValue = request.responseText;
  
      return returnValue;
    }
  }


  //偏移与显示法线，好用
  function offset(path, number) { //输入一个路径与偏移距离

    var point1 = path.getPointAt(number); //起始点
    var normal1 = path.getNormalAt(number); //长度为1的法线
    normal = new Point((normal1.x * 20), (normal1.y * 20)); //扩大后的法线

    point2 = new Point(normal.x + point1.x, normal.y + point1.y); //重要！扩大后的法线端点

    var line = new Path.Line(point1, point2); //显示的法线
    line.strokeColor = 'black';

}








