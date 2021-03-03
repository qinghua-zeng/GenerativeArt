//10 圆滑曲线 停用=========
class curve1 {
    constructor() {
        this.myShape = new Path();
        //有效区域
        this.x1 = 0;
        this.x2 = 550;
        this.y1 = 0;
        this.y2 = 600;
        this.ifIn;
        //矩形边框
        this.bounds;


    }
    draw(event) {
        this.ifInside(event.point);
        if (this.ifIn == true) {
            this.myShape.add(event.point);
            this.myShape.closed = true;
            this.myShape.smooth();
            this.myShape.fillColor = 'black';
            this.myShape.strokeWidth = 2;
            //this.myShape.strokeColor="black";
            this.myShape.fullySelected = true;
            //var bounds=this.myShape.bounds;
            this.bounds = this.myShape.bounds;//曲线的矩形边框
            //bounds.fillColor("red");
        }
    }

    ifInside(point) {
        if (point.x > this.x1 && point.x < this.x2 && point.y > this.y1 && point.y < this.y2) {
            this.ifIn = true;

        } else {
            this.ifIn = false;
        }
    }
}

//10 圆滑曲线=========
class curve2 {
    constructor() {
        //input
        this.pts = new Array();

        //this.pts.push(150,150);
        this.x1 = 0;
        this.x2 = 550;
        this.y1 = 0;
        this.y2 = 600;
        this.ifIn;
        this.drawing = true;


        //矩形边框
        this.bounds;
        this.myShape;


    }

    draw(event) {
        this.ifInside(event.point);
        if (this.ifIn == true) {
            this.pts.push(event.point);
        }
        this.myShape = new Path();
        for (var i = 0; i < this.pts.length; i++) {
            this.myShape.add(this.pts[i]);

            this.myShape.smooth();
            this.myShape.fillColor = "red";

            this.myShape.fullySelected = true;
            this.myShape.closed = true;


        }
        this.bounds = this.myShape.bounds;

    }

    ifInside(point) {
        if (point.x > this.x1 && point.x < this.x2 && point.y > this.y1 && point.y < this.y2) {
            this.ifIn = true;

        } else {
            this.ifIn = false;
        }
    }
}

//10 贝塞尔=========
class bezier1 {
    constructor() {
        //input
        //this.pts = new Array();
        //this.handles=new Array;
        this.drawing = true;
        this.done = false;

        this.mouseClick;
        this.handleIn;
        this.handleOut;
        this.segments = new Array;

        this.x1 = 400;
        this.x2 = 800;
        this.y1 = 0;
        this.y2 = 400;
        this.ifIn;



        //矩形边框
        this.bounds;
        this.myShape;
    }
    mouseDown(event) {
        this.ifInside(event.point);
        if (this.ifIn == true && this.drawing == true) {
            this.mouseClick = event.point;
        }

    }

    mouseUp(event) {
        //this.evp=event.point;
        this.ifInside(event.point);
        if (this.ifIn == true && this.drawing == true) {
            this.handleIn = new Point(this.mouseClick.x - event.point.x, this.mouseClick.y - event.point.y);
            this.handleOut = new Point(event.point.x - this.mouseClick.x, event.point.y - this.mouseClick.y);
            this.segments.push(new Segment(this.mouseClick, this.handleIn, this.handleOut));
        }
    }

    draw() {
        this.myShape = new Path();
        for (var i = 0; i < this.segments.length; i++) {
            this.myShape.add(this.segments[i]);

        }
        this.myShape.strokeColor = "red";
        this.myShape.closed = true;
        this.myShape.fullySelected = true;


        this.bounds = this.myShape.bounds;


    }

    ifInside(point) {
        if (point.x > this.x1 && point.x < this.x2 && point.y > this.y1 && point.y < this.y2) {
            this.ifIn = true;

        } else {
            this.ifIn = false;
        }
    }
}

//===
class beziers {
    constructor() {
        this.multiPaths = new Array;
        this.index = 0;
        this.drawing = false;
        this.newOne = true;
        this.button = new mouseClickButton1(560, 450, "next");

    }

    update() {
        //this.multiPaths.push(new bezier1());
        this.index++;
        this.newOne = true;


    }

