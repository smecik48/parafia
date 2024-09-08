import {Link, Outlet} from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`color:white; text-decoration:none;`;

function Layout(){
    return (
        <>
            <nav style={{
                backgroundColor: "#3064AF",
                marginBottom: "5px",
                borderColor: "white",
                borderWidth: "10px",
                borderBottomLeftRadius: "4px",
                borderBottomRightRadius: "4px"
            }}>
                <button type="button" className="btn btn-secondary"
                        style={{backgroundColor: "#AF601A", borderColor: "#784212", borderWidth: "2px"}}>
                    <StyledLink to="/">Strona Główna</StyledLink>
                </button>
                <button type="button" className="btn btn-secondary"
                        style={{backgroundColor: "#AF601A", borderColor: "#784212", borderWidth: "2px"}}>
                    <StyledLink to="/historia">Historia</StyledLink>
                </button>
                <button type="button" className="btn btn-secondary"
                        style={{backgroundColor: "#AF601A", borderColor: "#784212", borderWidth: "2px"}}>
                    <StyledLink to="/ogloszenia">Ogłoszenia</StyledLink>
                </button>
                <button type="button" className="btn btn-secondary"
                        style={{backgroundColor: "#AF601A", borderColor: "#784212", borderWidth: "2px"}}>
                    <StyledLink to="/planmszy">Porządek mszy i dodatkowe informacje</StyledLink>
                </button>

            </nav>
            <div style={{backgroundColor: "white", padding: "20px", borderRadius: "4px"}} className={"container-xl"}>
                <Outlet/>
            </div>
        </>
    )
}

export {Layout};