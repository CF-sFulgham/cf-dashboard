<script>
import Content from '@viewLayouts/content.vue'
import Layout from '@viewLayouts/main.vue'
import { rosterMethods } from '@state/helper/roster'

export default {
  page: {
    title: 'Roster',
    meta: [
      {
        name: 'description',
        content: 'Select a class from the list of available classes.',
      },
    ],
  },
  components: {
    Content,
    Layout,
  },
  data() {
    return {
      roster: [],
    }
  },
  computed: {
    routePath() {
      console.log(this.$route)
      return this.$route.name
    },
  },
  created() {
    this.fetchRoster({ username: 'steven' }).then((response) => {
      console.log(response)
      this.roster = response
    })
  },
  methods: {
    ...rosterMethods,
  },
}
</script>

<template>
  <Layout>
    <Content>
      <aside v-for="(item, key) in roster" :key="key">
        <div class="dash-headline mg-t-20">
          <div class="dash-headline-full">
            <div class="dash-headline-item-one">
              <div class="dash-item-overlay">
                <h1>
                  <span class="tx-48">{{ item.courseTitle }}</span>
                </h1>
                <h2>{{ item.startDate }} - {{ item.endDate }}</h2>
                <div class="earning-label">
                  <p>
                    <span>Start Time: </span>{{ item.startTime }}
                  </p>
                </div>
                <!-- dash-content -->
              </div>
              <!-- col-3 -->
            </div>
          </div>
          <!-- row -->
        </div>
      </aside>
    </Content>
  </Layout>
</template>
