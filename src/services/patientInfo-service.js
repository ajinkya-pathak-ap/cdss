import { axiosService } from "./generic-service";
import { localUrl, urls as remoteUrl } from "../shared/urls/urls";
import { appConfiguration } from "../shared/config/Configurations";

class PatientInfoService {
  appMode = appConfiguration.localMode;
  _ami = appConfiguration.ami;

  _config = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  };

  getPatientInfo() {
    if (this.appMode) {
      const url = `${localUrl.baseUrl}${localUrl.patientInfo}`;
      return axiosService.get(url);
    } else {
      const url = `${remoteUrl.baseUrl}${remoteUrl.patientInfo}`;
      return axiosService.post(
        url,
        JSON.stringify(this._ami.patientInfo),
        this._config
      );
    }
  }
}

const patientInfoService = new PatientInfoService();
export { patientInfoService };
