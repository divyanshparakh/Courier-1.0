<template>
<div id="Loginscreen">
	<div id="maincontainer">
		<Brand big=true />
		<div id="container">
			<input required type="email" v-model="email" name="email" placeholder="Email" />
			<input required type="password" v-model="password" name="password" placeholder="Password" />
			<button @click="login" type="button">Login</button>
			<p>Or</p>
			<button @click="goRegister" type="button">Register</button>
		</div>
	</div>
</div>
</template>

<script>
// import jwtDecode from 'jwt-decode';
import Brand from '@/components/common/Brand.vue';

export default {
	components: {
		Brand,
	},
	props: {},
	data() {
		return {
			email: '',
			password: '',
		};
	},
	computed: {},
	methods: {
		goHome() {
			this.$router.push( {
				path: '/home'
			} );
		},
		goRegister() {
			this.$router.push( {
				path: '/register'
			} );
		},
		login() {
			// var headers = {
			//   'Content-Type': 'application/json',
			//   'Authorization': 'JWT fefege...'
			// }
			this.axios.post( 'http://localhost:3000/users/login', {
					email: this.email,
					password: this.password
				}, {
					headers: {
						'Content-Type': 'application/json;charset=UTF-8',
						'Access-Control-Allow-Origin': '*',
						'Accept': 'application/vnd.api+json'
					}
				} )
				.then(
					( response ) => {
						console.log( response );
						this.goHome();
					},
					( error ) => {
						alert( error.response.data.message );
					}
				)
		}
	},
};
</script>

<style lang="scss" scoped>
#Loginscreen {
    display: flex;
    justify-content: center;
    align-items: stretch;
    height: 100vh;
    #maincontainer {
        margin-top: 1em;
        margin-bottom: 1em;
        background: #10163A;
        #container {
            width: 75vw;
            position: relative;
            display: flex;
            align-items: center;
            flex-flow: column nowrap;
            font-weight: bolder;
            input {
                color: white;
                font-weight: bold;
                margin: 1vh;
                padding: 1vh;
                background-image: linear-gradient(to right, #7165ed, #6b60e1, #645ad5, #5e55ca, #5850be);
                width: 30vw;
                border: 0.3em solid #262c47;
            }
            button {
                border-radius: 5vh;
                color: white;
                padding: 5px;
                font-weight: bold;
                margin: 4vh;
                width: 7em;
                font-size: 1em;
                border: 0.2em solid black;
                background-image: linear-gradient(to right, #7165ed, #6b60e1, #645ad5, #5e55ca, #5850be);
                &:focus {
                    border: 0.1em solid white;
                }
            }
        }
    }
}
@media screen and (min-width: 1080px) {
    #Loginscreen {
        #maincontainer {
            height: 96vh;
            #logo {
                height: 200px;
            }
            #title {
                font-size: 35px;
            }
            #container {
                input {
                    width: 300px;
                    &:focus {
                        border: 0.5em white solid;
                    }
                }
                button {}
            }
        }
    }
}
</style>
