import { axiosService } from "./generic-service";
import { localUrl } from "../shared/urls/urls";
import { urls as remoteUrl } from "../shared/urls/urls";

class PatientInfoService {
  _config = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  };

  getPatientInfo(config) {
    const url = `${remoteUrl.baseUrl}${remoteUrl.patientInfo}`;
    return axiosService.post(url, JSON.stringify(config), this._config);
  }

  getPatientInfoLocal(config) {
    const url = `${localUrl.baseUrl}${localUrl.patientInfo}`;
    return axiosService.get(url);
  }
}

const patientInfoService = new PatientInfoService();
export { patientInfoService };
