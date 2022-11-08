import axios from 'axios';

export const getDummyData = async () => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/1`);
    return res;
  } catch (error) {
    return error;
  }
};
