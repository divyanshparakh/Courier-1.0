<template>
<div id="app">
	<router-view />
</div>
</template>

<style lang="scss">
* {
    margin: 0;
}
#app {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    font-family: Montserrat,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background: #262c47;
    color: #ffffff;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #04ffbc;
        }
    }
}
</style>
