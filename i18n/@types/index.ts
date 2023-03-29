export interface Lang {
  /** Header */
  header: {
    /** 首頁 */
    home: string
    /** 產品介紹 */
    products: string
    /** 公司介紹 */
    company: string
    /** 原廠廠商 */
    cooperation: string
    /** 案例經驗 */
    customer: string
    /** 聯絡我們 */
    contactUs: string
  }
  /** 公司介紹 */
  company: {
    /** 標題 */
    title: string
    /** 公司名稱 */
    name: string
    /** 介紹內容 */
    content: string
  }
  /** 原廠廠商 */
  cooperation: {
    /** 標題 */
    title: string
    /** 公司名稱 */
    name: string
    /** 介紹內容 */
    content: string
  }
  /** 案例經驗 */
  customer: {
    /** 標題 */
    title: string
  }
  /** 聯絡我們 */
  contactUs: {
    /** 標題 */
    title: string
  }
}
