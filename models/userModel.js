import mongoose from 'mongoose';

// Define User Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['Student', 'Teacher', 'Admin'], // Define specific roles
    required: true,
  },
  // isActive: {
  //   type: Boolean,
  //   default: true, // By default, the user is active
  // },
  // createdAt: {
  //   type: Date,
  //   default: Date.now, // Automatically set the creation date
  // },
  wishlist:[
    {

  }
], // this is favrite 
  cart:[{
    
  }],  //hi is cart courses
});

// Export the model
const User = mongoose.model('User', userSchema);
export default User;
