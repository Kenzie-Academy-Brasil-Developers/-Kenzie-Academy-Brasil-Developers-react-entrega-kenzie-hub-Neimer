import { useState } from 'react'
import { GlobalStyle } from './styles/globalStyle'
import { ResetStyle } from './styles/reset'
import { RoutesMain } from './routes/RoutesMain'
import { UserProvider } from './provider/userContext'

//Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  return (
    <>
      <ResetStyle/>
      <GlobalStyle/>
      <UserProvider>
        <RoutesMain />
      </UserProvider>
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
