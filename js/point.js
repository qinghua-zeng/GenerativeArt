//06 Point2D =======================
class Points2D1 {
    constructor() {
        //input
        this.xBase = 30;
        this.yBase = 30;
        this.xNum = 2;
        this.yNum = 2;
        this.xLength = 40;
        this.yLength = 40;

        //output
        this.circles = new Array;
        this.thePoints = new Array;

    }

    draw() {
        this.thePoints.length = 0;
        this.circles.length = 0;
        for (let p = 0; p < this.xNum; p++) {
            for (let j = 0; j < this.yNum; j++) {
                var tempPoint = new Point(p * this.xLength + this.xBase, j * this.yLength + this.yBase);
                this.thePoints.push(tempPoint);
                //this.circles.push(new Path.Circle(tempPoint, 1));//用在屏幕上显示的点，需要显示的时候取消注释
                //=一个圆shape====================
            }
        }
        for (let w = 0; w < this.circles.length; w++) {
            this.circles[w].fillColor = 'black';
        }
    }

}

//06.1 Point2D boundin=======================
class PointsBoundIn {
    constructor() {
        {
            this.x = 50;
            this.y = 300;
            this.w = 30;
            this.h = 15;



            //this.numberPanels = new Array;
            //this.numberPanels.push(new mouseButton3());

            var button = new Path.Rectangle(new Point(this.x, this.y), new Size(this.w, this.h));
            button.fillColor = "red";

            var button2 = new Path.Rectangle(new Point(this.x, this.y + this.h), new Size(this.w, this.h));
            button2.fillColor = "blue";

            var in1 = new Path.Rectangle(new Point(this.x, this.y), new Size(-10, 10));
            in1.fillColor = "blue";

            var out1 = new Path.Rectangle(new Point(this.x + this.w, this.y), new Size(10, 10));
            out1.fillColor = "blue";



            var text = new PointText(new Point(this.x + 2, this.y + 0));
            text.fillColor = 'black';
            text.content = "bdi";

            this.group = new Group({
                children: [button, button2, in1, out1, text],
                //position: new Point(380,390)
            });
        }






        //Input
        this.boundIn = { x: 500, y: 100, width: 200, height: 200 };
        //this.xBase = 30;
        //this.yBase = 30;
        this.xNum = 5;
        this.yNum = 5;
        //this.xLength = 40;
        //this.yLength = 40;
        //Output
        this.circles = new Array;
        this.thePoints = new Array;

        for (let p = 0; p <= this.xNum; p++) {
            for (let j = 0; j <= this.yNum; j++) {
                var tempPoint = new Point(p * this.boundIn.width / this.xNum + this.boundIn.x, j * this.boundIn.height / this.yNum + this.boundIn.y);
                this.thePoints.push(tempPoint);
                //this.circles.push(new Path.Circle(tempPoint, 1));//用在屏幕上显示的点，需要显示的时候取消注释

                this.circles.push(new Path.Circle({
                    center: tempPoint,
                    radius: 1,
                    fillColor: 'red'
                }));
                //=一个圆shape====================
            }
        }

    }

    draw() {
        this.group.onMouseDrag = function (event) {

            this.translate(event.delta);

        }

        this.group.children[3].onDoubleClick = () => {
            temp = this.thePoints;

        }

    }

}

