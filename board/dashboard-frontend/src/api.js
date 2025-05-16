import axios from 'axios';

const API_BASE = 'http://127.0.0.1:8000/api';

export const fetchData = (filters = {}) =>
  axios.get(`${API_BASE}/data/`, { params: filters });
