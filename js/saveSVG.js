//=================
class saveSVG {
  constructor() {
    this.x = 0;
    this.y = 380;
    this.n;
    var button = new Path.Rectangle(new Point(this.x, this.y), new Size(40, 20));
    button.fillColor = "black";
    //this.button.position=new Point(3,3);
    
    var text = new PointText(new Point(this.x+4, this.y+13));
        text.fillColor = 'white';
        text.content = "save";
        
        this.group = new Group({
          children: [button,text],
          // Set the stroke color of all items in the group:
          //strokeColor: 'black',
          // Move the group to the center of the view:
          //position: new Point(0,390)

      });


    
  }

  

  

  draw(event) {
    this.group.onMouseDrag = function (event) {

      this.translate(event.delta);
      
    }
    this.group.onClick = function(event) {
      //printObject(this.children);
  }


    this.group.onDoubleClick = onDoubleClick;
    function onDoubleClick() {
      saveFile();
    }

    

    

  }

}


//保存文件 使用中==================
function saveFile() {
  var ko = project.exportSVG();
  //var import1= project.importSVG("http://127.0.0.1/javascriptTest/bot.svg");
  //ko=project.exportSVG();
  var blob = new Blob([ko.outerHTML], { type: "text/plain;charset=utf-8" });
  //var blob = new Blob([import1], { type: "text/plain;charset=utf-8" });
  saveAs(blob, "svg.svg");
}