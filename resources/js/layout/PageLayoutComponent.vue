<template>
    <div class="cover-container d-flex w-100 p-3 mx-auto flex-column">
        <header-component />

        <router-view></router-view>

        <footer-component />
    </div>
</template>

<style scoped>
.cover-container {
    min-height: 100vh;
    max-width: 42em;
}
</style>
