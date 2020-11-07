import axios from 'axios';

export default axios.create({
   baseURL : 'https://api.yelp.com/v3/businesses',
   headers : {
       Authorization : 'Bearer q4MartqGgTGDCTzkgPr8Se706zCOb_tb7e8q7M0_Jhv6-MU25UAu_4mIRlvx41rTsC52K1SqdTEoa5OM3jxgV8DzvJzlhRZ9qaQNRND7KiRfUIkXUuc1Mk4I45ueX3Yx'
   }

});