//===========================================================================================================
class point2D2 {
    constructor(event) {
        {//this.scale = 1;
            //this.temp=2;
            this.x = 250;
            this.y = 100;
            this.w = 30;
            this.h = 55;

            //input
            this.xBase = 430;
            this.yBase = 30;
            this.xNum = 5;
            this.yNum = 3;
            this.xLength = 40;
            this.yLength = 40;


            this.button = new Path.Rectangle(new Point(this.x, this.y), new Size(this.w, this.h));
            this.button.fillColor = "green";

            var in1 = new Path.Rectangle(new Point(this.x, this.y), new Size(-10, 10));
            in1.fillColor = "red";

            var in2 = new Path.Rectangle(new Point(this.x, this.y + 15), new Size(-10, 10));
            in2.fillColor = "red";

            var in3 = new Path.Rectangle(new Point(this.x, this.y + 30), new Size(-10, 10));
            in3.fillColor = "red";

            var in4 = new Path.Rectangle(new Point(this.x, this.y + 45), new Size(-10, 10));
            in4.fillColor = "red";

            var out1 = new Path.Rectangle(new Point(this.x + this.w, this.y), new Size(10, 10));
            out1.fillColor = "red";

            this.text = new PointText(new Point(this.x + 4, this.y + 13));
            this.text.fillColor = 'black';
            this.text.content = "pt2D";
            //printObject(this.text);

            this.group = new Group({
                children: [this.button, this.text, in1, in2, in3, in4, out1],
                // Set the stroke color of all items in the group:
                //strokeColor: 'black',
                // Move the group to the center of the view:
                //position: new Point(380,390)

            });
        }

        //私有变量初始化
        {
            this.pts = new Array;

            this.circles = new Array;

            for (let p = 0; p < this.xNum; p++) {
                for (let j = 0; j < this.yNum; j++) {
                    var tempPoint = new Point(p * this.xLength + this.xBase, j * this.yLength + this.yBase);
                    this.pts.push(tempPoint);
                    //this.circles.push(new Path.Circle(tempPoint, 1));//用在屏幕上显示的点，需要显示的时候取消注释
                    //=一个圆shape====================
                }
            }




            for (var i = 0; i < this.pts.length; i++) {
                this.circles.push(new Path.Circle(new Point(this.pts[i].x, this.pts[i].y), 2));
                this.circles[i].fillColor = "grey";
            }
        }

    }

    updatePoints() {
        for (var i = 0; i < this.circles.length; i++) {
            this.circles[i].scale(0);

        }

        this.pts.length = 0;
        this.circles.length = 0;
        //this.xNum=temp;
        for (let p = 0; p < this.xNum; p++) {
            for (let j = 0; j < this.yNum; j++) {
                var tempPoint = new Point(p * this.xLength + this.xBase, j * this.yLength + this.yBase);
                this.pts.push(tempPoint);
                //this.circles.push(new Path.Circle(tempPoint, 1));//用在屏幕上显示的点，需要显示的时候取消注释
                //=一个圆shape====================
            }
        }

        //alert(this.pts.length);
        for (var i = 0; i < this.pts.length; i++) {
            this.circles.push(new Path.Circle(new Point(this.pts[i].x, this.pts[i].y), 2));
            this.circles[i].fillColor = "grey";
        }
        //alert(this.pts.length);

    }

    draw() {
        this.group.onMouseDrag = (event) => {

            this.group.translate(event.delta);
        }

        this.group.onDoubleClick = () => {
            //alert("ff");

            //this.group.selected=true;
        }

        this.group.children[2].onDoubleClick = (event) => {

            this.xNum = temp;
            this.updatePoints();
        }

        this.group.children[3].onDoubleClick = (event) => {
            this.yNum = temp;
            this.updatePoints();
        }

        this.group.children[4].onDoubleClick = (event) => {
            this.xLength = temp;
            this.updatePoints();
        }

        this.group.children[5].onDoubleClick = (event) => {
            this.yLength = temp;
            this.updatePoints();
        }

        this.group.children[6].onDoubleClick = (event) => {
            temp = this.pts;
        }

    }
}

//
//06.1 Point2D boundin=======================
class PointsBoundIn2 {
    constructor() {
        {
            this.x = 160;
            this.y = 200;
            this.w = 30;
            this.h = 15;


            var button = new Path.Rectangle(new Point(this.x, this.y), new Size(this.w, this.h));
            button.fillColor = "red";

            var button2 = new Path.Rectangle(new Point(this.x, this.y + this.h), new Size(this.w, this.h));
            button2.fillColor = "blue";

            var in1 = new Path.Rectangle(new Point(this.x, this.y), new Size(-10, 10));
            in1.fillColor = "blue";

            var out1 = new Path.Rectangle(new Point(this.x + this.w, this.y), new Size(10, 10));
            out1.fillColor = "blue";



            var text = new PointText(new Point(this.x + 2, this.y + 0));
            text.fillColor = 'black';
            text.content = "bdi";

            this.group = new Group({
                children: [button, button2, in1, out1, text],
                //position: new Point(380,390)
            });
        }

        //================================================

        this.boundInArray = new Array;
        //this.boundInArray.push({ x: 500, y: 50, width: 100, height: 200 });
        //this.boundInArray.push({ x: 720, y: 300, width: 60, height: 60 });
        //alert(this.boundInArray.length);
        //this.xBase = 30;
        //this.yBase = 30;
        this.xNum = 5;
        this.yNum = 5;
        //this.xLength = 40;
        //this.yLength = 40;
        //Output
        this.circles = new Array;
        this.thePoints = new Array;
        this.update();



    }

