import express from 'express';
import connectToDb from './config/db.js';
import userRoute from './routes/userRoute.js';
import courseRoutes from './routes/courseRoutes.js';
import dotenv from 'dotenv';


dotenv.config()
const app = express()
connectToDb()
const port = process.env.PORT || 3000

app.use(express.json())
// app.use('/api/users/',userRoute)

// Routes
app.use('/api/users', userRoute); // Connect the user route

// Middleware for courses
app.use('/api/courses', courseRoutes);


// // Default route for testing
// app.get('/', (req, res) => {
//   res.send('API is running...');
// });


app.listen(port, ()=> {
    console.log(`Server is runnig on port ${port}`);
})



