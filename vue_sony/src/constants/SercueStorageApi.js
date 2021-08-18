import axios from "axios";
export default class SercueStorageApi {
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
