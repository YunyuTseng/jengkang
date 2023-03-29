<template>
  <div class="row g-0 product">
    <ProductCard
      v-for="item in list"
      :key="item.id"
      class="col-6 col-md-4 col-lg-2"
      theme="dark"
      :data="item"
      fallback-img="001.jpg"
      @click="clickHandler(item.id)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ProductCard from './ProductCard.vue'
import { productCategoryList, productList } from '~/data'

@Component({
  // eslint-disable-next-line no-undef
  components: {
    ProductCard,
  },
  name: 'ProductCategorySection',
})
export default class extends Vue {
  get pathWithoutHash() {
    const { fullPath, hash } = this.$route

    return hash ? fullPath.replace(hash, '') : fullPath
  }

  clickHandler(id: string) {
    // 移除原本 URL 的 hash 後再跳轉，避免從產品介紹返回首頁時畫面滾到其他區域
    this.$router.replace(this.pathWithoutHash)

    setTimeout(() => {
      this.$router.push({
        path: 'category',
        query: { id },
      })
    })
  }

  /** 產品種類列表 */
  get list() {
    // 過濾所有產品都沒有介紹頁面的種類列表，只取前4個種類
    return productCategoryList.filter(
      ({ id }) =>
        !!productList.some(item => item.categoryId === id && !!item.link)
    )
    // .slice(0, 4)
  }
}
</script>

<style lang="scss" scoped>
img {
  height: 270px;
}

.product {
  width: 100%;
  margin: 0;
  padding-bottom: 60px;
}
</style>
