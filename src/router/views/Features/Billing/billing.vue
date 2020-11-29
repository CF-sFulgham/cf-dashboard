<script>
import Content from '@viewLayouts/Content/content.vue'
import DetailsLayout from '@viewLayouts/Details/details.vue'

export default {
  page: {
    title: 'Billing',
    meta: [{ name: 'description', content: 'Home page container.' }],
  },
  components: { 
      Content,
      DetailsLayout,
  },
}
</script>

<template>
  <DetailsLayout>
      <Content>
        <div class="dash-item-overlay">
            <h1>0.0345 <span class="tx-24">BTC</span></h1>
            <p class="earning-label">Bitcoin Earnings</p>
            <p class="earning-desc">Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus...</p>
            <a href="#" class="statement-link">View Statements <i class="fa fa-angle-right mg-l-5"></i></a>
        </div>
      </Content>
  </DetailsLayout>
</template>
