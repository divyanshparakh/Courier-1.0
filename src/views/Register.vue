<template>
<div id="Registerscreen">
	<div id="maincontainer">
		<Brand big=true />
		<div id="container">
			<input required type="text" v-model="name" name="name" placeholder="Name">
			<input required type="date" v-model="dob" name="date">
			<input required type="email" v-model="email" name="email" placeholder="email" />
			<input required type="password" v-model="password" name="password" placeholder="Password" />
			<button @click="register" type="submit">Register</button>
			<p>Or</p>
			<button title="Register Now" @click="goLogin" type="button">Login</button>
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
			name: '',
			dob: '',
			email: '',
			password: '',
		};
	},
	computed: {},
	methods: {
		goLogin() {
			this.$router.push( {
				path: '/',
			} );
		},
		register() {
			this.axios.post( 'http://localhost:3000/users/register', {
					name: this.name,
					dob: this.dob,
					email: this.email,
					password: this.password
				} )
				.then(
					( response ) => {
						console.log( response );
						this.goLogin();
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
};
</script>

<style lang="scss" scoped>
#Registerscreen {
    display: flex;
    justify-content: center;
    align-items: stretch;
    height: 100vh;
    #maincontainer {
        background: #10163A;
        margin-top: 1em;
        margin-bottom: 1em;
        #logo {
            margin-top: 4vh;
            border-radius: 10em;
            height: 25vh;
            border: 1em white dashed;
        }
        #title {
            font-size: 4vh;
            font-weight: bolder;
            margin: 2vh;
        }
        #container {
            width: 75vw;
            position: relative;
            display: flex;
            align-items: center;
            flex-flow: column nowrap;
            font-weight: bolder;
            color: #04ffbc;
            input {
                color: #04ffbc;
                font-weight: bold;
                margin: 1vh;
                padding: 1vh;
                background-image: linear-gradient(to right, #7165ed, #6b60e1, #645ad5, #5e55ca, #5850be);
                width: 50vw;
                border: 0.5em solid #262c47;
            }
            button {
                border-radius: 5vh;
                color: #04ffbc;
                padding: 5px;
                font-weight: bold;
                margin: 4vh;
                width: 7em;
                font-size: 1em;
                border: 0.2em solid black;
                background-image: linear-gradient(to right, #7165ed, #6b60e1, #645ad5, #5e55ca, #5850be);
            }
        }
    }
}
@media screen and (min-width: 1080px) {
    #Registerscreen {
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
