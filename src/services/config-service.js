import axios from "axios";
import { localUrl } from "../shared/urls/urls";
import { urls as remoteUrl } from "../shared/urls/urls";

class ConfigurationServices {
  _config = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  };

  getConfiguration(config) {
    const url = `${remoteUrl.baseUrl}${remoteUrl.fetchConfig}`;
    return axios.post(url, JSON.stringify(config), this._config);
  }

  saveConfiguration(config) {
    const url = `${remoteUrl.baseUrl}${remoteUrl.saveConfig}`;
    return axios.post(url, JSON.stringify(config), this._config);
  }

  getConfigurationLocal(config) {
    const url = `${localUrl.baseUrl}${localUrl.fetchConfig}`;
    return axios.get(url);
  }

  saveConfigurationLocal(config) {
    const url = `${localUrl.baseUrl}${localUrl.saveConfig}`;
    return axios.get(url);
  }
}

const configurationService = new ConfigurationServices();
export { configurationService };
