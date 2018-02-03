var saveCtrl = require('./saveController.js');

module.exports = function (app) {

    app.get('/',function(req,res){res.send('Welcome to Node')});
    app.post('/newapp/checkin', saveCtrl.saveBooking);
}