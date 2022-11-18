import { INavigation } from './navigation.Interface';
import DashboardView from '../views/DashboardView/DashboardView';
import ProfileView from '../views/ProfileView/ProfileView';
import CRUDIncomeOrExpanseView from '../views/CRUDIncomeOrExpanseView/CRUDIncomeOrExpanseView';
import ConnectExpansAndIncomeView from '../views/ConnectExpansAndIncomeView/ConnectExpansAndIncomeView';

const mainNavigation: INavigation[] = [
  {
    path: '/',
    title: 'Dashboard',
    nested: [],
    component: DashboardView,
  },
  {
    path: '/Profile',
    title: 'Profile',
    nested: [],
    component: ProfileView,
  },
  {
    path: '/CRUD',
    title: 'CRUD',
    nested: [],
    component: CRUDIncomeOrExpanseView,
  },
  {
    path: '/Connect',
    title: 'Connect',
    nested: [],
    component: ConnectExpansAndIncomeView,
  },
];

export default mainNavigation;
