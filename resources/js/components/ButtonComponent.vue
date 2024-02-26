<template>
    <button @click="onClickHandler">{{ text }}</button>
</template>

<script>
export default {
    emits: ["emit-click"],
    props: {
        text: {
            type: String,
            default: "",
        },
    },
    methods: {
        onClickHandler() {
            this.$emit("emit-click");
        },
    },
};
</script>

<style></style>
