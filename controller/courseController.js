import Course from '../models/courseModel.js';

// Create a new course
export const createCourse = async (req, res) => {
  try {
    const { title, image, video, price, category, description, countInStock } = req.body;

    const course = new Course({
      title,
      image,
      video,
      price,
      category,
      description,
      countInStock,
    });

    const createdCourse = await course.save();
    res.status(201).json(createdCourse);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create course', error });
  }
};

// Get all courses
export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find({});
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch courses', error });
  }
};

// Get a single course by ID
export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (course) {
      res.status(200).json(course);
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching course', error });
  }
};

// Update a course
export const updateCourse = async (req, res) => {
  try {
    const { title, image, video, price, category, description, countInStock } = req.body;

    const course = await Course.findById(req.params.id);

    if (course) {
      course.title = title || course.title;
      course.image = image || course.image;
      course.video = video || course.video;
      course.price = price || course.price;
      course.category = category || course.category;
      course.description = description || course.description;
      course.countInStock = countInStock || course.countInStock;

      const updatedCourse = await course.save();
      res.status(200).json(updatedCourse);
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating course', error });
  }
};

// Delete a course
export const deleteCourse = async (req, res) => {
  try {
    
    const course = await Course.findByIdAndDelete(req.params.id);
    if (course) {
      res.status(200).json({message: "Course deleted!"});
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
    // const Course = await Course.findByIdAndDelete(req.params.id);

//     if (course) {
//       await course.remove();
//       res.status(200).json({ message: 'Course deleted successfully' });
//     } else {
//       res.status(404).json({ message: 'Course not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Error deleting course', error });
//   }
};
