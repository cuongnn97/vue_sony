import axios from "axios";
import Settings from "../settings/index.js"
class SercueStorageApi {
  constructor(baseUrl) {
    this.api = axios.create({
      baseURL: baseUrl,
      timeout: 5000,
      headers: {},
    });
  }

  request = (method, url, options) => {
    return this.api.request({
      method: method,
      url: url,
      ...options,
    });
  };
}

const api = new SercueStorageApi(Settings.api_url);

export default api

