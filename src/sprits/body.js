const RADIUM = 15
const DISTANSE = 35
export default class Body {
  constructor() {
    this.x = 0;
    this.y - 0;
  }

  move(pre) {
    //to do,根据前一个body的位置，和现在的位置决定移动后的位置
    var d = Math.sqrt(Math.pow(this.x-pre.x,2) + Math.pow(this.y - pre.y,2))
    if (d < DISTANSE){
      return
    }
    this.x = pre.x + (this.x - pre.x) * DISTANSE / d
    this.y = pre.y + (this.y - pre.y) * DISTANSE / d
  }
  drawToCanvas(ctx){
    ctx.fillStyle = 'yellow'
    ctx.beginPath()
    ctx.arc(this.x, this.y, RADIUM, 0, 2 * Math.PI)
    ctx.fill()
  }
}