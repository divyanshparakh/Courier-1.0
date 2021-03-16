<template>
<router-link id="Brand" to="/">
	<img draggable="false" class="logo" :class="{'isLogo': big}" alt="logo" src="@/assets/logo.jpg" />
	<p id="title">Courierify</p>
</router-link>
</template>

<script>
export default {
	components: {},
	props: [ 'big' ],
	data() {
		return {}
	},
	computed: {},
	methods: {},
	created() {},
	mounted() {},
}
</script>

<style lang='scss' scoped>
#Brand {
    text-decoration: none;
    color: #5D64F0;
    &:active,
    &:focus {
        border: none;
        text-decoration: none;
        margin: none;
    }
    .logo {
        margin-top: 4vh;
        border-radius: 10em;
        height: 6em;
        border: 1em white dashed;
    }
    .isLogo {
        height: 25vh;
    }
    #title {
        font-size: 4vh;
        font-weight: bolder;
        margin: 2vh;
    }
}
</style>
