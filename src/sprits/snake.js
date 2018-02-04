const screenWidth = window.innerWidth
const screenHeight = window.innerHeight
export default class Snake {
  constructor(pool) {
    this.x = screenWidth/2;
    this.y = screenHeight*4/5;
    this.body = [pool.getItemByClass("body", Body), pool.getItemByClass("body", Body), pool.getItemByClass("body", Body), pool.getItemByClass("body", Body)]
    for (var i = 0; i < this.body.length; i++){
      this.body[i].x = screenWidth / 2;
      this.body[i].y = screenWidth / 2;
    }
    this.length = 4
  }
  drawToCanvas(ctx){
    for (var i = this.body.length - 1; i >= 0 ; i--) {
      this.body[i].drawToCanvas(ctx)
    } 
    if (this.body.length >= 1){
     //to do, 把长度画在第一个body里面
    }
  }
  move(){
    //todo
  }
  knickRec(){
    //todo
  }
  knickWall() {
    //todo
  }
  eat(num){
   //todo
  }
}