// import React from "react";
import { createGlobalStyle } from "styled-components";
import { Footer, Navbar } from "../components";

const GlobalStyle = createGlobalStyle`
    background-color: var(--primary-color);
    secondary-color: var(--secondary-color);
    font-family:
        var(--font-family-primary),
        var(--font-family-secondary),
        var(--font-family-tertiary),
        var(--font-family-quaternary),
        var(--font-family-quinary);
`;

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default Layout;