    mouseDown(event) {
        this.button.draw(event);
        if (this.button.x == true) {

            this.update();
        }
        if (this.newOne == true) {
            //this.index=0;
            this.multiPaths.push(new bezier1());
            //alert(this.newOne);
            this.newOne = false;
            /* for(var i=0;i<this.multiPaths.length;i++){
                this.multiPaths[i].mouseDown(event);
            } */
            this.multiPaths[this.index].mouseDown(event);


        } else {

            this.multiPaths[this.index].mouseDown(event);

        }

        //if(this.count==0){

        //multiPaths[0].mouseDown(event);

        //}




    }

    mouseUp(event) {
        //multiPaths[0].mouseUp(event);
        //alert(this.count);

        this.multiPaths[this.index].mouseUp(event);
        //index++;

    }

    draw() {
        for (var i = 0; i < this.multiPaths.length; i++) {
            this.multiPaths[i].draw();
        }

        //this.button.draw(event);
    }


}

//===================================================================================
class curve3 {
    constructor() {
        //

        this.x = 0;
        this.y = 300;
        this.w = 30;
        this.h = 15;


        var button = new Path.Rectangle(new Point(this.x, this.y), new Size(this.w, this.h));
        button.fillColor = "red";

        var button2 = new Path.Rectangle(new Point(this.x, this.y + this.h), new Size(this.w, this.h));
        button2.fillColor = "blue";



        var text = new PointText(new Point(this.x + 2, this.y + 0));
        text.fillColor = 'black';
        text.content = "curve3";

        this.group = new Group({
            children: [button, button2, text],
            //position: new Point(380,390)
        });

        //this.shapes = new Array;
        //this.numberPanels.push(new mouseButton3());

        this.multiPaths = new Array;
        this.index = 0;
        this.drawing = false;
        this.newOne = true;
    }

    draw() {
        tool.onKeyDown = function (event) {
            if (event.key == 'q') {
                // Scale the path by 110%:
                //path.scale(1.1);
                alert("ddd")
                // Prevent the key event from bubbling
                return false;
            }
        }

    }



}

//10 贝塞尔=========
class bezier2 {
    constructor() {
        //input
        //this.pts = new Array();
        //this.handles=new Array;
        this.drawing = true;
        this.done = false;

        this.mouseClick;
        this.handleIn;
        this.handleOut;
        this.segments = new Array;

        this.x1 = 400;
        this.x2 = 800;
        this.y1 = 0;
        this.y2 = 400;
        this.ifIn;



        //矩形边框
        this.bounds;
        this.myShape = new Path();
    }
    mouseDown(event) {
        this.ifInside(event.point);
        if (this.ifIn && this.drawing) {
            this.mouseClick = event.point;
        }

    }

    mouseUp(event) {
        //this.evp=event.point;
        this.ifInside(event.point);
        if (this.ifIn && this.drawing) {
            this.handleIn = new Point(this.mouseClick.x - event.point.x, this.mouseClick.y - event.point.y);
            this.handleOut = new Point(event.point.x - this.mouseClick.x, event.point.y - this.mouseClick.y);
            //this.segments.push(new Segment(this.mouseClick, this.handleIn, this.handleOut));
            this.myShape.add(new Segment(this.mouseClick, this.handleIn, this.handleOut));
            this.myShape.fillColor = "red";
            this.myShape.strokeColor = "red";
            this.myShape.closed = true;
            this.myShape.fullySelected = true;
            this.bounds = this.myShape.bounds
        }
    }

    draw() {
    }

    ifInside(point) {
        if (point.x > this.x1 && point.x < this.x2 && point.y > this.y1 && point.y < this.y2) {
            this.ifIn = true;

        } else {
            this.ifIn = false;
        }
    }
}


