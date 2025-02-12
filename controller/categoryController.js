// controllers/categoryController.js
import Category from '../models/categoryModel.js'; // Hubi waddada saxda ah

// Abuur category cusub
export const createCategory = async (req, res) => {
  try {
    const { name, image, description } = req.body;
    console.log('Received data:', { name, image, description });  // Log incoming data
    const newCategory = new Category({ name, image, description });
    await newCategory.save();
    res.status(201).json({ id: newCategory._id, name, image, description });
  } catch (error) {
    console.error('Error creating category:', error);  // Log error
    res.status(500).json({ message: 'Error creating category', error });
  }
};

// Hel categories
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving categories', error });
  }

  
};

// Tirtir category by ID
export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;  // Qaado ID-ga ka soo galaya URL
    const deletedCategory = await Category.findByIdAndDelete(id);  // Tirtir category-ga
    if (!deletedCategory) {
      return res.status(404).json({ message: 'Category not found' });  // Haddii category-ga aan la helin
    }
    res.status(200).json({ message: 'Category deleted successfully' });  // Ka jawaab haddii la tirtiray
  } catch (error) {
    console.error('Error deleting category:', error);
    res.status(500).json({ message: 'Error deleting category', error });
  }
};

// Hel category by ID
export const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;  // Qaado ID-ga ka soo galaya URL
    const category = await Category.findById(id);  // Hel category-ga
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });  // Haddii category-ga aan la helin
    }
    res.status(200).json(category);  // Ka jawaab category-ga la helay
  } catch (error) {
    console.error('Error retrieving category by ID:', error);
    res.status(500).json({ message: 'Error retrieving category by ID', error });
  }
};

// Update category by ID
export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params; // ID-ga ka soo galaya URL
    const { name, image, description } = req.body; // Xogta cusub ee update-ka
    
    const updatedCategory = await Category.findByIdAndUpdate(
      id, 
      { name, image, description }, 
      { new: true, runValidators: true } // new: true waxay keeneysaa inay soo celiso xogta updated ah
    );

    if (!updatedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }

    res.status(200).json(updatedCategory);
  } catch (error) {
    console.error('Error updating category:', error);
    res.status(500).json({ message: 'Error updating category', error });
  }
};
