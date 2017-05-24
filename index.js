const isOnline = require('is-online');
var twilio = require('twilio');
var client = new twilio('id','token'); //id is twilio id and token is twilio token 
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
                to:'',  // Text this number
                from:'' // From a valid Twilio number
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
