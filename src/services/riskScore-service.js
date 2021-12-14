import axios from "axios";
import { URLS } from "../shared/urls/urls";

class RiskScoreServices {
  getRiskScore(config) {
    const url = `${URLS.RISK_SCORE}`;
    return axios.get(url);
  }

  getRiskScoreContributors(config) {
    const url = `${URLS.RISK_SCORE_CONTR}`;
    return axios.get(url);
  }
}

const riskScoreService = new RiskScoreServices();
export { riskScoreService };
