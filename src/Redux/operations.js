import axios from "axios";

axios.defaults.baseURL = "https://649d475f9bac4a8e669d7cc8.mockapi.io/users";

export async function fetchUsers(page) {
  const url = "";
  const params = {
    completed: false,
    page: page,
    limit: 3,
  };
  const { data } = await axios.get(url, { params });
  return data;
}

export async function updateUser(id, userData) {
  const url = `/${id}`;
  const { data } = await axios.put(url, userData);
  return data;
}

export async function filterUser(id, userData) {
  const url = `/${id}`;
  const { data } = await axios.get(url, { params: userData });
  console.log(data);
  return data;
}
