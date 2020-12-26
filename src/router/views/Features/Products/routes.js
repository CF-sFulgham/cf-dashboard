import store from '@/src/state/store'
import { lazyLoadView } from '@utils/routing'

const routesProductsPage = {
  path: '/products',
  name: 'products',
  component: () => lazyLoadView(import('@viewFeatures/Products/products.vue')),

}

export { routesProductsPage }
