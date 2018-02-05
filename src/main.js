import Bowl from './sprits/bowl'
import Snake from './sprits/snake'
import Pool from '../src/base/pool.js'

let ctx = canvas.getContext('2d')

/**
 * 游戏主函数
 */
export default class Main {
  constructor() {
    // 维护当前requestAnimationFrame的id
    this.aniId = 0
    this.pool = new Pool()
    this.bowl = new Bowl()
    this.snake = new Snake(this.pool)

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

  /**
   * canvas重绘函数
   * 每一帧重新绘制所有的需要展示的元素
   */
  render() {
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    this.bowl.drawToCanvas(ctx)
    //位置计算，后面要移走，放在这里只是测试用
    this.snake.body[0].y -= this.snake.speed
    for (var i = 1; i < this.snake.body.length; i++){
      this.snake.body[i].move(this.snake.body[i-1])
    }
    

    this.snake.drawToCanvas(ctx)
  }

  // 实现游戏帧循环
  loop() {
    // 清除上一局的动画
    window.cancelAnimationFrame(this.aniId);
    this.render()

    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )
  }
}
