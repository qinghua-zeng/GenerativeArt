//===========
class circle4 {
    constructor(event) {
        //电池模板
        {
            this.x = 250;
            this.y = 100;
            this.w = 50;
            this.h = 25;


            this.button = new Path.Rectangle(new Point(this.x, this.y), new Size(this.w, this.h));
            this.button.fillColor = "green";

            var in1 = new Path.Rectangle(new Point(this.x, this.y), new Size(-10, 10));
            in1.fillColor = "red";

            var in2 = new Path.Rectangle(new Point(this.x, this.y + 15), new Size(-10, 10));
            in2.fillColor = "red";

            var out1 = new Path.Rectangle(new Point(this.x + this.w, this.y), new Size(10, 10));
            out1.fillColor = "red";

            var text = new PointText(new Point(this.x + 4, this.y + 13));
            text.fillColor = 'black';
            text.content = "circle";
            //printObject(this.text);

            this.group = new Group({
                children: [this.button, text, in1, in2, out1],
            });
        }

        //初始化自带3个点
        {
            this.pts = new Array;
            this.pts.push(new Point(450, 50));
            this.pts.push(new Point(500, 50));
            this.pts.push(new Point(550, 50));
        }

        //output 初始化的3个圆
        {
            this.multiPaths = new Array;


            {
                this.r = 10;

                for (var i = 0; i < this.pts.length; i++) {
                    this.multiPaths.push(new Path.Circle(new Point(this.pts[i].x, this.pts[i].y), this.r));
                    this.multiPaths[i].fillColor = "pink";
                }
            }
        }

    }



    draw(event) {
        //拖动
        this.group.onMouseDrag = (event) => {
            this.group.selected = true;
            this.group.translate(event.delta);
        }

        //in1 输入点
        this.group.children[2].onDoubleClick = (event) => {

            this.pts = temp;
            this.update();
            temp = this.multiPaths;
        }

        //in2 输入圆的半径
        this.group.children[3].onDoubleClick = (event) => {

            this.r = temp;
            this.update();
            temp = this.multiPaths;
        }

        //输出
        this.group.children[4].onDoubleClick = (event) => {

            temp = this.multiPaths;

        }


    }

    update() {
        for (var i = 0; i < this.multiPaths.length; i++) {
            this.multiPaths[i].scale(0);

        }

        //this.pts.length=0;
        this.multiPaths.length = 0;


        //alert(this.pts.length);
        for (var i = 0; i < this.pts.length; i++) {
            this.multiPaths.push(new Path.Circle(new Point(this.pts[i].x, this.pts[i].y), this.r));
            this.multiPaths[i].fillColor = "pink";
        }
        //alert(this.pts.length);

    }


}
//======================================================================================

class buttonCircle {
    constructor() {
        //电池模板
        {
            this.n = 5;

            this.x = 0;
            this.y = 100;
            this.w = 30;
            this.h = 15;

            //this.ifInside;


            var button = new Path.Rectangle(new Point(this.x, this.y), new Size(this.w, this.h));
            button.fillColor = "red";

            var button2 = new Path.Rectangle(new Point(this.x, this.y + this.h), new Size(this.w, this.h));
            button2.fillColor = "yellow";


            var text = new PointText(new Point(this.x, this.y));
            text.fillColor = 'black';
            text.content = "cl_bt";
            //printObject(this.text);

            this.group = new Group({
                children: [button, button2, text],
                //position: new Point(380,390)
            });
        }

        this.circlePanels = new Array;

    }

    draw() {

        this.group.children[0].onDoubleClick = () => {

            this.circlePanels.push(new circle4());
        }

        this.group.children[1].onDoubleClick = () => {
            //this.x++;
            //alert(this.x);

            //this.circlePanels.pop();
            //alert(this.circlePanels[0].group);
            for (var i = 0; i < this.circlePanels.length; i++) {
                if (this.circlePanels[i].group.selected == true) {
                    for (var j = 0; j < this.circlePanels[i].multiPaths.length; j++) {
                        this.circlePanels[i].multiPaths[j].scale(0);
                        this.circlePanels[i].group.remove();
                    }
                    //注意⚠️目前只是删除数组内容的显示，并没有删除数组中的对象！！！
                    //this.circlePanels.pop();
                }
            }
            //alert(this.circlePanels.length);
        }
        this.group.onMouseDrag = function (event) {

            this.translate(event.delta);

        }

        for (var i = 0; i < this.circlePanels.length; i++) {
            this.circlePanels[i].draw();

        }
    }
}