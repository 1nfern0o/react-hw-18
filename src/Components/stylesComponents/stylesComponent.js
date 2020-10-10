import styled from "styled-components";
import logo from "./images/logo.svg";

const Container = styled.div`
    max-width: 1140px;
    padding: 0 15px;
    margin: 0 auto;
`;

const Sing = styled.section`
    display: flex;
    justify-content: center;
`;

const SingWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 500px;
    height: 100%;
    padding: 50px;
    background-color: #121212;
`;

const Logo = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #f48fb2;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 20px;
    margin-bottom: 10px;
`;

const Title = styled.h2` margin: 0; `;

const LogoWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

const Form = styled.form`
    margin: 0 auto;
`;

const InputBlock = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Input = styled.input`
    color: #fff;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #8f8f8f;
    outline: none;
    padding: 10px 15px;
    font-size: 18px;
    box-sizing: border-box;
    margin-bottom: 20px;
    background-color: transparent;
    
`;

const InputCheckbox = styled.input`
    margin-right: 15px;
`;

const LabelInput = styled.label`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const InputText = styled.span`
    font-size: 18px;
`;

const Button = styled.button`
    background-color: #90caf9;
    outline: none;
    text-transform: uppercase;
    border: none;
    border-radius: 10px;
    padding: 15px;
    transition: all .2s ease-out;
    cursor: pointer;
    width: 100%;
    :hover {
        background-color: #64aadb;
    }
    margin-bottom: 20px;
`;

const BlockLink = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    color: #90caf9;
`;

const aLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    
    &:hover {
        text-decoration: underline;
    }
`;

const Error = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #ea1919;
  margin: o auto;
`;

const Footer = styled.footer`
    display: flex;
    justify-content: center;
    color: #777777
`;

export { Container, Logo, Sing, SingWrapper, Title, LogoWrapper, Form, Input, InputBlock, InputCheckbox, InputText, Button, LabelInput, BlockLink, aLink, Error, Footer };

/*Text forgot password: #6b94b5
* Color placeholder: #8f8f8f
* Color copyright: #777777
* */