//可以连续画出多个 曲线==============================================================================
class beziers2 {
    constructor() {
        //beziers内容初始化
        {
            this.drawing = false;
            this.index = 0;
            //this.newOne = true;
            //this.next = true;

            //output
            this.bounds = new Array;
            this.bezier2s = new Array;
            this.bezier2s.push(new bezier2());

            this.multiPaths = new Array;
        }


        //电池模块初始化
        {
            this.x = 70;
            this.y = 200;
            this.w = 30;
            this.h = 15;

            var button = new Path.Rectangle(new Point(this.x, this.y), new Size(this.w, this.h));
            button.fillColor = "pink";

            var button2 = new Path.Rectangle(new Point(this.x, this.y + this.h), new Size(this.w, this.h));
            button2.fillColor = "red";

            var button3 = new Path.Rectangle(new Point(this.x, this.y + this.h + this.h), new Size(this.w, this.h));
            button3.fillColor = "green";

            var out1 = new Path.Rectangle(new Point(this.x + this.w, this.y), new Size(10, 10));
            out1.fillColor = "red";

            var out2 = new Path.Rectangle(new Point(this.x + this.w, this.y + 15), new Size(10, 10));
            out2.fillColor = "red";



            var text = new PointText(new Point(this.x + 2, this.y + 10));
            text.fillColor = 'black';
            text.content = "nt";

            var text2 = new PointText(new Point(this.x + 2, this.y + 50));
            text2.fillColor = 'black';
            text2.content = this.drawing;

            this.group = new Group({
                children: [button, button2, text, text2, button3, out1, out2],
                //position: new Point(380,390)
            });

        }

    }



    mouseDown(event) {

        if (this.drawing) {
            this.bezier2s[this.index].mouseDown(event);
        }




    }

    mouseUp(event) {

        if (this.drawing) {
            this.bezier2s[this.index].mouseUp(event);
        }


    }

    draw() {
        //children: [button, button2, text, text2, button3, out1, out2],

        //切换到下一个
        this.group.children[0].onDoubleClick = () => {
            this.next = true;

            this.index++;
            this.bezier2s.push(new bezier2());
        }

        //停止画线
        this.group.children[1].onDoubleClick = () => {
            this.drawing = false;
        }

        //开始画线
        this.group.children[4].onDoubleClick = () => {
            this.drawing = true;
        }

        //输出multiPaths
        this.group.children[5].onDoubleClick = () => {
            //temp = this.bezier2s;
            for (var i = 0; i < this.bezier2s.length; i++) {
                this.multiPaths.push(this.bezier2s[i].myShape);

            }
            temp = this.multiPaths;
        }



        //输出曲线的bound
        this.group.children[6].onDoubleClick = () => {
            //temp=this.bounds;
            //po(this.bounds);
            this.bounds.length = 0;
            for (var i = 0; i < this.bezier2s.length; i++) {
                this.bounds.push(this.bezier2s[i].bounds);
            }
            temp = this.bounds;
            po(this.bounds);
        }

        //移动部件
        this.group.onMouseDrag = function (event) {

            this.translate(event.delta);

        }
        //this.button.draw(event);
        this.group.children[3].content = 'drawing:' + this.drawing + '  index:' + this.index;
    }


}


//10 贝塞尔=========
class bezier3 {
    constructor() {
        //电池模板初始化
        {
            this.x = 150;
            this.y = 100;
            this.w = 30;
            this.h = 15;



            //this.numberPanels = new Array;
            //this.numberPanels.push(new mouseButton3());

            var button = new Path.Rectangle(new Point(this.x, this.y), new Size(this.w, this.h));
            button.fillColor = "red";

            var button2 = new Path.Rectangle(new Point(this.x, this.y + this.h), new Size(this.w, this.h));
            button2.fillColor = "blue";

            var in1 = new Path.Rectangle(new Point(this.x, this.y), new Size(-10, 10));
            in1.fillColor = "red";

            var in2 = new Path.Rectangle(new Point(this.x, this.y + 15), new Size(-10, 10));
            in2.fillColor = "red";

            var out1 = new Path.Rectangle(new Point(this.x + this.w, this.y), new Size(10, 10));
            out1.fillColor = "red";

            var out2 = new Path.Rectangle(new Point(this.x + this.w, this.y + 15), new Size(10, 10));
            out2.fillColor = "red";


            var text = new PointText(new Point(this.x + 2, this.y + 0));
            text.fillColor = 'black';
            text.content = "bezier";

            this.group = new Group({
                children: [button, button2, text, in1, in2, out1, out2],
                //position: new Point(380,390)
            });
        }

        //bezier私有属性
        {
            this.drawing = true;
            this.done = false;

            this.mouseClick;
            this.handleIn;
            this.handleOut;
            this.segments = new Array;

            this.x1 = 400;
            this.x2 = 800;
            this.y1 = 0;
            this.y2 = 400;
            this.ifIn;



            //矩形边框
            this.bounds = new Array;
            this.multiPaths = new Array;
            this.myShape = new Path();
        }
    }
    mouseDown(event) {
        this.ifInside(event.point);
        if (this.ifIn == true && this.drawing == true) {
            this.mouseClick = event.point;
        }

    }

