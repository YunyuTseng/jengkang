/** 產品 */
export interface ProductItem {
  /** ID */
  id: string
  /** 分類 ID */
  categoryId: string
  /** 名稱 */
  title: string
  /** 圖片 */
  img: string
  /** 產品介紹連結 */
  link: string
  /** 排序 */
  sort: number
  /** 類型 */
  type: string
  /** 產品內容 */
  content?: {
    index: number
    title: string
    option: { content: string }[]
  }[]
}
