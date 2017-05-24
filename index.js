const isOnline = require('is-online');
var twilio = require('twilio');
var client = new twilio('ACbf19d4381b0e623f4308a1a8a049c602','f97ead298721657c25bcbdd0ff6a56bb');
var count = 0;
setInterval(function(){
isOnline().then(online => {
    if(online == true && count==0){
        if(count>0){
            console.log('hi');
            process.exit()
        }
        else{
            client.messages.create({
                body: 'Internet is working Go Enjoy and surf the web!',
                to:'+919958399512',  // Text this number
                from:'+12564149483' // From a valid Twilio number
            },function(err,msg){
                if(err){
                    console.log('--'+err);
                }
                else{
                    console.log('--'+msg);
                    count++;
                }
                
                console.log(count);
            
            })

        }
    }
});


},5000);
