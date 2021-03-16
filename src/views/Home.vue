<template>
<div id="home">
	<SideBar id="SideBar" v-if="addBox"></SideBar>
	<div id="container">
		<TopNav>
			<img v-if="addBox" @click="addBoxs" width="50px" src="@/assets/outline_fullscreen_white_48dp.png" alt="">
			<img v-else @click="addBoxs" width="50px" src="@/assets/outline_fullscreen_exit_white_48dp.png" alt="">
			<img src="@/assets/outline_search_white_48dp.png" alt="">
			<img src="@/assets/outline_outlined_flag_white_48dp.png" alt="">
			<img src="@/assets/outline_textsms_white_48dp.png" alt="">
			{{ name }}
			<img src="@/assets/outline_notifications_none_white_48dp.png" alt="">
		</TopNav>
		<NavigationBar />
		<div id="Slider">
			<router-view></router-view>
		</div>
	</div>
</div>
</template>

<script>
import SideBar from "@/components/common/SideBar.vue";
import TopNav from "@/components/common/TopNav.vue";
// import CourierInfoCard from "@/components/CourierInfoCard.vue";
// import RegisterDelivery from "@/components/RegisterDelivery.vue";
import NavigationBar from "@/components/common/NavigationBar.vue";

export default {
	data() {
		return {
			name: null,
			addBox: 'true',
		}
	},
	components: {
		SideBar,
		TopNav,
		NavigationBar,
	},
	methods: {
		addBoxs() {
			this.addBox = !this.addBox;
		}
	},
};
</script>
<style media="screen">
#home {
	display: flex;
	flex-flow: row nowrap;
	min-height: 100vh;

	#container {
		display: flow-root;
		flex: 10;
		height: 100vh;

		#Slider {
			background: white;
		}
	}
}

@media screen and (min-width: 1080px) {}
</style>
