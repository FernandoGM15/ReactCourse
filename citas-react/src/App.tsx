import { useState, useEffect } from "react"
import Form from "./components/Form/Form"
import Header from "./components/Header/Header"
import PatientList from "./components/PatientList/PatientList"

export interface PatientI {
  id: string;
  petName: string;
  ownerName: string;
  email: string;
  registerDate: string;
  symptoms: string;
}
function App() {
  const [patients, setPatients] = useState<PatientI[]>([]);
  const [patient, setPatient] = useState<PatientI>({
    petName: '',
    ownerName: '',
    email: '',
    id: '',
    registerDate: '',
    symptoms: ''
  })

  useEffect(() => {
    const getLocalStorage = () => {
      const patients = JSON.parse(localStorage.getItem('patients') || '[]') as PatientI[];
      setPatients(patients)
    }
    getLocalStorage()
  }, [])

  useEffect(() => {
    const patientsString = JSON.stringify(patients)
    localStorage.setItem("patients", patientsString)
  }, [patients])

  const deletePatient = (id: string) => {
    const updatedPatients = patients.filter(patientState => patientState.id !== id)
    setPatients(updatedPatients);
  }
  //Lo que este dentro del return es lo que se renderizará en el DOM 
  return (
    <div className="container mx-auto py-10">
      <Header />
      <div className="pt-12 md:flex gap-3">
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientList
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  )
}

export default App
