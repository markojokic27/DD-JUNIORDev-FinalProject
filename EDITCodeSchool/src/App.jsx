import './App.css'
import EditCodeSchool from './EditCodeSchool'
import { FormProvider } from './context/formContext'
function App() {
  return (
    <>
      <FormProvider>
        <EditCodeSchool />
      </FormProvider>
    </>
  )
}

export default App
