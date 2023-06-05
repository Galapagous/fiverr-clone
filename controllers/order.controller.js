const Gigs_model = require('../Model/Gigs_model')
const  Order_model = require('../Model/Order_model')
const User_model = require('../Model/User_model')


const singleOrder =async (req,res,next)=>{
    try {
        const order = await Order_model.findById(req.params.id)
        if(!order)return next(res.status(404).json('review not found'))
        res.status(200).json(order)
    } catch (error) {
        return next(res.status(500).json(error))
    }

}

const allOrder =async (req,res,next)=>{
    try {
        const order = await Order_model.find()
        return next(res.status(200).json(reviews))
    } catch (error) {
        return next(res.status(404).json(error))
    }
}

const createOrder = async(req,res,next)=>{
    console.log({review: req})
    try {
        const oldOrder =await Review.findOne({UserId: req.userId, GigId: req.body.gigId})
        if (oldOrder) return next(res.status(403).json('You"ve already made an order'))
    } catch (error) {
        return next(res.status(500).json('Error finding order'))
    }
    try {
        if(req.isSeller)res.status(403).json('sellers cannot create an order')
        const review = new Order_model({
            UserId: req.userId,
            GigId: req.body.gigId,
            Desc: req.body.desc,
            Star: req.body.star
        })
        const savedReview =await review.save()
        res.status(200).json(savedReview)
        await Gigs_model.findOneAndUpdate(req.body.gigId,{
            $inc: {total_stars: req.body.total_stars, NumberOf_stars: 1},
        })
    } catch (error) {
        return next(res.status(500).json(error))
    }
}

const deleteOrder = async(req,res,next)=>{
    const review = await Review.findById(req.params.id)
    if (!(req.userId === review.UserId.toString())){
      next(res.status(401).json("You can only delete your account"))
    }
      await Review.findByIdAndDelete(req.params.id)
      res.status(200).json("Deleted")
    res.send('delete review')
}


module.exports = {singleOrder, createOrder, deleteOrder, allOrder}