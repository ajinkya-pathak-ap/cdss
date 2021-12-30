import axios from "axios";
import { localUrl } from "../shared/urls/urls";
import { urls as remoteUrl } from "../shared/urls/urls";

class PatientInfoService {
  _config = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  };

  // getPatientInfo(config) {
  //   const url = `${URLS.baseUrl}${URLS.patientInfo}`;
  //   return axios.post(url, JSON.stringify(config), this._config);
  // }

  getPatientInfo(config) {
    const url = `${remoteUrl.baseUrl}${remoteUrl.patientInfo}`;
    return axios.post(url, JSON.stringify(config), this._config);
  }

  getPatientInfoLocal(config) {
    const url = `${localUrl.baseUrl}${localUrl.patientInfo}`;
    return axios.get(url);
  }
}

const patientInfoService = new PatientInfoService();
export { patientInfoService };
