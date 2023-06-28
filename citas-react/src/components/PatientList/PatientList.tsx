import { Dispatch, SetStateAction } from "react";
import { PatientI } from "../../App";
import Patient from "./components/Patient";

interface PatientListPropsI {
  patients: PatientI[];
  setPatient: Dispatch<SetStateAction<PatientI>>;
  deletePatient: (id: string) => void;
}
const PatientList = ({ patients, setPatient, deletePatient }: PatientListPropsI) => {

  if (patients.length === 0) return (
    <div className="md:w-1/2 lg:3/5 mt-5 md:mt-0">
      <h2 className="font-black text-3xl text-center">There are not patients</h2>
    </div>
  )
  return (
    <div className="md:w-1/2 lg:3/5 mt-5 md:mt-0">
      <h2 className="font-black text-3xl text-center">Patient List</h2>
      <p className="text-lg mt-5 text-center">
        Manage your &nbsp;
        <span className="text-indigo-600 font-bold">patients and dates</span>
      </p>
      <div className="h-[35rem] overflow-y-scroll">
        {
          patients.map((patient) => <Patient {...patient} key={patient.id} setPatient={setPatient} deletePatient={deletePatient} />)
        }
      </div>
    </div>
  );
};
export default PatientList;
