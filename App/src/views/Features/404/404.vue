<script>
import Layout from "@viewLayouts/main.vue";
import { AuthComputed, AuthMethods } from "../../../store/helper/auth";

export default {
  page: {
    title: "404",
    meta: [{ name: "description", content: "404" }],
  },
  components: { Layout },
  props: {
    resource: {
      type: String,
      default: "",
    },
  },
  computed: {
    ...AuthComputed,
  },
  methods: {
    ...AuthMethods,
  },
};
</script>

<template>
  <Layout>
    <h1 :class="$style.title">
      404
      <template v-if="resource">{{ resource }}</template>
      Not Found
    </h1>
  </Layout>
</template>

<style lang="scss" module>
</style>
