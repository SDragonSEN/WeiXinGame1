import Bowl from './sprits/bowl'

let ctx = canvas.getContext('2d')

/**
 * 游戏主函数
 */
export default class Main {
  constructor() {
    // 维护当前requestAnimationFrame的id
    this.aniId = 0
    this.bowl = new Bowl()

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
