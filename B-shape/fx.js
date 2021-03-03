//========fx类
function fx(x,y,w,h){
    var point = new Point(x, y);
    var size = new Size(w, h);
    var pathfx = new Path.Rectangle(point, size);
    pathfx.strokeColor = 'black';
	pathfx.fillColor='white';  
    
    
    var hor = Math.random();
	if (hor<0.5)
	{
	this.x1=x;
    this.y1=y;
    this.w1=w/3;
    this.h1=h;
    this.x2=x+w/3;
    this.y2=y;
    this.w2=w-w/3;
    this.h2=h;
	}else
	{
	this.x1=x;
    this.y1=y;
    this.w1=w;
    this.h1=h/3;
    this.x2=x;
    this.y2=y+h/3;
    this.w2=w;
    this.h2=h-h/3;
	}
    
}