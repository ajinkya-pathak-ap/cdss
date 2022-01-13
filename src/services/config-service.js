import { axiosService } from "./generic-service";

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
    return axiosService.post(url, JSON.stringify(config), this._config);
  }

  saveConfiguration(config) {
    const url = `${remoteUrl.baseUrl}${remoteUrl.saveConfig}`;
    return axiosService.post(url, JSON.stringify(config), this._config);
  }

  getConfigurationLocal(config) {
    const url = `${localUrl.baseUrl}${localUrl.fetchConfig}`;
    return axiosService.get(url);
  }

  saveConfigurationLocal(config) {
    const url = `${localUrl.baseUrl}${localUrl.saveConfig}`;
    return axiosService.post(url);
  }
}

const configurationService = new ConfigurationServices();
export { configurationService };
