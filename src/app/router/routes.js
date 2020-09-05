import { Home, ContentPaste, Notifications, AccountCircle } from '@material-ui/icons';
import Dashboard from '../pages/Dashboard';
import {PrivateAdminRoute} from '../pages/PrivateAdminRoute'
import { OrderContainer } from '../components/Admin/OrderContainer'
import { PaymentContainer } from '../components/Admin/PaymentContainer'
import { ReviewContainer } from '../components/Admin/ReviewContainer'
import { ProductContainer } from '../components/Admin/ProductContainer'
import { UserContainer } from '../components/Admin/UserContainer'
import { DashboardContainer } from '../components/Admin/DashboardContainer'


const Routes = [
  {
    path: '/shuklamasala/orders',
    sidebarName: 'Profile',
    navbarName: 'Profile',
    icon: AccountCircle,
    component: OrderContainer
  },
  {
    path: '/shuklamasala/products',
    sidebarName: 'Profile',
    navbarName: 'Profile',
    icon: AccountCircle,
    component: ProductContainer
  },
  {
    path: '/shuklamasala/users',
    sidebarName: 'Profile',
    navbarName: 'Profile',
    icon: AccountCircle,
    component: UserContainer
  },
  {
    path: '/shuklamasala/payments',
    sidebarName: 'Profile',
    navbarName: 'Profile',
    icon: AccountCircle,
    component: PaymentContainer
  },
  {
    path: '/shuklamasala/reviews',
    sidebarName: 'Profile',
    navbarName: 'Profile',
    icon: AccountCircle,
    component: ReviewContainer
  },
  {
    path: '/shuklamasala/dashboard',
    sidebarName: 'Home',
    navbarName: 'Home',
    icon: Home,
    component: Dashboard
  },
];

export default Routes;