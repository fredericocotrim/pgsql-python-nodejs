import axios from 'axios';

const handle = async arg => {
  const response = await axios({
    method: arg.method,
    baseURL: arg.baseURL,
    url: arg.url,
    params: arg.params,
    headers: arg.headers,
    auth: arg.auth,
    data: arg.data,
  });

  return response.data;
};

export default handle;
