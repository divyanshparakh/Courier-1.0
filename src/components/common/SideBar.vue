<template>
<div id="SideBar">
	<Brand />
	<div id="card">
		<div v-for="i in 6" :key="i" id="row">
			{{i}}
			<img src="@/assets/arrow_forward_ios-24px.svg" alt="">
		</div>
	</div>
</div>
</template>

<script>
import Brand from '@/components/common/Brand.vue';

export default {
	components: {
		Brand,
	},
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
#SideBar {
    position: sticky;
    top: 1vh;
    left: 0;
    display: flow-root;
    height: 96vh;
    min-width: 15%;
    padding: 1vh;
    margin: 1vh;
    background-color: #10163A;
    overflow: hidden;
    #card {
        display: flex;
        flex-flow: column;
        align-items: stretch;
        font-size: 5vh;
        #row {
            border: 0.5vh solid green;
            padding: 0.5vh;
            margin: 1vh;
            &:hover {
                transform: translateX(0.3em);
                transition: transform 0.5s;
                cursor: pointer;
            }
        }
    }
}
</style>
