import CartPage from "./pages/CartPageComponent.vue";
import CheckoutPage from "./pages/CheckoutPageComponent.vue";
import ProductsPage from "./pages/ProductsPageComponent.vue";
import NotFoundPage from "./pages/NotFoundPageComponent.vue";
import PageLayout from "./layout/PageLayoutComponent.vue";

export const routes = [
    {
        path: "/",
        name: "home",
        component: PageLayout,
        children: [
            {
                path: "",
                name: "products",
                component: ProductsPage,
            },
            {
                path: "/cart",
                name: "cart",
                component: CartPage,
            },
            {
                path: "/checkout",
                name: "checkout",
                component: CheckoutPage,
            },
            {
                path: "/:pathMatch(.*)*",
                name: "not-found",
                component: NotFoundPage,
            },
        ],
    },
];
