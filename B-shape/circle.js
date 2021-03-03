//11 circle 类，传入一个 points2D1 对象 20.10.16 已停用
class circle1 {
    constructor(points2D1) {  //参数必须传入一个 points2D1 对象！
        //Input
        this.pts1 = points2D1.thePoints;
        this.r = 30;

        //Output
        this.cPath = new CompoundPath();
        this.circles = new Array;
    }

    draw() {

        //this.pts1.length = 0;
        this.circles.length = 0;

        for (let i = 0; i < this.pts1.length; i++) {
            this.circles.push(new Path.Circle(this.pts1[i], this.r));
            //=============
            this.cPath.children.push((new Path.Circle({
                center: new Point(this.pts1[i].x, this.pts1[i].y),
                radius: this.r,
                //fillColor: 'orange',
                //strokeWidth: 2,
                //selected: true
            })));


        }
        for (let w = 0; w < this.circles.length; w++) {
            this.circles[w].fillColor = 'blue';

        }


    }

}

//11.1 circle 类，传入一个 points2D1 对象 20.10.16
//201018 将this.shape统一到cshape，可以和cshape类型通用，接下来研究如何继承
class circle2 {
    constructor() {  //参数必须传入一个 points2D1 对象！
        //Input
        this.pts1 = { x: 30, y: 30 }, { x: 60, y: 30 }, { x: 30, y: 60 }, { x: 60, y: 60 }
        this.r = 30;

        //Output
        //this.cPath = new CompoundPath();
        this.shapes = new Array;
    }

    draw() {
        //this.pts1.length = 0;
        this.shapes.length = 0;

        for (let i = 0; i < this.pts1.length; i++) {
            this.shapes.push(new Path.Circle(this.pts1[i], this.r));
            //=============
            /* this.cPath.children.push((new Path.Circle({
                center: new Point(this.pts1[i].x, this.pts1[i].y),
                radius: this.r,
                //fillColor: 'orange',
                //strokeWidth: 2,
                //selected: true
            })));  */
        }
        for (let w = 0; w < this.shapes.length; w++) {
            this.shapes[w].fillColor = 'blue';

        }
    }
}

//20.10.18
class rect1 {
    constructor() {  //参数必须传入一个 points2D1 对象！
        //Input
        this.pts = new Array;
        this.pts.push(new Point(20, 20));
        this.w = 30;
        this.h = 20;

        //Output
        this.shapes = new Array;
    }

    draw() {
        //this.pts1.length = 0;
        this.shapes.length = 0;

        for (let i = 0; i < this.pts.length; i++) {
            this.shapes.push(new Path.Rectangle(this.pts[i], new Size(this.w, this.h)));
            //=============
            /* this.cPath.children.push((new Path.Circle({
                center: new Point(this.pts1[i].x, this.pts1[i].y),
                radius: this.r,
                //fillColor: 'orange',
                //strokeWidth: 2,
                //selected: true
            })));  */
        }
        for (let w = 0; w < this.shapes.length; w++) {
            this.shapes[w].fillColor = 'blue';

        }
    }
}

