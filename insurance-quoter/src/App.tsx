import InsuranceApp from "./components/insurance-app"
import { QuoterProvider } from "./context/quoter-provider"

const App = () => {
  return (
    <QuoterProvider>
      <InsuranceApp />
    </QuoterProvider>
  )
}
export default App