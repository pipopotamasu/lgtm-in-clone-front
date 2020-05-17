import axios from 'axios';

const baseURL =
  process.env!.REACT_APP_MOCK_SERVER === '1'
    ? 'http://localhost:4000'
    : 'http://localhost:8000/api/v1';

export default axios.create({
  baseURL,
  withCredentials: true,
});
