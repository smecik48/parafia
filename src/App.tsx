import './App.css'
import './Historia'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./Layout.tsx";
import PlanMszy from "./PlanMszy.tsx";
import Historia from "./Historia.tsx";
import StronaGlowna from "./StronaGlowna.tsx";

function App() {

  return (
    <>
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<StronaGlowna/>}/>
                        <Route path="Historia" element={<Historia />} />
                        <Route path="PlanMszy" element={<PlanMszy />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    </>
  )
}

export default App
