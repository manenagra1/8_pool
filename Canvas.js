function Canvas2D(){
    this.canvas= document.getElementById('screen');
    this._canvasContext = this._canvasContext.getContext('2d');

}

Canvas2D.prototype.clear = function (){
    this._canvasContext.clearRect(0,0, this._canvas.width, this.canvas.height);
}

Canvas2D.prototype.drawImage=function(Image, position){
    this._canvasContext.drawImage(Image, position.x, position.y);
}

let Canvas = new Canvas2D();

//Testing
let image = new Image();
image.src = "./photo/p1.jpg";

setTimeout(() => {
    Canvas.drawImage(image, {x:0, y:0});
}, 1000);