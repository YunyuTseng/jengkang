<template>
  <div class="product-item" :class="theme" v-on="$listeners">
    <!-- 產品圖片 -->
    <div class="product-container">
      <div class="image-cover">
        <AppLazyload :data-src="imgUrl" width="100%" :class="lazyloadClass" />
      </div>
      <div class="card product-item-card">
        <!-- 產品名稱 -->
        <div class="card-body">
          <p class="card-text">
            {{ data.title }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, mixins, Prop } from 'nuxt-property-decorator'
import { ProductItem } from '~/@types'
import AppLazyload from '~/components/AppLazyload.vue'
import { AutoResizeElementHeight } from '~/mixins'

@Component({
  name: 'ProductCard',
  // eslint-disable-next-line no-undef
  components: {
    AppLazyload,
  },
})
export default class extends mixins(AutoResizeElementHeight) {
  /** 產品項目傳入 input */
  @Prop({ type: Object, required: true })
  data!: ProductItem

  @Prop({ type: String, default: '' })
  lazyloadClass!: string

  @Prop({ type: String, default: 'products/product-1-1.jpg' })
  fallbackImg!: string

  @Prop({ type: String, default: 'light' })
  theme!: 'light' | 'dark'

  autoResizeSelector = '.product-item .card-text'

  get imgUrl() {
    try {
      return require(`~/assets/img/${this.data.img}`)
    } catch (e) {
      return require(`~/assets/img/${this.fallbackImg}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.product-item {
  cursor: pointer;

  // 使用陰影
  &.enable-shadow .product-container {
    transition-duration: 0.5s;
    box-shadow: 2px 2px 5px 0px rgba(209, 209, 209, 1);
    &:hover {
      box-shadow: 5px 5px 5px 0px rgba(199, 199, 199, 1);
    }
  }

  // 使用響應式
  &.enable-responsive .card-body {
    position: static;
  }

  .image-cover {
    width: 100%;
    overflow: hidden;

    img {
      transition: all 0.5s;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  .product-item-card {
    position: relative;
    border: none;
  }

  .card-body {
    width: 100%;
    min-height: 40px;
    background: #fff;
    opacity: 0.8;
    position: absolute;
    bottom: 0;
  }

  .card-text {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #000;
    font-weight: bold;
    margin: 0;
    min-height: 20px;
  }

  &.dark {
    .card-body {
      background: #000;
      opacity: 0.6;
    }

    .card-text {
      color: #fff;
    }
  }
}

@media (min-width: 768px) {
  .product-item.enable-responsive .card-body {
    position: absolute !important;
  }
}
</style>
