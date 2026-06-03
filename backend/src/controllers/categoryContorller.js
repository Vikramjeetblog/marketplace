
const {
  getAllCategories,
  getActiveCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  updateCategoryStatus,
} = require("../models/categoryModel");

/*
=========================================
Get All Categories
=========================================
*/
const getCategories = async (
  req,
  res
) => {
  try {
    const categories =
      await getAllCategories();

    return res.status(200).json({
      success: true,
      categories,
    });
  } catch (error) {
    console.error(
      "Get Categories Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

/*
=========================================
Get Active Categories
=========================================
*/
const getPublicCategories =
  async (req, res) => {
    try {
      const categories =
        await getActiveCategories();

      return res.status(200).json({
        success: true,
        categories,
      });
    } catch (error) {
      console.error(
        "Get Active Categories Error:",
        error
      );

      return res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  };

/*
=========================================
Get Category By Id
=========================================
*/
const getCategory = async (
  req,
  res
) => {
  try {
    const { id } =
      req.params;

    const category =
      await getCategoryById(id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message:
          "Category not found",
      });
    }

    return res.status(200).json({
      success: true,
      category,
    });
  } catch (error) {
    console.error(
      "Get Category Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

/*
=========================================
Create Category
=========================================
*/
const createNewCategory =
  async (req, res) => {
    try {
      const {
        name,
        slug,
        image_url,
        sort_order,
      } = req.body;

      if (!name || !slug) {
        return res.status(400).json({
          success: false,
          message:
            "Name and slug are required",
        });
      }

      const categoryId =
        await createCategory({
          name,
          slug,
          image_url:
            image_url || null,
          sort_order:
            sort_order || 0,
        });

      return res.status(201).json({
        success: true,
        message:
          "Category created successfully",
        categoryId,
      });
    } catch (error) {
      console.error(
        "Create Category Error:",
        error
      );

      return res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  };

/*
=========================================
Update Category
=========================================
*/
const editCategory =
  async (req, res) => {
    try {
      const { id } =
        req.params;

      const {
        name,
        slug,
        image_url,
        sort_order,
      } = req.body;

      const category =
        await getCategoryById(id);

      if (!category) {
        return res.status(404).json({
          success: false,
          message:
            "Category not found",
        });
      }

      await updateCategory(
        id,
        {
          name,
          slug,
          image_url,
          sort_order,
        }
      );

      return res.status(200).json({
        success: true,
        message:
          "Category updated successfully",
      });
    } catch (error) {
      console.error(
        "Update Category Error:",
        error
      );

      return res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  };

/*
=========================================
Activate Category
=========================================
*/
const activateCategory =
  async (req, res) => {
    try {
      const { id } =
        req.params;

      const category =
        await getCategoryById(id);

      if (!category) {
        return res.status(404).json({
          success: false,
          message:
            "Category not found",
        });
      }

      await updateCategoryStatus(
        id,
        true
      );

      return res.status(200).json({
        success: true,
        message:
          "Category activated successfully",
      });
    } catch (error) {
      console.error(
        "Activate Category Error:",
        error
      );

      return res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  };

/*
=========================================
Deactivate Category
=========================================
*/
const deactivateCategory =
  async (req, res) => {
    try {
      const { id } =
        req.params;

      const category =
        await getCategoryById(id);

      if (!category) {
        return res.status(404).json({
          success: false,
          message:
            "Category not found",
        });
      }

      await updateCategoryStatus(
        id,
        false
      );

      return res.status(200).json({
        success: true,
        message:
          "Category deactivated successfully",
      });
    } catch (error) {
      console.error(
        "Deactivate Category Error:",
        error
      );

      return res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  };

module.exports = {
  getCategories,
  getPublicCategories,
  getCategory,
  createNewCategory,
  editCategory,
  activateCategory,
  deactivateCategory,
};
       