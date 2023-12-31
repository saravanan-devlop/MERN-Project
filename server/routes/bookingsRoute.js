const express = require("express");
const router = express.Router();
const Booking = require("../models/booking")


 router.post("/bookroom", (req, res)=>{

        const {
            room,
            userid,
            fromdate,
            todate,
            totalamount,
            totaldays
        }=req.body

        try {
            const newbooking = new Booking({
                room : room.name,
                roomid: room._id,
                userid,
                fromdate,
                todate,
                totalamount,
                totaldays,
                transactionId : '1234'
            })
            
            const booking = newbooking.save()
            res.send('Room Booked Successfully')

                    } catch (error) {
            return res.status(400).json(error)
        }
    
});

module.exports = router