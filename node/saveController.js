'use strict'
var flightData = require("./flightBookingData").data;
var errorDetail=require("./errorScenarios");
var saveCont={},errorData=[];
saveCont.saveBooking=function(req,res){
        if(req.headers["accept-language"]){
            errorData=errorDetail[req.headers["accept-language"]]||errorDetail['en'];
            }
        for(let i =0;i<flightData.length;i++){
            if(flightData[i].bookingId.toLowerCase()==req.body.bookingId.toLowerCase()){
                if(flightData[i].familyName.toLowerCase()==req.body.familyName.toLowerCase()){
                    var response=bookingStatus(flightData[i].status);
                        res.send(response);
                    return;
                }
                else{
                    var response=bookingStatus(9002);
                    res.status(response[0]).send(response[1]);
                    return;
                } 
            }     
        }
            var response=bookingStatus(9001);
            res.status(response[0]).send(response[1]); 
    }

function bookingStatus(status){
    var sucess={"status":200,"Message":"Checkin available"};
    if(typeof(status)==="string"){
        status = (status==="noService")?9003:(status==="closedService")?9004:"available";
    }
    switch(status){
        case 9001: return [400, errorData[0]];
        case 9002: return [400, errorData[1]];
        case 9003: return [400, errorData[2]];
        case 9004: return [400, errorData[3]];
        default : return sucess;
    }
}

function languageDispatch(req, res){
var contents;
if(req.body.language === "dutch"){
    contents = fs.readFileSync("dutch.json");
}else{
    contents = fs.readFileSync("english.json");
}
 res.send(JSON.parse(contents));
}


module.exports=saveCont;