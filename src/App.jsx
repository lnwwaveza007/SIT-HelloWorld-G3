
import './App.css'
import HomePage from './HomePage/HomePage';
import ReservationForm from './ReservationForm/ReservationForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Footer/Footer';
import { ReversationProvider } from './contexts/useReversation'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={
            <ReversationProvider>
              <ReservationForm />
            </ReversationProvider>
          } />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  )
}

export default App
