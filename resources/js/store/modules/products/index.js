export default {
    state: {
        products: [
            {
                id: 1,
                name: "Nutty Oat Latte",
                imgUrl: "https://static.fore.coffee/product/Nutty_Oat_Latte.jpeg",
                desc: "Espresso dari biji kopi khas nusantara dipadukan susu oat gluten-free dan sensasi nutty dari hazelnut.",
                stock: 38,
                price: 33000,
            },
            {
                id: 2,
                name: "Iced Classic Latte",
                imgUrl: "https://static.fore.coffee/product/classiclatteiced173.jpg",
                desc: "Perpaduan rasa espresso premium dengan saus krim spesial Caféine",
                stock: 27,
                price: 24000,
            },
            {
                id: 3,
                name: "Iced Salted Caramel Mocha",
                imgUrl: "https://static.fore.coffee/product/saltedcarameliced173.jpg",
                desc: "Perpaduan coklat, latte dari house blend Fore, dan gurihnya caramel",
                stock: 43,
                price: 33000,
            },
            {
                id: 4,
                name: "Hot Cappuccino",
                imgUrl: "https://static.fore.coffee/product/cappuccinohot173.jpg",
                desc: "Espresso shots dengan susu hangat dan lapisan foam tebal di atasnya",
                stock: 48,
                price: 29000,
            },
            {
                id: 5,
                name: "Hot Café Latte",
                imgUrl: "https://static.fore.coffee/product/cafelatte173.jpg",
                desc: "Paduan espresso dengan susu sapi pilihan dan sedikit foam di atasnya",
                stock: 32,
                price: 29000,
            },
            {
                id: 6,
                name: "Iced Americano",
                imgUrl: "https://static.fore.coffee/product/americanoiced173.jpg",
                desc: "Espresso shot dalam segelas air dengan menjaga ketebalan rasa kopinya",
                stock: 50,
                price: 21000,
            },
        ],
    },
    getters: {
        getProducts(state) {
            return state.products;
        },
    },
};