    update() {

        //this.circles.length=0;
        this.thePoints.length = 0;
        this.circles.length = 0;

        for (var k = 0; k < this.boundInArray.length; k++) {
            this.thePoints[k] = new Array;
            this.circles[k] = new Array;
            for (let p = 0; p <= this.xNum; p++) {
                for (let j = 0; j <= this.yNum; j++) {
                    var tempPoint = new Point(p * this.boundInArray[k].width / this.xNum + this.boundInArray[k].x, j * this.boundInArray[k].height / this.yNum + this.boundInArray[k].y);

                    this.thePoints[k].push(tempPoint);
                    //this.circles.push(new Path.Circle(tempPoint, 1));//用在屏幕上显示的点，需要显示的时候取消注释

                    this.circles[k].push(new Path.Circle({
                        center: tempPoint,
                        radius: 3,
                        fillColor: 'pink'
                    }));
                }
            }



        }

    }

    update2() {
        var flatPoints = new Array;
        for (var i = 0; i < this.thePoints.length; i++) {
            for (var j = 0; j < this.thePoints[i].length; j++) {
                flatPoints.push(this.thePoints[i][j]);
            }

        }

        temp = flatPoints;

    }

    draw() {
        this.group.onMouseDrag = function (event) {

            this.translate(event.delta);
        }

        //in1
        this.group.children[2].onDoubleClick = () => {


            for (var i = 0; i < this.circles.length; i++) {

                for (var j = 0; j < this.circles[i].length; j++) {
                    this.circles[i][j].scale(0);
                }
            }
            this.circles.length = 0;
            this.thePoints.length = 0;
            //alert(temp.bounds);
            for (let i = 0; i < temp.length; i++) {
                this.boundInArray.push(temp[i].bounds);
            }
            //this.boundInArray = temp.bounds;
            //alert(this.circles[0][0]);
            this.update();
            //po(this.circles);
            this.update2();

        }

        //out1
        this.group.children[3].onDoubleClick = () => {
            this.update2();

        }

    }

}

//class模板===================================================================================
class point2dButton {
    constructor() {
        //电池模板
        {
            this.x = 0;
            this.y = 250;
            this.w = 30;
            this.h = 15;

            var button = new Path.Rectangle(new Point(this.x, this.y), new Size(this.w, this.h));
            button.fillColor = "red";

            var button2 = new Path.Rectangle(new Point(this.x, this.y + this.h), new Size(this.w, this.h));
            button2.fillColor = "blue";


            var text = new PointText(new Point(this.x + 2, this.y + 0));
            text.fillColor = 'black';
            text.content = "pt2d";

            this.group = new Group({
                children: [button, button2, text],
                //position: new Point(380,390)
            });
        }

        this.pt2dPanels = new Array();
        //this.pt2dPanels.push(new point2D2());
    }

    draw() {
        for (let i = 0; i < this.pt2dPanels.length; i++) {
            this.pt2dPanels[i].draw();
        }


        this.group.onMouseDrag = function (event) {

            this.translate(event.delta);

        }

        this.group.children[0].onDoubleClick = () => {
            this.pt2dPanels.push(new point2D2());

        }



    }



}

//class模板===================================================================================
class PointsBoundIn2Button {
    constructor() {
        //电池初始化
        {
            this.x = 0;
            this.y = 50;
            this.w = 30;
            this.h = 15;



            //this.numberPanels = new Array;
            //this.numberPanels.push(new mouseButton3());

            var button = new Path.Rectangle(new Point(this.x, this.y), new Size(this.w, this.h));
            button.fillColor = "red";

            var button2 = new Path.Rectangle(new Point(this.x, this.y + this.h), new Size(this.w, this.h));
            button2.fillColor = "blue";

            var text = new PointText(new Point(this.x + 2, this.y + 0));
            text.fillColor = 'black';
            text.content = "pbi";

            this.group = new Group({
                children: [button, button2, text],
                //position: new Point(380,390)
            });
        }

        //私有变量
        this.pbiPanels=new Array;
    }

    draw() {
        for(let i=0;i<this.pbiPanels.length;i++){
            this.pbiPanels[i].draw();
        }
        this.group.onMouseDrag = function (event) {

            this.translate(event.delta);

        }

        this.group.children[0].onDoubleClick = () => {
            this.pbiPanels.push(new PointsBoundIn2());

        }



    }



}


