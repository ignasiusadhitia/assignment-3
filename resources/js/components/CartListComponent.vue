<template>
    <cart-item-component
        v-for="product in cart"
        :key="product.id"
        :product="product"
    />
</template>

<script>
export default {
    props: {
        cart: {
            type: Array,
            required: true,
        },
    },
};
</script>
