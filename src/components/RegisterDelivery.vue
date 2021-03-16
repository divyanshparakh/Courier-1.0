<template>
<div id="container">
	<p id="title">Register Delivery Man</p>
	<div id="card">
		<li><input required type="text" v-model="name" name="name" placeholder="Delivery Man Name" /></li>
		<li><input required type="date" v-model="dob" name="date" placeholder="DOB" title="DOB" /></li>
		<li><input required type="email" v-model="email" name="email" placeholder="Email" /></li>
		<li><input required type="text" v-model="mobile" name="mobilenumber" placeholder="Moblie Number" maxlength="10" /></li>
		<li><input required type="password" v-model="password" name="password" placeholder="Password" /></li>
		<li><button @click="register" type="submit">Register</button></li>
	</div>
</div>
</template>

<script>
export default {
	components: {},
	props: {},
	data() {
		return {
			name: '',
			dob: '',
			email: '',
			mobile: '',
			password: '',
		}
	},
	computed: {},
	methods: {
		register() {
			this.axios.post( 'http://localhost:3000/adddeliveryman', {
					name: this.name,
					dob: this.dob,
					email: this.email,
					mobile: this.mobile,
					password: this.password
				} )
				.then(
					( response ) => {
						console.log( response );
					},
					( error ) => {
						alert( error.response.data.message );
						return error;
					}
				)
		}
	},
	created() {},
	mounted() {},
}
</script>

<style lang='scss' scoped>
#container {
    background: #10163A;
    margin: 2em;
    padding: 5em;
    font-size: 1.1em;
    list-style-type: none;
    font-weight: bolder;
    color: #04ffbc;
    #title {
        font-size: 2em;
        margin-bottom: 1em;
    }
    #card {
        display: flex;
        align-items: baseline;
        flex-flow: column wrap;
        font-weight: bolder;
        color: #04ffbc;
        li {
            padding: 1em;
            margin: 0.2em;
            input {
                color: #04ffbc;
                font-weight: bold;
                padding: 0.4em;
                background-image: linear-gradient(to right, #7165ed, #6b60e1, #645ad5, #5e55ca, #5850be);
                width: 10em;
                border: 0.3em solid #262c47;
            }
        }
    }
}
@media screen and (min-width: 1080px) {
    #container {
        #card {
            align-items: center;
        }
    }
}
</style>
