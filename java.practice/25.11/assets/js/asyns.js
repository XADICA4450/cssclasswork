

import BASE_URL, { endpoints } from "./contants.js";



async function getAllData() {
  try {
    const response = await axios(`${BASE_URL}/products`);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finally block worked");
  }
}
async function deleteData(id) {
  const response = await axios.delete(`${BASE_URL}/products/${id}`);
  console.log(response.data);
}

getAllData();