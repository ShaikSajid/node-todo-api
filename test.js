const request = require('request');
var soldUrl="https://api.move.com/v3/closings/search?sort=sold_date&offset=0&limit=100&prop_type=any&client_id=tws&buying_selling_agent_id=CHIL|160216";
var forRentUrl="http://api.move.com/v3/properties/search?agent_id=CHIL|160216&client_id=TWS&limit=100&prop_status=sold";
var forSaleUrl="http://api.move.com/v3/properties/search?agent_id=CHIL|160216&client_id=TWS&limit=1&prop_type=any";
request({
  url: soldUrl,
  json: true
}, (error, response, body) => {
  var count=0;
  console.log('total count: '+body.properties.length);
  for(var i = 0; i <body.properties.length;i++){
    var prop_type=body.properties[i].prop_status;
    if(prop_type==='for_sale'){
count++;
    }
    

}
console.log('for_sale count:'+count);
  //console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
 // console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});
