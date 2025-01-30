import Course from "../models/courseModel.js";
import Users from "../models/userModel.js";


export const addToCart  = async(req, res) => {
    try {
        const {userId, courseId} = req.body;

        const course = await Course.findById(courseId);
        let user = await Users.findById(userId).populate("cart.course").populate("wishlist.course")
        if (user.cart.length == 0) {
            user.cart.push({course, quantity:1})
        
        }else{
            let isCourseFound = false;
            for (let i=0;i<user.cart.length;i++){
                if (user.cart[i].course._id.equals(course._id)){
                    isCourseFound = true;
                }
            }
            if (isCourseFound) {
               let coursettt = user.cart.find(pro=>
                pro.course._id.equals(course._id)
                );
                coursettt.quantity++;

            }else{
                user.cart.push({course, quantity:1})
            }
        }
        
    
        user =await user.save()
        res.status(200).json(user)


    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}




export const addToWishlist  = async(req, res) => {
    try {

        
        const {userId, courseId} = req.body;

        const course = await Course.findById(courseId);
        let user = await Users.findById(userId).populate("cart.course").populate("wishlist.course")
        if (user.wishlist.length == 0) {
            user.wishlist.push({course})
        
        }else{
            let isCourseFound = false;
            for (let i=0;i<user.wishlist.length;i++){
                if (user.wishlist[i].course._id.equals(course._id)){
                    isCourseFound = true;
                }
            }
            if (isCourseFound) {
               res.status(400).json({message:"aleardy added"})

            }else{
                user.wishlist.push({product})
            }
        }

        
        

        user = await user.save()
        res.status(200).json(user)


    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}



export const removeCartItem  = async(req, res) => {
    try {

        
        const {userId, courseId} = req.body;

        const course = await Course.findById(courseId);
        let user = await Users.findById(userId).populate("cart.course").populate("wishlist.course")

        for (let index = 0; index < user.cart.length; index++) {
            if (user.cart[index].course._id.equals(course._id)) {
                if (user.cart[index].quantity == 1) {
                    user.cart.splice(index, 1)
                    
                }else{
                    user.cart[index].quantity-=1;
                }
            }
            
        }

        user = await user.save()
        res.status(200).json(user)


    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}






export const deleteCartItem  = async(req, res) => {
    try {

        
        const {userId, index} = req.body;
        let user = await Users.findById(userId).populate("cart.course").populate("wishlist.course")

        if (user) {
            user.cart.splice(index, 1)
        }


        user = await user.save()
        res.status(200).json(user)


    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}


export const deleteWishlistItem  = async(req, res) => {
    try {

        
        const {userId, index} = req.body;
        let user = await Users.findById(userId).populate("cart.course").populate("wishlist.course")

        if (user) {
            user.wishlist.splice(index, 1)
        }


        user = await user.save()
        res.status(200).json(user)


    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}

