import { CustomerType } from '~/enums'
/** 客戶 */
export interface CustomerItem {
  /** 客戶名稱 */
  name: string
  /** 客戶類型 */
  type: CustomerType
  /** 客戶 Logo */
  logo: string
}
