<script>
export default {
  page: {
    title: 'Loading page...',
    meta: [{ name: 'description', content: 'Loading page...' }],
  },
  data() {
    return {
      apiTimeout: 15000, // should come from app config
      interval: null,
      percent: 0
    }
  },
  created() {
    clearInterval(this.interval)
    this.percent = 0
  },
  mounted() {
    this.progressBar()
  },
  methods: {
    progressBar(){
      const _self = this
      this.interval = setInterval(() => {
        _self.percent >= 100 ?
            clearInterval(_self.interval) :
            _self.percent += 10;
      }, 1050);
    }
  }
}
</script>

<template>
  <Transition appear>
    <section class="progress">
      <div class="progress-bar bg-success " :class="'wd-' + percent + 'p'" role="progressbar" :aria-valuenow="percent" aria-valuemin="0" aria-valuemax="100" style="height: 5px"></div>
    </section>
  </Transition>
</template>
