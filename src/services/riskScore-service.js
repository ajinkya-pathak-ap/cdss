import { axiosService } from "./generic-service";
import { localUrl } from "../shared/urls/urls";
import { urls as remoteUrl } from "../shared/urls/urls";

class RiskScoreServices {
  _config = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  };

  getRiskScore(config) {
    const url = `${remoteUrl.baseUrl}${remoteUrl.riskScore}`;
    return axiosService.post(url, JSON.stringify(config), this._config);
  }

  getRiskScoreContributors(config) {
    const url = `${remoteUrl.baseUrl}${remoteUrl.riskScoreContr}`;
    return axiosService.post(url, JSON.stringify(config), this._config);
  }

  getRiskScoreLocal(config) {
    const url = `${localUrl.baseUrl}${localUrl.riskScore}`;
    return axiosService.get(url);
  }

  getRiskScoreContributorsLocal(config) {
    const url = `${localUrl.baseUrl}${localUrl.riskScoreContr}`;
    return axiosService.get(url);
  }
}

const riskScoreService = new RiskScoreServices();
export { riskScoreService };
