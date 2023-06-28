import { Dispatch, SetStateAction } from "react";
import { PatientI } from "../../../App";

interface PatientPropsI extends PatientI {
  setPatient: Dispatch<SetStateAction<PatientI>>;
  deletePatient: (id: string) => void
}
const Patient = ({ id, petName, ownerName, email, registerDate, symptoms, setPatient, deletePatient }: PatientPropsI) => {
  const handleEdit = () => {
    setPatient({
      id,
      petName,
      ownerName,
      email,
      registerDate,
      symptoms
    })
  }

  const handleDelete = () => {
    const response = confirm("Do you want to delete this patient?")
    response && deletePatient(id)
  }

  return (
    <div className="mt-5 mx-2 bg-white shadow-md p-5 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Name: <span className="font-normal normal-case">{petName}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Owner: <span className="font-normal normal-case">{ownerName}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Register date: <span className="font-normal normal-case">{registerDate}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Symptoms: <span className="font-normal normal-case">{symptoms}</span>
      </p>

      <div className="flex justify-around mt-5">
        <button
          className="py-2 px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          className="py-2 px-5 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default Patient;
