export default {
  data () {
    return {
      DeliveryMen: []
    }
  },
created () {
  this.getDeliveryMen();
  },
methods: {
    getDeliveryMen () {
      this.axios.get('http://localhost:3000/getdeliverymen')
        .then(
          ( response ) => {
            console.log( response.statusText );
            return response.data;
          },
          ( error ) => {
            console.log(error.response.data.message);
            return null;
          }
        )
        .then( result => { this.DeliveryMen = result })
    }
  }
};
