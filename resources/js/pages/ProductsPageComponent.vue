<template>
    <products-list-component :products="products" />
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters({
            products: "getProducts",
            cart: "getCart",
            totalCartCount: "getTotalCartCount",
        }),
    },
    methods: {
        addToCartHandler(product) {
            this.$store.dispatch("addToCart", product);
        },
        loadProducts() {
            this.$store.dispatch("setProducts");
        },
    },
    mounted() {
        this.loadProducts();
    },
};
</script>

<style></style>
