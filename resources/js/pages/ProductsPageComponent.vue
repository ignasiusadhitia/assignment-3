<template>
    <!-- <page-layout-component> -->
    <!-- <header-component>
            <logo-component />
            <cart-icon-component
                :count="parseInt(getTotalCartCount())"
                @emit-click="showModalHandler(true)"
            />
        </header-component> -->

    <modal-component
        title="My Cart"
        :cartData="cart"
        v-if="isModalVisible"
        @emit-show-modal="showModalHandler(false)"
    >
        <div class="d-flex justify-content-end my-2">
            <button
                v-if="cart.length"
                @click="clearCartHandler"
                class="btn btn-outline-danger"
            >
                Clear Cart
            </button>
        </div>
        <div>
            <cart-list-component
                :cart="cart"
                @emit-remove-from-cart="removeFromCartHandler"
                @emit-add-to-cart="addToCartHandler"
                @emit-delete-cart-item="deleteCartItemHandler"
                @emit-update-cart-item-count="updateCartItemCountHandler"
            />
        </div>
        <div v-if="cart.length" class="mt-3 d-flex justify-content-end">
            <div>
                <div>
                    Total item:
                    <span class="fw-bold">{{ getTotalCartCount() }}</span>
                </div>
                <div>
                    Total price:
                    <span class="fw-bold">Rp. {{ getTotalCartPrice() }}</span>
                </div>
            </div>
        </div>
        <div v-else class="text-center">
            <h2>Empty cart.</h2>
            <p>Please add item.</p>
        </div>
    </modal-component>

    <products-list-component
        :products="products"
        :get-remaining-stock="getRemainingStock"
        :get-product-count-in-cart="getProductCountInCart"
        @emit-add-to-cart="addToCartHandler"
    />

    <!-- <footer-component /> -->
    <!-- </page-layout-component> -->
</template>

<script>
export default {
    data: function () {
        return {
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
            cart: [],
            isModalVisible: false,
        };
    },
    methods: {
        getProductCountInCart(id) {
            const itemInCart = this.cart.find((item) => item.id === id);
            return itemInCart ? itemInCart.count : 0;
        },

        getRemainingStock(product) {
            return (
                product.stock -
                (this.cart.find((item) => item.id === product.id)?.count || 0)
            );
        },

        getTotalCartCount() {
            return this.cart.reduce((total, item) => total + item.count, 0);
        },

        getTotalCartPrice() {
            return this.cart.reduce(
                (total, item) => total + item.price * item.count,
                0
            );
        },

        addToCartHandler(product) {
            const { id, name, imgUrl, stock, price } = product;
            const existingItem = this.cart.find((item) => item.id === id);

            if (existingItem) {
                if (existingItem.count < stock) {
                    existingItem.count++;
                } else {
                    alert("No more stock available for this product!");
                }
            } else {
                this.cart.push({
                    id,
                    name,
                    imgUrl,
                    price,
                    stock,
                    count: 1,
                });
            }

            this.showModalHandler(true);
        },

        removeFromCartHandler(id) {
            const index = this.cart.findIndex((item) => item.id === id);

            if (index !== -1) {
                this.cart[index].count--;

                if (this.cart[index].count === 0) {
                    this.cart.splice(index, 1);

                    this.showModalHandler(false);
                }
            }
        },

        deleteCartItemHandler(id) {
            const index = this.cart.findIndex((item) => item.id === id);

            this.cart.splice(index, 1);
        },

        updateCartItemCountHandler(product) {
            const index = this.cart.findIndex((item) => item.id === product.id);

            if (index !== -1) {
                let newCount = product.count;

                if (newCount <= 0 || isNaN(newCount)) {
                    alert("You can't add less than 1 for this product.");
                    newCount = 1;
                } else if (newCount > product.stock) {
                    alert(
                        `You can't add more than the available stock (${product.stock}) for this product.`
                    );
                    newCount = product.stock;
                } else {
                    this.cart[index].errorMesage = "";
                }

                this.cart[index].count = newCount;
            }
        },

        clearCartHandler() {
            this.cart = [];
            this.showModalHandler(false);
        },

        showModalHandler(value) {
            this.isModalVisible = value;
        },
    },
};
</script>

<style></style>
