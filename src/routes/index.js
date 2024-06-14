import HomePage from "../pages/HomePage/HomePage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import NotFoundPage
 from "../pages/NotFoundPage/NotFoundPage";
import IntroducePage from "../pages/IntroducePage/IntroducePage";
import StoreSystemPage from "../pages/StoreSystemPage/StoreSystemPage";
import BlogPage from "../pages/BlogPage/BlogPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ReturnPolicyPage from "../pages/PolicyPage/ReturnPolicyPage";
import SalesPolicyPage from "../pages/PolicyPage/SalesPolicyPage";
import DeliveryPolicyPage from "../pages/PolicyPage/DeliveryPolicyPage"
export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true
    },
    {
        path: '/products',
        page: ProductsPage,
        isShowHeader: true
    },
    {
        path: '/blog',
        page: BlogPage,
        isShowHeader: true
    },
    {
        path: '/store',
        page: StoreSystemPage,
        isShowHeader: true
    },
    {
        path: '/introduce',
        page: IntroducePage,
        isShowHeader: true
    },
    {
        path: '/signin',
        page: SignInPage,
        isShowHeader: true
    },
    {
        path: '/signup',
        page: SignUpPage,
        isShowHeader: true
    },
    {
        path: '/returnpolicy',
        page: ReturnPolicyPage,
        isShowHeader: true
    },
    {
        path: '/salespolicy',
        page: SalesPolicyPage,
        isShowHeader: true
    },
    {
        path: '/deliverypolicy',
        page: DeliveryPolicyPage,
        isShowHeader: true
    },

    {
        path: '/*',
        page: NotFoundPage
    }
]