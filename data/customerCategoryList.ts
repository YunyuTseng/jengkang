import { CustomerCategory } from './../@types/CustomerCategory'
import { CustomerType } from '~/enums'

/** 客戶類型列表 */
export const customerCategoryList: CustomerCategory[] = [
  {
    id: CustomerType.BULK_CHEMICAL,
    name: 'Bulk Chemical',
  },
  {
    id: CustomerType.IC,
    name: 'IC',
  },
  // {
  //   id: CustomerType.BULK_CHEMICAL,
  //   name: 'Bulk Chemical',
  // },
  {
    id: CustomerType.EQUIPMENT,
    name: '設備',
  },
  {
    id: CustomerType.TFT_LCD,
    name: 'TFT-LCD',
  },
]
