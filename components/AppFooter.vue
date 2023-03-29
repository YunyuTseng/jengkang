<template>
  <footer class="text-muted py-4">
    <div class="word-style text-center">
      Copyrights (C) 2019 JENG-KANG COMPANY.INC. All Rights Reserved.
    </div>
    <AppGotop />
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { AppGotop } from '~/components'

@Component({
  // eslint-disable-next-line no-undef
  components: {
    AppGotop,
  },
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
// scoped → 只單純影響這個components
footer {
  background-color: #333;
}

.word-style {
  color: #fff;
}

.goTopButton {
  color: #333;

  &:focus {
    outline: none;
  }
}

.footer {
  color: #fff;
  justify-content: center;
  padding-bottom: 20px;
  .footer_content {
    padding: 0 20px 0 20px;
    flex-direction: column;

    a {
      color: #fff;
      text-decoration: none;
      font-size: 1.25rem;

      &:hover {
        color: #999;
      }
    }
  }

  .icon {
    color: #fff;
  }

  .icon-map {
    padding: 0 5px 0 2px;
  }

  .icon-common {
    padding: 0 5px 0 0;
  }
}
</style>
