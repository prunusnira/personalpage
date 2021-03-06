import styled from "styled-components";

export const OuterBox = styled.div`
    display: flex;
    flex-direction: column;
`

export const Header = styled.header`
    flex: 0 0 auto;
`

export const Footer = styled.footer`
    flex: 0 0 auto;

    display: flex;
    flex-direction: column;
    
	background-color: #111;
	font-size: 80%;

    a {
        color:#aaaaff;
    }
    
    span {
        color:#dddddd;
    }
`

export const Center = styled.div`
    flex: 1 0 auto;
    display: flex;
    justify-content: center;

    padding-left: 10px;
    padding-right: 10px;

    height: calc(100vh - 46px);
    overflow-y: auto;
`