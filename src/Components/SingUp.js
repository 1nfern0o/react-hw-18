import React from "react";
import { useForm } from "react-hook-form"
import _ from "lodash/fp"
import {
    Container,
    Logo,
    Sing,
    SingWrapper,
    Title,
    LogoWrapper,
    Input,
    InputBlock,
    InputCheckbox,
    Button,
    LabelInput,
    InputText,
    BlockLink,
    aLink,
    Footer, Form
} from "./stylesComponents/stylesComponent";
import { Link } from "react-router-dom";

const SingUp = () => {

    const { register, errors, handleSubmit } = useForm();

    const onSubmin = (data) => {
        alert(JSON.stringify(data))
    }

    return(
        <Container>
            <Sing>
                <SingWrapper>
                    <LogoWrapper>
                        <Logo/>
                        <Title>Sing up</Title>
                    </LogoWrapper>
                    <Form onSubmit={handleSubmit(onSubmin)}>
                            <Input
                                type="text"
                                name="firstName"
                                className="error-message"
                                placeholder="First Name*"
                                ref={register({
                                    required: true,
                                    minLength: 2,
                                    pattern: /^[A-Za-z]+$/i,
                                })}
                            />
                            {_.get("firstName.type", errors) === "minLength" && (
                                <p
                                    style={{
                                        color: "red",
                                        fontSize: "18px"
                                    }}
                                >
                                    First name must have at least 2 characters
                                </p>
                            )}
                            <Input
                                type="text"
                                name="lastName"
                                placeholder="Last Name*"
                                ref={register({
                                    required: true,
                                    minLength: 3,
                                    pattern: /^[A-Za-z]+$/i,
                                })}
                            />
                            {_.get("lastName.type", errors) === "pattern" && (
                                <p
                                    style={{
                                        color: "red",
                                        fontSize: "18px"
                                    }}
                                >
                                    Last name must have at least 3 characters
                                </p>
                            )}
                        <Input
                            type="text"
                            name="email"
                            placeholder="Email address *"
                            ref={register({
                                required: true,
                                pattern: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                            })}
                        />
                        {_.get("email.type", errors) === "pattern" && (
                            <p
                                style={{
                                    color: "red",
                                    fontSize: "18px",
                                }}
                            >
                                Enter the correct email.
                            </p>
                        )}
                        <Input
                            type="password"
                            name="password"
                            placeholder="Password *"
                            ref={register({
                                required: true,
                                pattern: /(?=.*[a-z])(?=.*[A-Z])[0-9!@#$%^&*a-zA-Z]{8,}/g,
                            })}
                        />
                        {_.get("password.type", errors) === "pattern" && (
                            <p
                                style={{
                                    color: "red",
                                    fontSize: "18px",
                                }}
                            >
                                Password must have at least 8 characters, uppercase and lowercase letters.
                            </p>
                        )}
                        <LabelInput>
                            <InputCheckbox type="checkbox"/>
                            <InputText>I want to receive inspiration, marketing promotions and updates via email.</InputText>
                        </LabelInput>
                    </Form>
                    <Button type="button" onClick={handleSubmit(onSubmin)}>Sing up</Button>
                    <BlockLink>
                        <aLink>Forgot password?</aLink>
                        <Link
                            to="/login"
                            style={{
                                textDecoration: "none",
                                color: "#90caf9"
                            }}
                        >
                            Don't have an account? Sing Up
                        </Link>
                    </BlockLink>
                    <Footer>Copyright © Your Website 2020.</Footer>
                </SingWrapper>
            </Sing>
        </Container>
    )
}

export default SingUp;