    mouseUp(event) {
        //this.evp=event.point;
        this.ifInside(event.point);
        if (this.ifIn == true && this.drawing == true) {
            this.handleIn = new Point(this.mouseClick.x - event.point.x, this.mouseClick.y - event.point.y);
            this.handleOut = new Point(event.point.x - this.mouseClick.x, event.point.y - this.mouseClick.y);
            //this.segments.push(new Segment(this.mouseClick, this.handleIn, this.handleOut));
            this.myShape.add(new Segment(this.mouseClick, this.handleIn, this.handleOut));
            this.myShape.fillColor = "red";
            this.myShape.strokeColor = "red";
            this.myShape.closed = true;
            this.myShape.fullySelected = true;

            this.bounds.length = 0;
            this.bounds.push(this.myShape.bounds);

        }
    }

    draw() {
        //鼠标拖动电池模块
        this.group.onMouseDrag = function (event) {

            this.translate(event.delta);

        }

        //输出图形
        this.group.children[5].onDoubleClick = () => {
            this.multiPaths.length = 0;
            this.multiPaths.push(this.myShape);
            //alert(this.multiPaths.length)
            temp = this.multiPaths;

        }

        //输出图形的bound
        this.group.children[6].onDoubleClick = () => {
            //this.bounds.length = 0;
            //this.bounds.push(this.myShape.bound);
            //alert(this.multiPaths.length)
            temp = this.bounds;
            //alert(this.bounds);

        }
    }

    ifInside(point) {
        if (point.x > this.x1 && point.x < this.x2 && point.y > this.y1 && point.y < this.y2) {
            this.ifIn = true;

        } else {
            this.ifIn = false;
        }
    }
}


//freeOpenCurve===================================================================================
class freeOpenCurve {
    constructor() {
        //电池模块初始化
        {
            this.x = 50;
            this.y = 300;
            this.w = 30;
            this.h = 15;


            var button = new Path.Rectangle(new Point(this.x, this.y), new Size(this.w, this.h));
            button.fillColor = "green";

            var button2 = new Path.Rectangle(new Point(this.x, this.y + this.h), new Size(this.w, this.h));
            button2.fillColor = "blue";

            var in1 = new Path.Rectangle(new Point(this.x, this.y), new Size(-10, 10));
            in1.fillColor = "red";

            var in2 = new Path.Rectangle(new Point(this.x, this.y + 15), new Size(-10, 10));
            in2.fillColor = "red";

            var out1 = new Path.Rectangle(new Point(this.x + this.w, this.y), new Size(10, 10));
            out1.fillColor = "red";

            var text = new PointText(new Point(this.x + 2, this.y + 0));
            text.fillColor = 'black';
            text.content = "freeC";

            this.group = new Group({
                children: [button, button2, text, in1, in2, out1],
                //position: new Point(380,390)
            });
        }

        //私有变量
        {
            this.x1 = 400;
            this.x2 = 800;
            this.y1 = 0;
            this.y2 = 400;

            this.path;
            this.drawing = false;
            this.ifIn = false;

        }
    }

    onMouseDown(event) {
        this.ifInside(event.point);
        if (this.drawing) {

            //if (this.drawing == 2) {

            if (this.ifIn == true) {
                //alert("ok");
                // If we produced a path before, deselect it:
                if (this.path) {
                    this.path.selected = false;
                    this.path.scale(0);
                }

                // Create a new path and set its stroke color to black:
                this.path = new Path({
                    segments: [event.point],
                    strokeColor: 'black',
                    // Select the path, so we can see its segment points:
                    fullySelected: true,
                    //closed=true
                });

            }

            //}
        }



    }

    // While the user drags the mouse, points are added to the path
    // at the position of the mouse:
    onMouseDrag(event) {
        this.ifInside(event.point);
        if (this.ifIn == true && this.drawing === true) {
            this.path.add(event.point);

        }

    }

    // When the mouse is released, we simplify the path:
    onMouseUp(event) {
        //this.ifInside(event.point);
        //var segmentCount = this.path.segments.length;
        if (this.ifIn == true) {
            // When the mouse is released, simplify it:
            if (this.drawing === true) {
                this.path.simplify(10);

                // Select the path, so we can see its segments:
                this.path.fullySelected = true;
            }


        }

    }

