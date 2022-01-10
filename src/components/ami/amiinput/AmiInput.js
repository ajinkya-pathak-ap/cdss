import React from "react";
import EKGFindings from "./ekgfindings/EKGFindings";
import PatientHistory from "./patienthistory/PatientHistory";
import HsTnlResults from "./hstnlresults/HsTnlResults";

const AmiInput = () => {
  return (
    <div>
      <EKGFindings></EKGFindings>
      <PatientHistory></PatientHistory>
      <HsTnlResults></HsTnlResults>
    </div>
  );
};

export default AmiInput;
