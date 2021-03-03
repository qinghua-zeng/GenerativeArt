//====================
class cShape {
    constructor() {  //
        //input
        this.strokeWidth = 2;
        this.fillColor = "red";

        //output
        this.multiPaths = new Array;
        this.result;

    }

    draw() {
        for (var i = 0; i < this.multiPaths.length; i++) {
            //copy.push(qqq[index].clone());
            //this.multiPaths[i].position.y += 300;
            this.multiPaths[i].fillColor = this.fillColor;
            this.multiPaths[i].strokeColor = 'blue';
            this.multiPaths[i].strokeWidth = this.strokeWidth;
            this.multiPaths[i].fullySelected = false;

        }

        //this.multiPaths[0].fillColor = this.fillColor;
        //alert(this.multiPaths.length);
        //this.multiPaths[1].strokeColor = 'red';
        //this.multiPaths[1].strokeWidth = this.strokeWidth;
        //this.multiPaths[1].fullySelected = false;
    }

}

//==========================================================================
/* function itst(input1, input2) {
    var result = new cShape();//将Array 定义成一个新类
    //result.length = 0;
    for (var j = 0; j < input1.length; j++) {
        for (let i = 0; i < input2.shapes.length; i++) {
            result.shapes.push(input1.multiPaths[j].intersect(input2.paths[i], false))

        }

    }

    result.draw();
    return result;
} */

class intersect {
    constructor() {
        //电池模板
        {
            this.x = 350;
            this.y = 300;
            this.w = 30;
            this.h = 15;

            var button = new Path.Rectangle(new Point(this.x, this.y), new Size(this.w, this.h));
            button.fillColor = "red";

            var button2 = new Path.Rectangle(new Point(this.x, this.y + this.h), new Size(this.w, this.h));
            button2.fillColor = "green";

            var in1 = new Path.Rectangle(new Point(this.x, this.y), new Size(-10, 10));
            in1.fillColor = "blue";

            var in2 = new Path.Rectangle(new Point(this.x, this.y + 15), new Size(-10, 10));
            in2.fillColor = "blue";

            var out1 = new Path.Rectangle(new Point(this.x + this.w, this.y), new Size(10, 10));
            out1.fillColor = "blue";

            var text = new PointText(new Point(this.x + 2, this.y + 0));
            text.fillColor = 'black';
            text.content = "intersect";

            this.group = new Group({
                children: [button, button2, text, in1, in2, out1],
                //position: new Point(380,390)
            });
        }

        //独自的变量
        {
            this.input1 = new cShape();
            this.input2 = new cShape();

            this.tempInput1 = new cShape();
            this.tempInput2 = new cShape();

            this.output1 = new cShape();

        }

    }

    itst() {


        if (this.output1.multiPaths.length > 0) {
            //取消显示
            for (var i = 0; i < this.output1.multiPaths.length; i++) {
                this.output1.multiPaths[i].scale(0);
            }
            //this.output1.multiPaths[0].scale(0);
        }

        this.output1.multiPaths.length = 0;//清空数组

        //计算相交
        for (var i = 0; i < this.tempInput1.multiPaths.length; i++) {
            for (var j = 0; j < this.tempInput2.multiPaths.length; j++) {
                this.output1.multiPaths.push(this.tempInput1.multiPaths[i].intersect(this.tempInput2.multiPaths[j], false))

            }

        }

        //取消原图形的显示
        for (var i = 0; i < this.tempInput1.multiPaths.length; i++) {
            for (var j = 0; j < this.tempInput2.multiPaths.length; j++) {

                this.tempInput1.multiPaths[i].scale(0);
                this.tempInput2.multiPaths[j].scale(0);

            }

        }



    }

    draw() {
        this.group.onMouseDrag = function (event) {

            this.translate(event.delta);

        }

        //in1
        this.group.children[3].onDoubleClick = () => {
            this.input1.multiPaths = temp;
            this.tempInput1 = this.input1;
            //alert(this.x);
            this.itst();
            this.output1.draw();
            temp = this.output1.multiPaths;

        }
        //in2
        this.group.children[4].onDoubleClick = () => {
            this.input2.multiPaths = temp;
            this.tempInput2 = this.input2;
            //alert(this.x);
            this.itst();
            this.output1.draw();
            temp = this.output1.multiPaths;

        }
        //out1 计算相交并输出
        this.group.children[5].onDoubleClick = () => {

            //this.output1.multiPaths[0].scale(0);

            temp = this.output1.multiPaths;
            //alert(this.output1.multiPaths.length);

        }
    }
}

//class模板===================================================================================
class intersectButton {
    constructor() {
        //电池初始化
        {
            this.x = 0;
            this.y = 150;
            this.w = 30;
            this.h = 15;

            var button = new Path.Rectangle(new Point(this.x, this.y), new Size(this.w, this.h));
            button.fillColor = "red";

            var button2 = new Path.Rectangle(new Point(this.x, this.y + this.h), new Size(this.w, this.h));
            button2.fillColor = "blue";

            var text = new PointText(new Point(this.x + 2, this.y + 0));
            text.fillColor = 'black';
            text.content = "itsct";

            this.group = new Group({
                children: [button, button2, text],
                //position: new Point(380,390)
            });
        }

        this.intersectPanels=new Array;

    }

    draw() {
        for(let i=0;i<this.intersectPanels.length;i++){
            this.intersectPanels[i].draw();

        }

        this.group.onMouseDrag = function (event) {
            this.translate(event.delta);
        }

        this.group.children[0].onDoubleClick = () => {
            this.intersectPanels.push(new intersect());
        }



    }



}


//相交函数
function intersect2(shape1,shape2) {
    //计算相交
    let result=new Array;
    for (var i = 0; i < shape1.length; i++) {
        for (var j = 0; j < shape2.length; j++) {
            result.push(shape1[i].intersect(shape2[j], false))
       }
    }
    return result;
}


function makeDots(path, dotDistX1, dotDistY1, minR, maxR) {
    let dots2 = new Array;

    for (let i = 0; i < path.bounds.width / dotDistX1 + 1; i++) {

        for (let j = 0; j < (path.bounds.height / dotDistY1) + 1; j++) {
            dots2.push(new Path.Circle({
                center: new Point(i * dotDistX1 + path.bounds.x, j * dotDistY1 + path.bounds.y),
                radius: randomBetween(minR, maxR),
                fillColor: 'blue',
                //selected: true
            }))

        }
    }
    //alert(path);
    pathArray = new Array;
    pathArray.push(path);
    //return dots2;
    var result1 = intersect2(pathArray, dots2);

    //alert(result1.length);

    for (let i = 0; i < result1.length; i++) {
        result1[i].fillColor = "black";
    }

    for (let i = 0; i < dots2.length; i++) {
        dots2[i].remove();
    }
    return result1;

}