    draw() {
        this.group.onMouseDrag = function (event) {

            this.translate(event.delta);

        }

        this.group.children[0].onDoubleClick = () => {
            this.drawing = true;
            //alert(this.drawing);

        }

        this.group.children[1].onDoubleClick = () => {
            this.drawing = false;
            //alert(this.drawing);

        }
        this.group.children[5].onDoubleClick = () => {
            temp = this.path;

        }



    }

    ifInside(point) {
        if (point.x > this.x1 && point.x < this.x2 && point.y > this.y1 && point.y < this.y2) {
            this.ifIn = true;

        } else {
            this.ifIn = false;
        }
    }

}

class freeCloseCurve {
    constructor() {
        //电池模块初始化
        {
            this.x = 250;
            this.y = 300;
            this.w = 30;
            this.h = 15;


            var button = new Path.Rectangle(new Point(this.x, this.y), new Size(this.w, this.h));
            button.fillColor = "green";

            var button2 = new Path.Rectangle(new Point(this.x, this.y + this.h), new Size(this.w, this.h));
            button2.fillColor = "blue";

            var in1 = new Path.Rectangle(new Point(this.x, this.y), new Size(-10, 10));
            in1.fillColor = "red";

            var in2 = new Path.Rectangle(new Point(this.x, this.y + 15), new Size(-10, 10));
            in2.fillColor = "red";

            var out1 = new Path.Rectangle(new Point(this.x + this.w, this.y), new Size(10, 10));
            out1.fillColor = "red";

            var text = new PointText(new Point(this.x + 2, this.y + 0));
            text.fillColor = 'black';
            text.content = "fCC";

            this.group = new Group({
                children: [button, button2, text, in1, in2, out1],
                //position: new Point(380,390)
            });
        }

        //私有变量
        {
            //有效画图区域
            this.x1 = 400;
            this.x2 = 800;
            this.y1 = 0;
            this.y2 = 400;

            this.simplifyLevel = 3;
            this.drawing = false;
            this.path;
            this.multiPaths = new Array;
            this.ifIn = false;

        }
    }

    onMouseDown(event) {
        if (this.drawing) {
            this.ifInside(event.point);
            if (this.ifIn) {
                // If we produced a path before, deselect it:
                if (this.path) {
                    this.path.selected = false;
                    this.path.scale(0);
                }

                // Create a new path and set its stroke color to black:
                this.path = new Path({
                    segments: [event.point],
                    strokeColor: 'black',
                    // Select the path, so we can see its segment points:
                    fullySelected: true
                });

            }
        }


    }


    onMouseDrag(event) {
        if (this.drawing) {
            this.ifInside(event.point);
            if (this.ifIn) {
                this.path.add(event.point);

                // Update the content of the text item to show how many
                // segments it has:
                //this.textItem.content = 'Segment count: ' + this.path.segments.length;
            }

        }


    }

    // When the mouse is released, we simplify the path:
    onMouseUp(event) {

        //var segmentCount = this.path.segments.length;
        if (this.drawing && this.path && this.ifIn) {
            // When the mouse is released, simplify it:
            this.path.closed = true;
            this.path.simplify(this.simplifyLevel);

            // Select the path, so we can see its segments:
            this.path.fullySelected = true;
            this.multiPaths.length = 0;
            this.multiPaths.push(this.path);
            temp = this.multiPaths;

        }

    }

    draw() {
        this.group.onMouseDrag = function (event) {

            this.translate(event.delta);

        }

        this.group.children[0].onDoubleClick = () => {
            this.drawing = true;
            //alert(this.drawing);

        }

        this.group.children[1].onDoubleClick = () => {
            this.drawing = false;
            //alert(this.drawing);

        }

        this.group.children[5].onDoubleClick = () => {
            temp = this.multiPaths;
            //alert(this.path.bounds);

        }



    }

    ifInside(point) {
        if (point.x > this.x1 && point.x < this.x2 && point.y > this.y1 && point.y < this.y2) {
            this.ifIn = true;

        } else {
            this.ifIn = false;
        }
    }

}

