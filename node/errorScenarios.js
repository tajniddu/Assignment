"use strict"
var error={};
error.en=[
    {
        "Code":9001,
        "Description": "Invalid Booking code"
    },{
        "Code":9002,
        "Description": "Family name invalid"
    },
    {
        "Code":9003,
        "Description": "Check-in not available yet for this flight"
    },
    {
        "Code":9004,
        "Description": "Sorry online check-in closed for this flight"
    }
]
error.ed=[
    {
        "Code":9001,
        "Description": "Ongeldige boekingscode"
    },{
        "Code":9002,
        "Description": "Achternaam ongeldig"
    },
    {
        "Code":9003,
        "Description": "Check-in is nog niet beschikbaar voor deze vlucht"
    },
    {
        "Code":9004,
        "Description": "Sorry online check-in gesloten voor deze vlucht"
    }
]
module.exports=error;