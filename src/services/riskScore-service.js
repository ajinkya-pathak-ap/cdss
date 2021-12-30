import axios from "axios";
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
    return axios.post(url, JSON.stringify(config), this._config);
  }

  getRiskScoreContributors(config) {
    const url = `${remoteUrl.baseUrl}${remoteUrl.riskScoreContr}`;
    return axios.post(url, JSON.stringify(config), this._config);
  }

  getRiskScoreLocal(config) {
    const url = `${localUrl.baseUrl}${localUrl.riskScore}`;
    return axios.get(url);
  }

  getRiskScoreContributorsLocal(config) {
    const url = `${localUrl.baseUrl}${localUrl.riskScoreContr}`;
    return axios.get(url);
  }
}

const riskScoreService = new RiskScoreServices();
export { riskScoreService };
