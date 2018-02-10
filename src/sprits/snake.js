import Pool from '../base/pool.js'
import Body from './body.js'

//常量重复定义了，这么写不合理
const RADIUM = 15
const DISTANSE = 35
const SCREEN_WIDTH = window.innerWidth

export default class Snake {
  //目前body{0}即是蛇头，后续有必要的话可以单独提出来
  constructor(pool, initX, initY) {
    //速度
    this.speed = 2
    //初始化蛇身，长度为4节，第0节为头
    this.body = [pool.getItemByClass("body", Body), pool.getItemByClass("body", Body), pool.getItemByClass("body", Body), pool.getItemByClass("body", Body)]
    for (var i = 0; i < this.body.length; i++){
      this.body[i].x = initX;
      this.body[i].y = initY;
    }
    this.length = 4

    this.initEvent()
  }
  drawToCanvas(ctx){
    for (var i = this.body.length - 1; i >= 0 ; i--) {
      this.body[i].drawToCanvas(ctx)
    } 
    if (this.body.length >= 1){
     //to do, 把长度画上
    }
  }
  moveHeader(){
    this.body[0].y -= this.speed
  }
  moveBody(){    
    for (var i = this.body.length - 1; i > 0; i--) {
      this.body[i].move(this.body[i - 1])
    }
  }
  /* 这里只是前进方向的移动 */
  move(){
    this.moveBody()
    this.moveHeader()    
  }
  /* Y轴上的偏移 */
  offsetY(oY){
    for (var i = 0; i < this.body.length; i++) {
      this.body[i].y += oY
    }
  }
  knickRec(){
    //todo
  }
  eat(num){
   //todo
  }
  initEvent(){
    //手指按下
    canvas.addEventListener('touchstart', ((e) => {
      e.preventDefault()
      this.touchedX = e.touches[0].clientX
    }).bind(this))

    //手指移动 
    canvas.addEventListener('touchmove', ((e) => {
      e.preventDefault()
      //这里需要限定速度，即dx最大值，不然横向移动过于迅速，会降低游戏性
      //最后根据游戏效果再来微调, to do

      var dX = e.touches[0].clientX - this.touchedX + this.body[0].x

      if (dX < RADIUM){
        dX = RADIUM
      } else if (dX > SCREEN_WIDTH - RADIUM){
        dX = SCREEN_WIDTH - RADIUM
      }
      this.body[0].x = dX
      this.touchedX = e.touches[0].clientX
      //碰撞检测，to do

    }).bind(this))
  }
}