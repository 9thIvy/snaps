import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '/src/pages/HomePage.jsx';
import ProductDetailsPage from '/src/pages/PictureDetailsPage.jsx';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/HomePage" element={<HomePage/>}/>
        <Route path="/picture/:pictureId" element={<ProductDetailsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
