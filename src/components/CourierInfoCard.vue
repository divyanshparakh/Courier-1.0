<template>
<div id="container">
	<p id="title">Courier Info Input</p>
	<table id="table">
		<tr>
			<th>
				<label for="DateOfOrder">Date Of Order </label>
			</th>
			<td>
				<input required v-model="DateOfOrder" type="date" min="2000-01-01" name="DateOfOrder">
			</td>
		</tr>
		<tr>
			<th><label for="NameOfSender">Sender Name </label></th>
			<td><input required v-model="NameOfSender" type="text" name="NameOfSender"></td>
		</tr>
		<tr>
			<th><label for="ContactOfSender">Contact Of Sender </label></th>
			<td><input required v-model="ContactOfSender" type="tel" name="ContactOfSender" maxlength="10"></td>
		</tr>
		<tr>
			<th><label for="EmailOfSender">E-mail Of Sender </label></th>
			<td><input v-model="EmailOfSender" type="email" name="EmailOfSender"></td>
		</tr>
		<tr>
			<th><label for="PincodeOfOrigin">Pincode of Origin </label></th>
			<td><input required v-model="PincodeOfOrigin" type="text" v-on:keydown.tab.enter="getAll" name="PincodeOfOrigin"></td>
		</tr>
		<tr>
			<th><label for="GpoOfOrigin">G.P.O. </label></th>
			<td>
				<select name="GpoOfOrigin" v-model="GpoOfOrigin">
					<option v-for="Gpo in Gpos" :value="Gpo" :key="Gpo"> {{ Gpo }} </option>
				</select>
			</td>
		</tr>
		<tr>
			<th><label for="AreaOfSender">Area Of Sender </label></th>
			<td><input required :v-model="AreaOfSender" type="text" name="AreaOfSender"></td>
		</tr>
		<tr>
			<th><label for="DistrictOfOrigin">District of Origin </label></th>
			<td><input required v-model="DistrictOfOrigin" type="text" name="DistrictOfOrigin"></td>
		</tr>
		<tr>
			<th><label for="StateOfOrigin">State Of Origin </label></th>
			<td><input required v-model="StateOfOrigin" name="StateOfOrigin" /></td>
		</tr>
		<tr>
			<th><label for="NameOfReciever">Receiver's Name </label></th>
			<td><input required v-model="NameOfReciever" type="text" name="NameOfReciever"></td>
		</tr>
		<tr>
			<th><label for="ContactOfReciever">Contact Of Reciever </label></th>
			<td><input required v-model="ContactOfReciever" name="ContactOfReciever" maxlength="10"></td>
		</tr>
		<tr>
			<th><label for="AreaOfReciever">Area Of Reciever </label></th>
			<td><input required v-model="AreaOfReciever" type="text" name="AreaOfReciever"></td>
		</tr>
		<tr>
			<th><label for="DistrictOfDesination">District Of Destination </label></th>
			<td><input required v-model="DistrictOfDestination" type="text" name="DistrictOfDestination"></td>
		</tr>
		<tr>
			<th><label for="PincodeOfDestination">Pincode Of Destination </label></th>
			<td><input required v-model="PincodeOfDestination" type="text" name="DestinationPincode" /></td>
		</tr>
		<tr>
			<th><label for="StateOfDestination">State Of Destination </label></th>
			<td><input required v-model="StateOfDestination" name="StateOfDestination" /></td>
		</tr>
		<tr>
			<th><label for="Quantity">Number Of Parcel </label></th>
			<td><input required v-model="Quantity" type="number" name="Quantity"></td>
		</tr>
		<tr>
			<th><label for="Type">Type Of Packing </label></th>
			<td>
				<select required v-model="Type" name="Type">
					<option v-for="(type, index) in Types" :key="index" :value="type">{{ type }}</option>
				</select>
			</td>
		</tr>
		<tr>
			<th><label for="Weight">Weight </label></th>
			<td>
				<select required v-model="Weight" name="Weight">
					<option v-for="(weight, index) in Weights" :key="index" :value="weight">{{ weight }}</option>
				</select>
			</td>
		</tr>
		<tr>
			<th><label for="Amount">Amount </label></th>
			<td><input required v-model="Amount" type="text" name="Amount"></td>
		</tr>
		<tr>
			<th><label for="ModeOfPayment">Mode Of Payment </label></th>
			<td>
				<select required v-model="ModeOfPayment" name="ModeOfPayment">
					<option v-for="(Mode, index) in Modes" :key="index" :value="Mode">{{ Mode }}</option>
				</select>
			</td>
		</tr>
		<tr>
			<th><label for="DeliveryMan">Delivery Man </label></th>
			<td>
				<select required v-model="SelectedDeliveryMan" name="DeliveryMan">
					<option v-for="(DeliveryMan, index) in DeliveryMen" :key="index" :value="DeliveryMan.name">{{ DeliveryMan.name }}</option>
				</select>
			</td>
		</tr>
		<tr>
			<th><label for="Status">Current Status </label></th>
			<td>
				<select required v-model="Status" name="Status">
					<option v-for="(status, index) in Statuses" :key="index" :value="status">{{ status }}</option>
				</select>
			</td>
		</tr>
		<tr>
			<th><label for="Delivered">Delivered </label></th>
			<td>
				<select required v-model="Delivered" name="Delivered">
					<option value="false">To Be Delivered</option>
					<option value="true">Delivered</option>
				</select>
			</td>
		</tr>
		<tr>
			<td><button @click="run" type="submit">Submit</button></td>
		</tr>
	</table>
