import { axiosService } from "./generic-service";
import { localUrl, urls as remoteUrl } from "../shared/urls/urls";
import { appConfiguration } from "../shared/config/Configurations";

class RiskScoreServices {
  appMode = appConfiguration.localMode;
  _ami = appConfiguration.ami;

  _config = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  };

  getRiskScore() {
    if (this.appMode) {
      const url = `${localUrl.baseUrl}${localUrl.riskScore}`;
      return axiosService.get(url);
    } else {
      const url = `${remoteUrl.baseUrl}${remoteUrl.riskScore}`;
      return axiosService.post(
        url,
        JSON.stringify(this._ami.riskScore),
        this._config
      );
    }
  }

  getRiskScoreContributors() {
    if (this.appMode) {
      const url = `${localUrl.baseUrl}${localUrl.riskScoreContr}`;
      return axiosService.get(url);
    } else {
      const url = `${remoteUrl.baseUrl}${remoteUrl.riskScoreContr}`;
      return axiosService.post(
        url,
        JSON.stringify(this._ami.config),
        this._config
      );
    }
  }
}

const riskScoreService = new RiskScoreServices();
export { riskScoreService };
