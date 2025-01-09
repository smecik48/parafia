import {Helmet} from "react-helmet";
import {useEffect, useState} from "react";






export default function Ogloszenia(){
    const [ogl, setOgl] = useState([""])
    const [title, setTitle] = useState("");
    useEffect(()=> {
        fetch("http://localhost:5173/ogloszenia.txt")
            .then((res) => res.text())
            .then((text) => {
                setTitle(text.split('\n')[0]);
                setOgl(text.split('\n').slice(1))
            })
            .catch((e) => console.error(e));

    })


    return <>
        <Helmet><title>Parafia Mokrelipie - Ogłoszenia Parafialne</title></Helmet>
        <>
            <p>
                <b>
                {title}
                </b>
            </p>
            <ol style={{textAlign: "left"}}>
                {ogl.map(item =>
                    <li key={item}>{item}</li>
                )}


            </ol>

        </>

    </>


}