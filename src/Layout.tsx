import {Link, Outlet} from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`color:white; text-decoration:none;`;

function Layout(){
    return (
        <>
            <nav>
                <button type="button" className="btn btn-secondary">
                    <StyledLink to="/">Strona Główna</StyledLink>
                </button>
                <button type="button" className="btn btn-secondary">
                    <StyledLink to="/historia">Historia</StyledLink>
                </button>
                <button type="button" className="btn btn-secondary">
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