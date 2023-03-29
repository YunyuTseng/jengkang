<template>
  <!-- eslint-disable vue/no-use-v-if-with-v-for -->
  <div>
    <CustomerTabs :active-id="activeId" @change="tabsChangeHandler" />
    <div
      class="mt-5"
      :style="{
        height: `${height}px`,
        transition: 'all 0.5s',
        overflow: 'hidden',
      }"
    >
      <Transition name="slide-fade" mode="out-in" @enter="onSlideEnter">
        <CustomerList
          v-for="category in categoryList"
          v-if="category.id === activeId"
          :ref="`customer-list-${category.id}`"
          :key="category.id"
          class="customer-list"
          :list="getCustomerListByCategory(category.id)"
          :min-height="height"
        />
      </Transition>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CustomerList from './CustomerList.vue'
import CustomerTabs from './CustomerTabs.vue'
import { CustomerCategory, CustomerItem } from '~/@types'
import { customerCategoryList, customerList } from '~/data'
import { CustomerType } from '~/enums'

@Component({
  // eslint-disable-next-line no-undef
  components: {
    CustomerList,
    CustomerTabs,
  },
  name: 'CustomerSection',
})
export default class extends Vue {
  activeId = customerCategoryList[0].id

  categoryList: CustomerCategory[] = customerCategoryList
  list: CustomerItem[] = customerList

  height = 0

  mounted() {
    this.getHeight()
    window.addEventListener('resize', this.getHeight)
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.getHeight)
  }

  getHeight() {
    setTimeout(() => {
      const eles: HTMLElement | null = document.querySelector('.customer-list')

      if (eles) {
        eles.style.minHeight = '0'
      }

      this.height = eles?.clientHeight || 0
    }, 500)
  }

  getCustomerListByCategory(categoryId: CustomerType) {
    return this.list.filter(({ type }) => type === categoryId)
  }

  tabsChangeHandler(id: CustomerType) {
    this.activeId = id
  }

  onSlideEnter() {
    setTimeout(() => {
      const eles: HTMLElement | null = document.querySelector('.customer-list')
      const clientHeight = eles?.clientHeight

      if (clientHeight && this.height < clientHeight) {
        this.height = clientHeight
      }
    }, 100)
  }
}
</script>

<style lang="scss">
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.5s ease-in;
}

.slide-fade-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}

.slide-fade-enter {
  transform: translateX(100px);
  opacity: 0;
}

.customer-item {
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: center;

  &--logo {
    max-width: 100%;
    max-height: 70px;
  }
}
</style>
