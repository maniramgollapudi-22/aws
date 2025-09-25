import axios from "axios";

const API_BASE_URL = "ec2-13-218-89-137.compute-1.amazonaws.com";  // Backend API URL

// Fetch products by category (computers, mobiles, laptops, pendrives, or all)
export const getProducts = async (category = "") => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${category}`);
    return response.data;  // Return products array
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return empty array on error
  }
};

// Get product image URL
export const getProductImageUrl = (imagePath) => {
  return `ec2-13-218-89-137.compute-1.amazonaws.com/api/products/images/${imagePath}`;
};
