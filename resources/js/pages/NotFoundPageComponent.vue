<template>
    <div
        class="d-flex flex-column justify-content-center text-container text-center"
    >
        <h2>Ooops...</h2>
        <p>Sorry, the page can not be found.</p>
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
