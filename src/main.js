import Bowl from './sprits/bowl'
import Snake from './sprits/snake'
import Pool from '../src/base/pool.js'

let ctx = canvas.getContext('2d')

const screenWidth = window.innerWidth
const screenHeight = window.innerHeight
const Y_CONST = screenHeight * 3 / 4

/**
 * 游戏主函数
 */
export default class Main {
  constructor() {
    // 维护当前requestAnimationFrame的id
    this.aniId = 0
    this.pool = new Pool()
    this.bowl = new Bowl()
    this.snake = new Snake(this.pool, screenWidth / 2, Y_CONST)

    this.restart()
  }

  restart() {

    this.bindLoop = this.loop.bind(this)

    // 清除上一局的动画
    window.cancelAnimationFrame(this.aniId);

    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )
  }
  /*
   * 位置更新
   * snake移动，以及碰撞后的处理
   */
  update() {
    //snake移动
    this.snake.move()
    //碰撞检测,to do

    //将物体在y轴上偏移，让蛇头固定在y轴的起始位置
    if (this.snake.body[0].y < Y_CONST){
      var oY = Y_CONST - this.snake.body[0].y
      this.snake.offsetY(oY)
    }
  }
  /**
   * canvas重绘函数
   * 每一帧重新绘制所有的需要展示的元素
   */
  render() {
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    this.bowl.drawToCanvas(ctx)
    this.snake.drawToCanvas(ctx)
  }

  // 实现游戏帧循环
  loop() {
    // 清除上一局的动画
    window.cancelAnimationFrame(this.aniId);
    this.update()
    this.render()

    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )
  }
}
