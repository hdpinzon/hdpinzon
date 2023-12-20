(function(){

    var hotel = {
        hotelName: "PARK",
        roomPrice: 240,
        roomDisc:  15
    }
    var hotelName, roomPrice, specialPrice;
    hotelName = document.getElementById("hotelName");
    roomPrice = document.getElementById("roomPrice");
    specialPrice = document.getElementById("offerPrice");

    hotelName.textContent = hotel.hotelName;
    roomPrice.textContent = hotel.roomPrice;
    specialPrice.textContent = hotel.roomPrice * ((100 - hotel.roomDisc)/100);



    function offerExpires(today) {
        var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        var months = ["January","Febrary","March","April","May","June","July","Agost","September","October","November","Decembre"];
        
        var exp, month, dayMonth, msg; 
        var endOffer = new Date(today.getTime() + (7*24*60*60*1000));   
        msg = 'Offer expires nexth ' + days[endOffer.getDay()]  + ' '+ endOffer.getDate()+ ' ' + months[endOffer.getMonth()] + ' of ' +endOffer.getFullYear();
        return msg;
    }
    var today = new Date();
    exp = document.getElementById("expOffer");
    exp.textContent = offerExpires(today);


}())