//class模板===================================================================================
class freeOpenCurveButton {
    constructor() {
        //电池初始化
        {
            this.x = 0;
            this.y = 300;
            this.w = 30;
            this.h = 15;


            var button = new Path.Rectangle(new Point(this.x, this.y), new Size(this.w, this.h));
            button.fillColor = "red";

            var button2 = new Path.Rectangle(new Point(this.x, this.y + this.h), new Size(this.w, this.h));
            button2.fillColor = "blue";

            //var in1 = new Path.Rectangle(new Point(this.x, this.y), new Size(-10, 10));
            //in1.fillColor = "red";

            //var in2 = new Path.Rectangle(new Point(this.x, this.y + 15), new Size(-10, 10));
            //in2.fillColor = "red";

            //var out1 = new Path.Rectangle(new Point(this.x + this.w, this.y), new Size(10, 10));
            //out1.fillColor = "red";




            var text = new PointText(new Point(this.x + 2, this.y + 0));
            text.fillColor = 'black';
            text.content = "focb";

            this.group = new Group({
                children: [button, button2, text],
                //position: new Point(380,390)
            });
        }

        //私有变量
        this.freeOpenCurvePanels = new Array;
        //this.freeOpenCurvePanels.push(new freeOpenCurve());
    }
    mouseDown(event) {
        for (let i = 0; i < this.freeOpenCurvePanels.length; i++) {
            this.freeOpenCurvePanels[i].onMouseDown(event);
        }

    }

    mouseDrag(event) {
        for (let i = 0; i < this.freeOpenCurvePanels.length; i++) {
            this.freeOpenCurvePanels[i].onMouseDrag(event);
        }
    }

    mouseUp(event) {
        for (let i = 0; i < this.freeOpenCurvePanels.length; i++) {
            this.freeOpenCurvePanels[i].onMouseUp(event);
        }

    }

    draw() {
        for (var i = 0; i < this.freeOpenCurvePanels.length; i++) {
            this.freeOpenCurvePanels[i].draw();
        }
        //this.freeOpenCurvePanels[0].draw();

        this.group.onMouseDrag = function (event) {

            this.translate(event.delta);

        }

        this.group.children[0].onDoubleClick = () => {
            this.freeOpenCurvePanels.push(new freeOpenCurve());

        }



    }



}

//class模板===================================================================================
class freeClosedCurveButton {
    constructor() {
        //

        {
            this.x = 0;
            this.y = 10;
            this.w = 30;
            this.h = 15;

            var button = new Path.Rectangle(new Point(this.x, this.y), new Size(this.w, this.h));
            button.fillColor = "red";

            var button2 = new Path.Rectangle(new Point(this.x, this.y + this.h), new Size(this.w, this.h));
            button2.fillColor = "blue";

            var in1 = new Path.Rectangle(new Point(this.x, this.y), new Size(-10, 10));
            in1.fillColor = "red";

            var in2 = new Path.Rectangle(new Point(this.x, this.y + 15), new Size(-10, 10));
            in2.fillColor = "red";

            var out1 = new Path.Rectangle(new Point(this.x + this.w, this.y), new Size(10, 10));
            out1.fillColor = "red";




            var text = new PointText(new Point(this.x + 2, this.y + 0));
            text.fillColor = 'black';
            text.content = "fcc";

            this.group = new Group({
                children: [button, button2, text, in1, in2, out1],
                //position: new Point(380,390)
            });
        }

        this.freeCurvePanels = new Array;

    }

    mouseDown(event) {
        for (let i = 0; i < this.freeCurvePanels.length; i++) {
            this.freeCurvePanels[i].onMouseDown(event);
        }

    }
    mouseDrag(event) {
        for (let i = 0; i < this.freeCurvePanels.length; i++) {
            this.freeCurvePanels[i].onMouseDrag(event);
        }
    }

    mouseUp(event) {
        for (let i = 0; i < this.freeCurvePanels.length; i++) {
            this.freeCurvePanels[i].onMouseUp(event);
        }
    }

    draw() {
        for (let i = 0; i < this.freeCurvePanels.length; i++) {
            this.freeCurvePanels[i].draw();
        }

        this.group.onMouseDrag = function (event) {

            this.translate(event.delta);

        }

        this.group.children[0].onDoubleClick = () => {
            //this.x++;
            //alert(this.x);
            this.freeCurvePanels.push(new freeCloseCurve());

        }



    }



}