</div>
</template>

<script>
import DeliveryMen from '@/mixins/ListOfDeliveryMan.js';

export default {
	components: {},
	props: {},
	mixins: [ DeliveryMen ],
	data() {
		return {
			DateOfOrder: '',
			NameOfSender: '',
			ContactOfSender: '',
			EmailOfSender: '',
			GpoOfOrigin: '',
			AreaOfSender: '',
			DistrictOfOrigin: '',
			PincodeOfOrigin: '',
			StateOfOrigin: '',
			NameOfReciever: '',
			ContactOfReciever: '',
			AreaOfReciever: '',
			DistrictOfDestination: '',
			PincodeOfDestination: '',
			StateOfDestination: '',
			Quantity: '1',
			Type: 'Envelope',
			Weight: '',
			Amount: '',
			ModeOfPayment: 'Cash',
			SelectedDeliveryMan: '',
			Status: 'Initiated',
			Delivered: 'false',
			Gpos: [],
			Types: [ 'Envelope', 'Small Box', 'Carton', 'Jar', 'Big Box' ],
			Weights: [ '0g - 50g', '50g - 500g', '500g - 2kg', '2kg - 10kg', '10kg - 50kg' ],
			Modes: [ 'Cash', 'Card', 'Online Payment', 'Cheque', 'Draft' ],
			Statuses: [ 'Initiated', 'Shipped', 'In Transit', 'Reached the Destination City', 'Out For Delivery' ],
		}
	},
	computed: {},
	methods: {
		run() {
			this.axios.post( 'http://localhost:3000/addcouriersdata',
					[
						this.DateOfOrder,
						this.NameOfSender,
						this.ContactOfSender,
						this.EmailOfSender,
						this.GpoOfOrigin,
						this.AreaOfSender,
						this.DistrictOfOrigin,
						this.PincodeOfOrigin,
						this.StateOfOrigin,
						this.NameOfReciever,
						this.ContactOfReciever,
						this.AreaOfReciever,
						this.DistrictOfDestination,
						this.PincodeOfDestination,
						this.StateOfDestination,
						this.Quantity,
						this.Type,
						this.Weight,
						this.Amount,
						this.ModeOfPayment,
						this.SelectedDeliveryMan,
						this.Status,
						this.Delivered
					]
				)
				.then(
					( response ) => {
						console.log( response );
					},
					( err ) => {
						console.log( err );
						// console.log( err.response.data.message );
						return err;
					}
				)
		},
		getAll( e ) {
			var par = e.explicitOriginalTarget.name.slice( 9 );
			let Gpos = [];
			var Area, District, State;
			// var apiKey = '71c7f0d6d9msh9d427d1a97247ebp1b1ec2jsn1e2c241d4507';

			var unirest = require( "unirest" );

			var req = unirest( "POST", "https://pincode.p.rapidapi.com/" );

			req.headers( {
				"x-rapidapi-host": "pincode.p.rapidapi.com",
				"x-rapidapi-key": "71c7f0d6d9msh9d427d1a97247ebp1b1ec2jsn1e2c241d4507",
				"content-type": "application/json",
				"accept": "application/json",
				"useQueryString": true
			} );

			req.type( "json" );
			req.send( {
				"searchBy": "pincode",
				"value": e.explicitOriginalTarget._value
			} );

			req.end( async ( res ) => {
				if ( res.error ) throw new Error( res.error );
				State = res.body[ 0 ].circle;
				District = res.body[ 0 ].district;
				Area = await res.body[ 0 ].division;
				res.body.forEach( ( item, i ) => {
					Gpos.push( res.body[ i ].office );
				} );
			} );
			if ( par === 'Origin' ) {
				this.Gpos = Gpos;
				this.StateOfOrigin = State;
				this.DistrictOfOrigin = District;
				this.AreaOfSender = Area;
				console.log( Gpos );
			}
		},
	},
	created() {},
	mounted() {},
	updated() {}
}
</script>

<style lang='scss' scoped>
#container {
    background: #10163A;
    margin: 2em;
    padding: 2em;
    font-size: 1.1em;
    list-style-type: none;
    font-weight: bolder;
    color: #04ffbc;
    #title {
        font-size: 2em;
        margin-bottom: 1em;
    }
    #table {
        width: 100%;
        tr {
            td,
            th {
                margin: 20em;
                text-align: left;
            }
            button,
            input,
            select {
                color: #04ffbc;
                font-weight: bold;
                padding: 0.4em;
                background-image: linear-gradient(to right, #7165ed, #6b60e1, #645ad5, #5e55ca, #5850be);
                width: 10em;
                border: 0.3em solid #262c47;
            }
            select {
                width: 11.5em;
            }
        }
    }
    // #card {
    //     display: flex;
    //     align-items: baseline;
    //     flex-flow: row wrap;
    //     font-weight: bolder;
    //     color: #04ffbc;
    //     li {
    //         padding: 1em;
    //         margin: 0.2em;
    //         button,
    //         input,
    //         select {
    //             color: #04ffbc;
    //             font-weight: bold;
    //             padding: 0.4em;
    //             background-image: linear-gradient(to right, #7165ed, #6b60e1, #645ad5, #5e55ca, #5850be);
    //             width: 10em;
    //             border: 0.3em solid #262c47;
    //         }
    //     }
    // }
}
@media screen and (min-width: 1080px) {
    #container {
        // #card {
        //     flex-flow: row wrap;
        // }
    }
}
</style>
