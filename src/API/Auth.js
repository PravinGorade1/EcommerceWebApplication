import axios from 'axios';

const reg = 'http://localhost:8080/auth/registration';
const log = 'http://localhost:8080/auth/login';
const cate = 'http://localhost:8080/seller/addCategory';
const Aproduct = 'http://localhost:8080/seller/addProduct';
const logou = 'http://localhost:8080/auth/logout';
const viewAllUsers = 'http://localhost:8080/admin/viewAllUsers';
const viewSellers = 'http://localhost:8080/admin/viewSellers';
const viewBuyers = 'http://localhost:8080/admin/viewBuyers';
const searchUsers = 'http://localhost:8080/admin/searchUsers';
const searchUserById = 'http://localhost:8080/admin/searchUserById';
const deleteUser = 'http://localhost:8080/admin/deleteUser';
const viewCategory = 'http://localhost:8080/admin/viewCategories';
const deleteCategory = 'http://localhost:8080/admin/deleteCategory';

// Register API
export const register = async (data) => {
  return await axios.post(reg, data);
};

// Login API
export const logins = async (data) => {
  return await axios.post(log, data);
};

// Category API
export const addCategory = async (data) => {
  return await axios.post(cate, data);
};

// Add Product API
export const addProduct = async (data) => {
  return await axios.post(Aproduct, data);
};

// Logout API
// Logout API (corrected to use query param)
export const logouts = async (userId) => {
  return await axios.post(`${logou}?userId=${userId}`);
};


// View All Users API
export const viewAllUser = async () => {
  return await axios.get(viewAllUsers);
};

// View Sellers API
export const viewSeller = async () => {
  return await axios.get(viewSellers);
};

// View Buyers API
export const viewBuyer = async () => {
  return await axios.get(viewBuyers);
};

// Search Users API
export const searchUser = async (data) => {
  return await axios.post(searchUsers, data);
};

// Search User By ID API
export const searchUserByIde = async (data) => {
  return await axios.post(searchUserById, data);
};

// Delete User API
export const deleteUserById = async (data) => {
  return await axios.post(deleteUser, data);
};

// View Category API
export const viewCategoryAPI = async () => {
  return await axios.get(viewCategory);
};

// Delete Category API
export const deleteCategoryAPI = async (data) => {
  return await axios.post(deleteCategory, data);
};