//class模板===================================================================================
class beziersButton {
    constructor() {
        //电池初始化

        {
            this.x = 0;
            this.y = 350;
            this.w = 30;
            this.h = 15;



            //this.numberPanels = new Array;
            //this.numberPanels.push(new mouseButton3());

            var button = new Path.Rectangle(new Point(this.x, this.y), new Size(this.w, this.h));
            button.fillColor = "red";

            var button2 = new Path.Rectangle(new Point(this.x, this.y + this.h), new Size(this.w, this.h));
            button2.fillColor = "blue";

            var in1 = new Path.Rectangle(new Point(this.x, this.y), new Size(-10, 10));
            in1.fillColor = "red";

            var in2 = new Path.Rectangle(new Point(this.x, this.y + 15), new Size(-10, 10));
            in2.fillColor = "red";

            var out1 = new Path.Rectangle(new Point(this.x + this.w, this.y), new Size(10, 10));
            out1.fillColor = "red";




            var text = new PointText(new Point(this.x + 2, this.y + 0));
            text.fillColor = 'black';
            text.content = "beziers";

            this.group = new Group({
                children: [button, button2, text, in1, in2, out1],
                //position: new Point(380,390)
            });
        }

        this.beziersPanels = new Array;
        //this.beziersPanels.push(new beziers2());
    }

    mouseDown(event) {
        for (let i = 0; i < this.beziersPanels.length; i++) {
            this.beziersPanels[i].mouseDown(event);
        }

    }


    mouseUp(event) {
        for (let i = 0; i < this.beziersPanels.length; i++) {
            this.beziersPanels[i].mouseUp(event);
        }
    }


    draw() {

        for (let i = 0; i < this.beziersPanels.length; i++) {
            this.beziersPanels[i].draw();
        }

        this.group.onMouseDrag = function (event) {

            this.translate(event.delta);

        }

        this.group.children[0].onDoubleClick = () => {
            this.beziersPanels.push(new beziers2());
            //this.x++;
            //alert(this.x);

        }



    }



}

//freeOpenCurve===================================================================================
class divideCurve {
    constructor() {
        //电池模块初始化
        {
            this.x = 50;
            this.y = 300;
            this.w = 30;
            this.h = 15;


            var button = new Path.Rectangle(new Point(this.x, this.y), new Size(this.w, this.h));
            button.fillColor = "green";

            var button2 = new Path.Rectangle(new Point(this.x, this.y + this.h), new Size(this.w, this.h));
            button2.fillColor = "red";

            var in1 = new Path.Rectangle(new Point(this.x, this.y), new Size(-10, 10));
            in1.fillColor = "grey";

            var in2 = new Path.Rectangle(new Point(this.x, this.y + 15), new Size(-10, 10));
            in2.fillColor = "grey";

            var out1 = new Path.Rectangle(new Point(this.x + this.w, this.y), new Size(10, 10));
            out1.fillColor = "grey";

            var text = new PointText(new Point(this.x + 2, this.y + 0));
            text.fillColor = 'black';
            text.content = "dvdC";

            this.group = new Group({
                children: [button, button2, text, in1, in2, out1],
                //position: new Point(380,390)
            });
        }

        //私有变量
        {
            //有效画图区域
            this.x1 = 400;
            this.x2 = 800;
            this.y1 = 0;
            this.y2 = 400;

            var point1 = new Point(420, 0);
            //var point2 = new Point(420, 150);
            var size = new Size(300, 300);

            //this.canvas = new Path.Rectangle(point, size);
            //this.canvas.strokeColor = 'black';

            this.path;
            this.drawing = true;
            this.ifIn = false;
            this.multiPaths = new Array;
            this.multiPaths.push(new Path.Rectangle(point1, size));
            //this.multiPaths.push(new Path.Rectangle(point2, size));

            for (let i = 0; i < this.multiPaths.length; i++) {
                this.multiPaths[i].fillColor = Color.random();
            }

            this.multiPaths2 = new Array;

            this.text1 = new PointText(new Point(50, 450));
            this.text1.justification = 'left';
            this.text1.fillColor = 'black';


        }
    }

    onMouseDown(event) {
        for (let i = 0; i < this.multiPaths.length; i++) {
            this.multiPaths[i].selected = false;

        }

        this.ifInside(event.point);
        if (this.drawing) {
            if (this.ifIn == true) {
                // If we produced a path before, deselect it:
                if (this.path) {
                    this.path.selected = false;
                    this.path.remove();
                }

                // Create a new path and set its stroke color to black:
                this.path = new Path({
                    segments: [event.point],
                    //strokeColor: 'black',
                    // Select the path, so we can see its segment points:
                    fullySelected: true,
                });

            }

            //}
        }



    }

