export default {
  data () {
    return {
      States: []
    }
  },
created () {
    this.States = this.getStates()
  },
methods: {
    getStates () {
      return [
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chandigarh",
        "Chhattisgarh",
        "Dadar And Nagar Haveli",
        "Daman And Diu",
        "Delhi",
        "Goa",
        "Gujrat",
        "Haryana",
        "Himachal Pradesh",
        "Jammu And Kashmir",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Lakshadweep",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Orissa",
        "Puducherry",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal"
      ];
    }
  }
};
