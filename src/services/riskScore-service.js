import axios from "axios";
import { URLS } from "../shared/urls/urls";

class RiskScoreServices {
  getRiskScore(config) {
    const url = `${URLS.RISK_SCORE}`;
    let _config = {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
    return axios.post(url, JSON.stringify(config), _config);
  }

  getRiskScoreContributors(config) {
    const url = `${URLS.RISK_SCORE_CONTR}`;
     let _config = {
       headers: {
         "Content-Type": "application/json; charset=utf-8",
         "Access-Control-Allow-Origin": "*",
       },
     };
     return axios.post(url, JSON.stringify(config), _config);
  }
}

const riskScoreService = new RiskScoreServices();
export { riskScoreService };
