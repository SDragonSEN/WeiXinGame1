import Pool from '../base/pool.js'
import Body from './body.js'

const screenWidth = window.innerWidth
const screenHeight = window.innerHeight
const Y_CONST = screenHeight*3/4

export default class Snake {
  constructor(pool) {
    //速度
    this.speed = 2
    //初始化蛇身，长度为4节，第0节为头
    this.body = [pool.getItemByClass("body", Body), pool.getItemByClass("body", Body), pool.getItemByClass("body", Body), pool.getItemByClass("body", Body)]
    for (var i = 0; i < this.body.length; i++){
      this.body[i].x = screenWidth / 2;
      this.body[i].y = screenHeight * 3 / 4;
    }
    this.length = 4
  }
  drawToCanvas(ctx){
    for (var i = this.body.length - 1; i >= 0 ; i--) {
      this.body[i].drawToCanvas(ctx)
    } 
    if (this.body.length >= 1){
     //to do, 把长度画上
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