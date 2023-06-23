import { GlobalStyle } from './styles/globalStyle'
import { ResetStyle } from './styles/reset'
import { RoutesMain } from './routes/RoutesMain'


//Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { UserContext } from './provider/userContext';


const App = () => {

  const { loading } = useContext(UserContext)

  return (
    <>
      <ResetStyle/>
      <GlobalStyle/>
        {loading ? <p> Carregando... </p> : <RoutesMain />}
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover={false}
        theme="dark"
       />
    </>
  )
}

export default App
