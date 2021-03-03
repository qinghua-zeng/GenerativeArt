//============================================fxFractal
function fxFractal(xx,yy,ww,hh,nn){

	var rec = new Array(); 
	rec.push(new fx(xx,yy,ww,hh));
//=========================================
	function itr(before){
		var now=new Array();
		for(i=0;i<before.length;i++){
			var a1=before[i].x1;
			var b1=before[i].y1;
			var c1=before[i].w1;
			var d1=before[i].h1;
			var a2=before[i].x2;
			var b2=before[i].y2;
			var c2=before[i].w2;
			var d2=before[i].h2;
			now.push(new fx(a1,b1,c1,d1));
			now.push(new fx(a2,b2,c2,d2));
		}
		return now;
	}

	//迭代次数
	for(j=0;j<nn;j++){
		rec=itr(rec);
	}
	//=============================显示rec数组的对象数量
	var text = new PointText(new Point(20, 580));
	text.justification = 'left';
	text.fillColor = 'black';
	text.content =  'Total Rect Number: ' + rec.length;
}	