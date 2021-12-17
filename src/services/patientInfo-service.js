import axios from "axios";
import { URLS } from "../shared/urls/urls";

class PatientInfoService {
  // getPatientInfo(config) {
  //   const url = `${URLS.PATIENT_INFO}`;
  //   let _config = {
  //     headers: {
  //       "Content-Type": "application/json; charset=utf-8",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //   };
  //   return axios.post(url, JSON.stringify(config), _config);
  // }

  getPatientInfo(config) {
    const url = `${URLS.PATIENT_INFO}`;
    return axios.get(url);
  }
}

const patientInfoService = new PatientInfoService();
export { patientInfoService };