    // While the user drags the mouse, points are added to the path
    onMouseDrag(event) {
        for (let i = 0; i < this.multiPaths.length; i++) {
            this.multiPaths[i].onMouseEnter = (event) => {
                this.multiPaths[i].selected = true;
            }
        }

        this.ifInside(event.point);
        if (this.ifIn && this.drawing) {
            this.path.add(event.point);

        }

    }

    // When the mouse is released, we simplify the path:
    onMouseUp(event) {
        //this.ifInside(event.point);
        //var segmentCount = this.path.segments.length;
        if (this.ifIn) {
            // When the mouse is released, simplify it:
            if (this.drawing) {
                this.path.closed = true;
                this.path.simplify(10);

                for (let i = 0; i < this.multiPaths.length; i++) {
                    if (this.multiPaths[i].selected) {
                        //let tempCurve = this.multiPaths[i].subtract(this.path);
                        //let tempCurve2 = this.multiPaths[i].intersect(this.path);
                        //var copy = tempCurve.clone();
                        //var copy2 = tempCurve2.clone();
                        //copy.position.x += 0;
                        //copy.fillColor = Color.random();

                        //copy2.position.x += 0;
                        //copy2.fillColor = "blue";
                        this.multiPaths2.push(this.multiPaths[i].subtract(this.path));
                        this.multiPaths2.push(this.multiPaths[i].intersect(this.path));
                        this.multiPaths[i].remove();
                    } else {
                        //var copy3 = this.multiPaths[i].clone();
                        //copy3.position.x += 0;
                        //copy3.fillColor = Color.random();
                        this.multiPaths2.push(this.multiPaths[i].clone());
                        //this.multiPaths2.push(this.multiPaths[i]);
                        //alert(this.multiPaths2.length);
                        this.multiPaths[i].remove();
                    }
                }

                //this.multiPaths2.length = 0;

                /* for (let i = 0; i < this.multiPaths.length; i++) {
                    this.multiPaths[i].remove();

                } */

                this.multiPaths.length = 0;
                //this.multiPaths[0].scale(0);
                //this.multiPaths = this.multiPaths2;


                for (let j = 0; j < this.multiPaths2.length; j++) {
                    //this.multiPaths2.push(this.multiPaths[i].divide(this.path));
                    //this.multiPaths2[j].fillColor = Color.random();
                    //var copy4=this.multiPaths2[j].clone();
                    this.multiPaths.push(this.multiPaths2[j].clone());
                    //
                    //alert(i);
                }

                for (let j = 0; j < this.multiPaths2.length; j++) {
                    this.multiPaths2[j].selected = false;
                    this.multiPaths2[j].remove();
                }

                this.multiPaths2.length = 0;

                for (let i = 0; i < this.multiPaths.length; i++) {
                    //this.multiPaths[i].fillColor = "pink";
                    this.multiPaths[i].selected = false;
                    this.multiPaths[i].fillColor = Color.random();
                    //alert(i);
                }

                this.path.remove();

                //alert(this.multiPaths.length);
            }
        }
    }

    draw() {


        /* path.onMouseEnter = function(event) {
            this.fillColor = 'red';
        } */

        for (let i = 0; i < this.multiPaths.length; i++) {
            this.multiPaths[i].onMouseDrag = (event) => {
                this.multiPaths[i].selected = true;
            }
        }

        this.text1.content = 'multiPaths1 : ' + this.multiPaths.length + '     multiPaths2 : ' + this.multiPaths2.length;

        this.group.onMouseDrag = function (event) {

            this.translate(event.delta);

        }

        this.group.children[0].onDoubleClick = () => {
            this.drawing = true;
            //alert(this.drawing);

        }

        this.group.children[1].onDoubleClick = () => {
            this.drawing = false;
            //alert(this.drawing);

        }
        this.group.children[5].onDoubleClick = () => {
            temp = this.path;

        }



    }

    ifInside(point) {
        if (point.x > this.x1 && point.x < this.x2 && point.y > this.y1 && point.y < this.y2) {
            this.ifIn = true;

        } else {
            this.ifIn = false;
        }
    }

}