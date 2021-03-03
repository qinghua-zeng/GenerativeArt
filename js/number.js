class mouseButton3 {
    constructor(x, y, content) {
        this.n = 5;

        this.x = 60;
        this.y = 100;
        this.w = 25;
        this.h = 15;
        this.button1 = new Path.Rectangle(new Point(this.x, this.y), new Size(this.w, this.h));
        this.button1.fillColor = "red";

        this.button2 = new Path.Rectangle(new Point(this.x, this.y + this.h), new Size(this.w, this.h));
        this.button2.fillColor = "blue";

        this.out1 = new Path.Rectangle(new Point(this.x + this.w, this.y), new Size(10, 10));
        this.out1.fillColor = "green";
        //this.ifInside;

        this.circlePanels = new Array;
        //this.circlePanels.push(new circle4());
        //this.circlePanels.push(new circle4());



        this.text = new PointText(new Point(this.x + 4, this.y + 13));
        this.text.fillColor = 'black';
        this.text.content = this.n;
        //printObject(this.text);

        this.group = new Group({
            children: [this.button1, this.button2, this.text, this.out1],
            // Set the stroke color of all items in the group:
            //strokeColor: 'black',
            // Move the group to the center of the view:
            //position: new Point(380,390)

        });
    }

    draw(event) {
        this.group.onMouseDrag = function (event) {

            this.translate(event.delta);
        }

        this.group.children[0].onDoubleClick = (event) => {
            this.n++;
            temp = this.n;
            this.group.children[2].content = this.n;
            //alert(this.n);
        }

        this.group.children[1].onDoubleClick = (event) => {
            this.n--;
            temp = this.n;
            //alert(this.group.children[2]);
            this.group.children[2].content = this.n;
            //po(this.group.children[2].content);

        }

        this.group.children[3].onDoubleClick = (event) => {

            //alert(this.group.children[3]);
            temp = this.n;
            //project.deselectAll();


        }

    }
}

class numberButton {
    constructor() {
        //电池模板
        {
            this.x = 0;
            this.y = 200;
            this.w = 30;
            this.h = 15;

            var button = new Path.Rectangle(new Point(this.x, this.y), new Size(this.w, this.h));
            button.fillColor = "red";

            var button2 = new Path.Rectangle(new Point(this.x, this.y + this.h), new Size(this.w, this.h));
            button2.fillColor = "orange";

            var text = new PointText(new Point(this.x + 2, this.y + 0));
            text.fillColor = 'black';
            text.content = "n_bt";

            this.group = new Group({
                children: [button, button2, text],
                //position: new Point(380,390)
            });
        }
        this.numberPanels = new Array;
        //this.numberPanels.push(new mouseButton3());
    }

    draw() {
        for (var i = 0; i < this.numberPanels.length; i++) {
            this.numberPanels[i].draw();

        }


        this.group.children[0].onDoubleClick = () => {
            //this.x++;
            //alert(this.x);
            this.numberPanels.push(new mouseButton3());
        }


    }
}