<template>
    <router-link to="/cart">
        <div class="cart-icon-container">
            <div class="mx-auto position-relative cart-icon-wrapper">
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        class="bi bi-cart2"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
                        />
                    </svg>
                </div>
                <span
                    v-if="totalCartCount"
                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger border border-2 border-white"
                >
                    {{ totalCartCount }}
                </span>
                <span v-else></span>
            </div>
        </div>
    </router-link>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters({
            totalCartCount: "getTotalCartCount",
        }),
    },
};
</script>

<style scoped>
.cart-icon-container {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    cursor: pointer;
}
.cart-icon-container:hover {
    background: #e8e9ea;
    border-radius: 0.375rem;
}
.cart-icon-wrapper {
    width: 26px;
    height: 26px;
}
</style>
