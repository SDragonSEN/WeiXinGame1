import Pool from '../base/pool.js'
import Body from './body.js'

//常量重复定义了，这么写不合理
const RADIUM = 15
const DISTANSE = 35
const SCREEN_WIDTH = window.innerWidth

export default class Snake {
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
    for (var i = 1; i < this.body.length; i++) {
      this.body[i].move(this.body[i - 1])
    }
  }
  move(){
    this.moveHeader()
    this.moveBody()
  }
  offsetY(oY){
    for (var i = 0; i < this.body.length; i++) {
      this.body[i].y += oY
    }
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
  initEvent(){
    //手指按下
    canvas.addEventListener('touchstart', ((e) => {
      e.preventDefault()
      this.touchedX = e.touches[0].clientX
      console.log("touchstart", this.touchedX)
    }).bind(this))

    //手指移动 
    canvas.addEventListener('touchmove', ((e) => {
      e.preventDefault()

      var dX = e.touches[0].clientX - this.touchedX + this.body[0].x
      if (dX < RADIUM){
        dX = RADIUM
      } else if (dX > SCREEN_WIDTH - RADIUM){
        dX = SCREEN_WIDTH - RADIUM
      }
      this.body[0].x = dX
      this.touchedX = e.touches[0].clientX
    }).bind(this))
  }
}