//01 显示信息 20.10.16
class showInfo {
    constructor(){
        this.text3;
    }

    draw(ttt,tempX,tempY){
        this.text3 = new PointText(new Point(tempX, tempY));
        this.text3.justification = 'left';
        this.text3.fillColor = 'black';
        
        this.text3.content = ttt;
    }

}

//01.1 显示信息 20.10.17
class showInfo1 {
    constructor(ttt,tempX,tempY){
        this.text = ttt;
        this.x = tempX;
        this.y=tempY;
        this.text3;
    }

    draw(){
        this.text3 = new PointText(new Point(this.x, this.y));
        this.text3.justification = 'left';
        this.text3.fillColor = 'black';
        
        this.text3.content = this.text;
    }

}

//01.1 显示信息 20.10.17
class showInfo2 {
    constructor(ttt,tempX,tempY){
        this.text = ttt;
        this.x = tempX;
        this.y=tempY;
        this.text3=new PointText(new Point(this.x, this.y));
        this.text3.justification = 'left';
        this.text3.fillColor = 'black';
        
        this.text3.content = this.text;
        
    }

    draw(){
        
        
    }

}