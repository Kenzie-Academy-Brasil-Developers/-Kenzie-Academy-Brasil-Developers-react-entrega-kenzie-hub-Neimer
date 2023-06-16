import { useState } from 'react'
import { GlobalStyle } from './styles/globalStyle'
import { ResetStyle } from './styles/reset'
import { Login } from './pages/Login'
import { RoutesMain } from './routes/RoutesMain'

//Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  
  const [accountInfo, setAccountInfo] = useState({})


  const notify = (message) => {

    toast(message , {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

  }


  return (
    <>
      <ResetStyle/>
      <GlobalStyle/>
      <RoutesMain notify={notify} setAccountInfo={setAccountInfo} accountInfo={accountInfo}/>
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
