const routes404 = {
  path: '/404',
  name: '404',
  component: require('@viewFeatures/404/404.vue').default,
  // Allows props to be passed to the 404 page through route
  // params, such as `resource` to define what wasn't found.
  props: true,
}

export { routes404 }