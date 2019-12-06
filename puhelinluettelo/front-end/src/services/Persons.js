import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/persons';

const getAll = () => {
  console.log('getAll alkaa');
  const request = axios.get(baseUrl);
  console.log('getAll loppuu');
  return request.then(response => response.data);
};

const create = newObject => {
  console.log('create alkaa');
  const request = axios.post(baseUrl, newObject);
  console.log('create loppuu');
  return request.then(response => response.data);
};

const update = (id, newObject) => {
  console.log('update alkaa');
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  console.log('update loppuu');
  return request.then(response => response.data);
};

const remove = id => {
  console.log('remove alkaa');
  const request = axios.delete(`${baseUrl}/${id}`);
  console.log('remove loppuu');
  console.log(request.then(response => response.data));
  return request.then(response => response.data);
};

export default { getAll, create, update, remove };
