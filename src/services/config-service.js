import { axiosService } from "./generic-service";
import { localUrl, urls as remoteUrl } from "../shared/urls/urls";
import { appConfiguration } from "../shared/config/Configurations";

class ConfigurationServices {
  appMode = appConfiguration.localMode;
  _ami = appConfiguration.ami;

  _config = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  };

  getConfiguration() {
    if (this.appMode) {
      const url = `${localUrl.baseUrl}${localUrl.fetchConfig}`;
      return axiosService.get(url);
    } else {
      const url = `${remoteUrl.baseUrl}${remoteUrl.fetchConfig}`;
      return axiosService.post(
        url,
        JSON.stringify(this._ami.config),
        this._config
      );
    }
  }

  saveConfiguration(config) {
    if (this.appMode) {
      const url = `${localUrl.baseUrl}${localUrl.saveConfig}`;
      return axiosService.post(url);
    } else {
      const url = `${remoteUrl.baseUrl}${remoteUrl.saveConfig}`;
      return axiosService.post(url, JSON.stringify(config), this._config);
    }
  }
}

const configurationService = new ConfigurationServices();
export { configurationService };
