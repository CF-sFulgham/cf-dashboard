<script>
// Allows stubbing BaseLink in unit tests
const BaseLink = 'BaseLink'

export default {

  functional: true,
  props: {
    routes: {
      type: Array,
      required: true,
    },
  },

  render(h, { props, $style = {} }) {
    function getRouteTitle(route) {
      return typeof route.title === 'function' ? route.title() : route.title
    }

    return props.routes.map((route) => (
      <BaseLink
        tag='li'
        key={route.name}
        to={route}
        class='breadcrumb-item'
        exact-active-class={$style.active}
      >
        <a>{getRouteTitle(route)}</a>
      </BaseLink>
    ))
  },
}
</script>
