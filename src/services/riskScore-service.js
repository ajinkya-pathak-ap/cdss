import axios from "axios";
import { localUrl as URLS } from "../shared/urls/urls";
// import { urls as URLS } from "../shared/urls/urls";

class RiskScoreServices {
  _config = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  };
  getRiskScore(config) {
    const url = `${URLS.baseUrl}${URLS.riskScore}`;
    return axios.post(url, JSON.stringify(config), this._config);
  }

  getRiskScoreContributors(config) {
    const url = `${URLS.baseUrl}${URLS.riskScoreContr}`;
    return axios.post(url, JSON.stringify(config), this._config);
  }

  // getRiskScore(config) {
  //   const url = `${URLS.baseUrl}${URLS.riskScore}`;
  //   return axios.get(url);
  // }

  // getRiskScoreContributors(config) {
  //   const url = `${URLS.baseUrl}${URLS.riskScoreContr}`;
  //   return axios.get(url);
  // }
}

const riskScoreService = new RiskScoreServices();
export { riskScoreService };
