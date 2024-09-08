import './App.css'
import './Historia'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./Layout.tsx";
import PlanMszy from "./PlanMszy.tsx";
import Historia from "./Historia.tsx";
import StronaGlowna from "./StronaGlowna.tsx";
import baner from "./baner.png";
import Ogloszenia from "./Ogloszenia.tsx";

function App() {

  return (
    <>
        <header style={{borderTopLeftRadius:5, borderTopRightRadius:5}}>
            <img src={baner} style={{maxHeight:200, maxWidth:1000, borderTopLeftRadius:5, borderTopRightRadius:5}}></img>
        </header>
        <div style={{maxWidth:1000}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<StronaGlowna/>}/>
                        <Route path="Historia" element={<Historia />} />
                        <Route path="Ogloszenia" element={<Ogloszenia />}/>
                        <Route path="PlanMszy" element={<PlanMszy />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    </>
  )
}

export default App
