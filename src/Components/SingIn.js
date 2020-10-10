import React, { useState } from "react";
import {
    Container,
    Logo,
    Sing,
    SingWrapper,
    Title,
    LogoWrapper,
    Form,
    Input,
    InputCheckbox,
    Button,
    LabelInput,
    InputText,
    BlockLink,
    aLink,
    Error,
    Footer,
} from "./stylesComponents/stylesComponent";
import { Link } from "react-router-dom";

const newState =  {
    password: "",
    email: "",
}

const SingIn = () => {
    const [state, setState] = useState(newState);
    const [error, setError] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        for (let key in state) {
            if (state[key] === "") {
                setError(`You must enter a ${key}`);
                return;
            }
        }
    };

    const onInput = (e) => {
        const inputName = e.currentTarget.name;
        const value = e.currentTarget.value;

        setState((prevState) => ({
            ...prevState,
            [inputName]: value,
        }));
    }

    return(
        <Container>
            <Sing>
                <SingWrapper>
                    <LogoWrapper>
                        <Logo/>
                        <Title>Sing in</Title>
                    </LogoWrapper>
                    <Form onSubmit={onSubmit}>
                        <Input
                            type="text"
                            name="email"
                            value={state.email}
                            onChange={onInput}
                            placeholder="Email address*"
                        />
                        <Input
                            type="password"
                            name="password"
                            value={state.password}
                            onChange={onInput}
                            placeholder="Password*"
                        />
                        <LabelInput>
                            <InputCheckbox type="checkbox" onChang={onInput}/>
                            <InputText>Remember me</InputText>
                        </LabelInput>
                        {error && (
                            <Error>
                                <p>{error}</p>
                            </Error>
                        )}
                        <Button>Sing in</Button>

                        <BlockLink>
                            <aLink href="#">Forgot password?</aLink>
                            <Link
                                to="/register"
                                style={{
                                    textDecoration: "none",
                                    color: "#90caf9"
                                }}
                            >
                                Don't have an account? Sing Up
                            </Link>
                        </BlockLink>
                        <Footer>Copyright © Your Website 2020.</Footer>
                </Form>
                </SingWrapper>
            </Sing>
        </Container>
    )
}

export default SingIn;