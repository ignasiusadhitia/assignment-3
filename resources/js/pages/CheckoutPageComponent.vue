<template>
    <div
        class="d-flex flex-column justify-content-center text-container text-center"
    >
        <h2>Order Received.</h2>
        <p>
            Hey, thank you for your order.
            <br />
            Now, we are processing your order.
        </p>
    </div>
</template>

<script>
export default {
    methods: {
        redirectPage() {
            setTimeout(() => this.$router.push({ name: "products" }), 3000);
        },
    },
    mounted() {
        this.redirectPage();
    },
};
</script>

<style scoped>
.text-container {
    height: 234px;
}
</style>
