import { useState, useEffect, FormEvent, SetStateAction, Dispatch } from "react";
import { PatientI } from "../../App";
import Error from "../Error/Error";

interface FormPropsI {
  patients: PatientI[];
  setPatients: Dispatch<SetStateAction<PatientI[]>>;
  patient: PatientI;
  setPatient: Dispatch<SetStateAction<PatientI>>;
}
const Form = ({ setPatients, patients, patient, setPatient }: FormPropsI) => {
  const [petName, setPetName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [registerDate, setRegisterDate] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setPetName(patient.petName)
    setOwnerName(patient.ownerName)
    setEmail(patient.email)
    setRegisterDate(patient.registerDate)
    setSymptoms(patient.symptoms)
  }, [patient])

  const resetForm = () => {
    setPetName('');
    setOwnerName('');
    setEmail('');
    setRegisterDate('');
    setSymptoms('');
  }

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validate = [
      petName,
      ownerName,
      email,
      registerDate,
      symptoms,
    ].includes("");
    if (validate) {
      setError(true);
      return;
    }
    const newPatient = {
      id: '',
      petName,
      ownerName,
      email,
      registerDate,
      symptoms
    }
    if (patient.id) {
      newPatient.id = patient.id
      const updatedPatients = patients.map(patient => patient.id === newPatient.id ? newPatient : patient)
      setPatients(updatedPatients)
      setPatient({
        id: '',
        email: '',
        ownerName: '',
        petName: '',
        registerDate: '',
        symptoms: ''
      })
    } else {
      setPatients([
        ...patients,
        {
          ...newPatient,
          id: generateId()
        }
      ]);
    }
    setError(false);
    resetForm();
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 h-fit mx-2">
      <h2 className="font-black text-3xl text-center">Patients tracking</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Add patients and&nbsp;
        <span className="text-indigo-600 font-bold ">manage them</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg p-5"
        onSubmit={handleSubmit}
      >
        {error && <Error>All the fields are required</Error>}
        <div className="mb-5">
          <label
            htmlFor="petName"
            className="block text-gray-700 uppercase font-bold"
          >
            Pet's name
          </label>
          <input
            className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Dobby"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="ownerName"
            className="block text-gray-700 uppercase font-bold"
          >
            Owner's name
          </label>
          <input
            className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Harry"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="harry@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="registerDate"
            className="block text-gray-700 uppercase font-bold"
          >
            Register date
          </label>
          <input
            className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
            type="date"
            value={registerDate}
            onChange={(e) => setRegisterDate(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="symptoms"
            className="block text-gray-700 uppercase font-bold"
          >
            symptoms
          </label>
          <textarea
            className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
            placeholder="Describe your pet's symptoms"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>

        <button
          className="bg-indigo-600 w-full text-white uppercase font-bold hover:bg-indigo-700 py-2 transition-colors"
          type="submit"
        >
          {patient.id ? "Edit patient" : "Add patient"}
        </button>
      </form>
    </div>
  );
};
export default Form;
