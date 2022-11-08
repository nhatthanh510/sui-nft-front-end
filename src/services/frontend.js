import axios from 'axios';

export const getDummyData = async () => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/1`);
  return res;
};
