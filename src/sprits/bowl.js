//import Sprite from '../base/sprite'
//import Bullet   from './bullet'
//import DataBus  from '../databus'

const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

// 玩家相关常量设置
const PLAYER_RADIUM = 20

//let databus = new DataBus()

export default class Bowl {
  constructor() {
    // 玩家默认处于屏幕底部居中位置
    this.x = screenWidth / 2
    this.y = screenHeight / 2
    this.xs = 2
    this.ys = 2
  }
  drawToCanvas(ctx) {
    ctx.fillStyle = 'red'
    if (this.x - PLAYER_RADIUM < 0)
    {
      this.xs = 2;
    } else if (this.x + PLAYER_RADIUM > screenWidth){
      this.xs = -2;
    }
    if (this.y - PLAYER_RADIUM < 0) {
      this.ys = 2;
    } else if (this.y + PLAYER_RADIUM > screenHeight) {
      this.ys = -2;
    }
    ctx.beginPath()
    this.x += this.xs
    this.y += this.ys
    ctx.arc(this.x, this.y, PLAYER_RADIUM, 0, 2 * Math.PI)
    ctx.fill()
  }
}
