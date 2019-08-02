import React from 'react';
import styled from 'styled-components';
import {
  FormControl,
  InputLabel,
  FilledInput,
} from '@material-ui/core';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  height: 70%;
  width: 700px;
  padding: 3rem;
  background-color: #2F2C2C;
  border-radius: 0.5rem;
  box-shadow: 0 3px 6px 0 rgba(0,0,0,0.16);
  box-sizing: border-box;

  @media (max-width: 480px) {
    width: 350px;
  }
`;

const StyledFormControl = styled(FormControl)`
  width: 300px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const StyledFilledInput = styled(FilledInput)`
  background-color: rgba(255, 255, 255, 0.09);
  color: white;
  &.Mui-focused {
    background-color: rgba(255, 255, 255, 0.09);
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.13);
  }
  &:before {
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  }
  &:hover:before {
    border-bottom: 1px solid #fff;
  }
  &:after {
    border-bottom: 2px solid rgb(166, 212, 250);
  }
`;

const StyledInputLabel = styled(InputLabel)`
  color: rgba(255, 255, 255, 0.7);
  &.Mui-focused {
    color: rgb(166, 212, 250);
  }
`;

const Form = () => (
  <StyledForm>
    <StyledFormControl
      variant="filled"
      required
    >
      <StyledInputLabel
        htmlFor="full-name"
        shrink
      >
        Full Name
      </StyledInputLabel>
      <StyledFilledInput
        id="full-name"
        placeholder="John Doe"
      />
    </StyledFormControl>
    <StyledFormControl
      variant="filled"
      required
    >
      <StyledInputLabel
        htmlFor="email-address"
        shrink
      >
        Email Address
      </StyledInputLabel>
      <StyledFilledInput
        id="email-address"
        placeholder="example@email.com"
      />
    </StyledFormControl>
  </StyledForm>
);

export default Form;
