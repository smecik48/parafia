import {Helmet} from "react-helmet";

import Photos from "./Photos.tsx";

function StronaGlowna(){
    return(
        <div style={{maxWidth:"1000px"}}>
            <Helmet><title>Parafia pw. Znalezienia Krzyża Świętego - Mokrelipie</title></Helmet>
            <b style={{fontSize:"20px"} }>Aktualności</b> <br/>

            <Photos/>

        </div>

    )
}

export default StronaGlowna;