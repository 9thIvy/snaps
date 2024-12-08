import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '/src/pages/HomePage.jsx';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="HomePage" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
