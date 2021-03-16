<template>
<div id="TopNav">
	<div id="rightcard">
		<div id="options">
			<slot></slot>
		</div>
		<img height="40em" src="@/assets/baseline_account_circle_white_48dp.png" alt="">
	</div>
</div>
</template>

<script>
export default {
	components: {},
	props: {},
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
#TopNav {
    position: sticky;
    border-bottom: 15px solid #262c47;
    border-top: 13px solid #262c47;
    top: 0;
    z-index: 100;
    margin: 1em;
    background-color: #7367F0;
    padding: 0.6em;
    min-width: 80.1vw;
    max-width: 99vw;
    #rightcard {
        display: flex;
        justify-content: flex-end;
        flex-flow: row wrap;
        align-items: center;
        #options {
            cursor: pointer;
            display: flex;
            height: 4vw;
            margin-right: 5vh;
        }
    }
}
</style>
