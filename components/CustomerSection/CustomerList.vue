<template>
  <div class="row" :style="{ 'min-height': `${minHeight}px` }">
    <div
      v-for="(customer, index) in list"
      :key="index"
      class="col-4 col-lg-2 customer-item"
    >
      <img
        :src="getLogo(customer.logo)"
        :alt="customer.name"
        class="customer-item--logo"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { CustomerItem } from '~/@types'

@Component({
  name: 'CustomerList',
})
export default class extends Vue {
  /** 客戶列表 */
  @Prop({ type: Array, required: true })
  list!: CustomerItem[]

  /** 最小高度 */
  @Prop({ type: Number, required: true })
  minHeight!: number

  /** 取得 LOGO 圖片路徑 */
  getLogo(img: string) {
    try {
      return require(`~/assets/img/customers/${img}`)
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
