<template>
  <div class="container">
    <AppBreadcrumb class="my-4" :list="breadcrumbList" />
    <div class="row g-3">
      <ProductCard
        v-for="product in productList"
        :key="product.id"
        class="col-6 col-md-4 col-xl-3 enable-shadow enable-responsive"
        :lazyload-class="imageClass"
        :data="product"
        @click="clickHandler(product.link)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'
import { BreadcrumbItem, I18nKeyPath } from '~/@types'
import { AppBreadcrumb, ProductCard } from '~/components'
import { productCategoryList, productList } from '~/data'
import { AutoResizeElementHeight } from '~/mixins'

@Component({
  // eslint-disable-next-line no-undef
  components: {
    AppBreadcrumb,
    ProductCard,
  },
  name: 'CategoryPage',
})
export default class extends mixins(AutoResizeElementHeight) {
  autoResizeSelector = '#categoryPage .card-text'

  /** 產品分類列表 */
  productCategoryList = productCategoryList

  get breadcrumbList(): BreadcrumbItem[] {
    const title: I18nKeyPath = 'header.products'

    return [
      { title: this.$tc(title), to: '/#productCategoryAnchor' },
      {
        title: this.title,
      },
    ]
  }

  /** 當前頁面產品分類 */
  get category() {
    return this.productCategoryList.find(({ id }) => id === this.categoryId)
  }

  /** 當前頁面產品 ID */
  get categoryId() {
    return this.$route.query.id
  }

  get imageClass() {
    return this.categoryId === '2' ? 'mh-small' : 'mh-base'
  }

  get title() {
    return this.category ? this.category.title : ''
  }

  /** 當前頁面產品列表 */
  get productList() {
    return productList.filter(
      ({ categoryId, link }) => categoryId === this.category?.id && !!link
    )
  }

  clickHandler(link: string) {
    window.open(link)
  }
}
</script>
