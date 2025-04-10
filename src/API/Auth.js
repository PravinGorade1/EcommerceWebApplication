import axios from 'axios';

const reg = 'http://localhost:8080/auth/registration';
const log = 'http://localhost:8080/auth/login';

// Register API
export const register = async (data) => {
  return await axios.post(reg, data);
};

// Login API
export const logins = async (data) => {
  return await axios.post(log, data);
};

// Optional debug log
// console.log(register);
