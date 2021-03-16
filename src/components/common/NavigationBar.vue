<template>
<div id="NavigationBar">
	<router-link tag="li" to="/home">Courier</router-link>
	<router-link tag="li" to="/home/register">Register</router-link>
</div>
</template>

<script>
export default {
	components: {},
	props: {},
	data() {
		return {

		}
	},
	computed: {},
	methods: {},
	created() {},
	mounted() {},
}
</script>

<style lang='scss' scoped>
#NavigationBar {
    display: flex;
    justify-content: center;
    list-style-type: none;
    li {
        margin: 1em;
        cursor: pointer;
        font-size: 1.5em;
    }
}
</style>
