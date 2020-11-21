<script>
import Content from '@viewLayouts/Content/content.vue'
import ItemsLayout from '@viewLayouts/Items/items.vue'

export default {
  page: {
    title: '404',
    meta: [{ name: 'description', content: '404' }],
  },
  components: {
    ItemsLayout,
    Content,
  },
  props: {
    resource: {
      type: String,
      default: '',
    },
  },
}
</script>

<template>
  <ItemsLayout>
    <Content>
      <div class="page-error-wrapper">
        <div>
          <h1 class="error-title">
            404
          </h1>
          <h5 class="tx-sm-24 tx-normal tx-danger">Oops! The page you were looking for is not accessible.</h5>
          <p class="mg-b-50">You may have mistyped the address or the page may have moved.</p>
          <p class="mg-b-50">
            <router-link to="/" class="btn btn-error">Back to Classes</router-link>
          </p>
        </div>
      </div>
    </Content>
  </ItemsLayout>
</template>

<style lang="scss" scoped>
.title {
  font-weight: 500;
}
h1.error-title {
  margin-bottom: 2rem;
  border: none;
}
h5 {
  padding-top: 1rem;
  border-top: 2px solid #adb5bd;
}
.btn.btn-error {
  color: #fff;
  background-color: #1b84e7;
}
</style>
