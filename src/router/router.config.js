import Main from '../components/main/main';
import About from '../components/main/about';
import UserManage from '../components/main/userManage';
import RoleManage from '../components/main/roleManage';
import ProductManage from '../components/main/productManage';
import ProhibitBondPool from '../components/main/prohibitBondPool';
import TradeBondPool from '../components/main/tradeBondPool';
import AllocationBondPool from '../components/main/allocationBondPool';
import ApprovalBondPool from '../components/main/approvalBondPool';
import QueryAdvice from '../components/main/queryAdvice';
import ApprovalAdvice from '../components/main/approvalAdvice';
import EntryAdvice from '../components/main/entryAdvice';

const routes = [
	{
        path: '/about',
        component: About,
        exact: true,
    },{
        path: '/userManage',
        component: UserManage,
        exact: true,
    },{
        path: '/roleManage',
        component: RoleManage,
        exact: true,
    },{
        path: '/productManage',
        component: ProductManage,
        exact: true,
    },{
        path: '/prohibitBondPool',
        component: ProhibitBondPool,
        exact: true,
    },{
        path: '/tradeBondPool',
        component: TradeBondPool,
        exact: true,
    },{
        path: '/allocationBondPool',
        component: AllocationBondPool,
        exact: true,
    },{
        path: '/approvalBondPool',
        component: ApprovalBondPool,
        exact: true,
    },{
        path: '/entryAdvice',
        component: EntryAdvice,
        exact: true,
    },{
        path: '/approvalAdvice',
        component: ApprovalAdvice,
        exact: true,
    },{
        path: '/queryAdvice',
        component: QueryAdvice,
        exact: true,
    },{
		component: Main
	}
]

export default routes;