import { CustomerType } from '~/enums'
/** 客戶類型 */
export interface CustomerCategory {
  /** ID */
  id: CustomerType
  /** 名稱 */
  name: string
}
