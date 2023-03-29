import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class AutoResizeElementHeight extends Vue {
  /** 要自動調整高度的元素選擇器 */
  autoResizeSelector!: string

  mounted() {
    this.setElementHeight()
    window.addEventListener('resize', this.setElementHeight)
  }

  destroyed() {
    window.removeEventListener('resize', this.setElementHeight)
  }

  /** 設定元素高度 */
  private setElementHeight() {
    if (!this.autoResizeSelector) {
      console.error('Please set autoResizeSelector value!')
    }

    const textList: HTMLElement[] = Array.from(
      document.querySelectorAll(this.autoResizeSelector)
    )

    textList.forEach(ele => {
      ele.style.minHeight = '0'
    })

    const minHeight = textList.reduce(
      (a, b) => (a > b.clientHeight ? a : b.clientHeight),
      0
    )

    textList.forEach(ele => {
      ele.style.minHeight = `${minHeight}px`
    })
  }
}
