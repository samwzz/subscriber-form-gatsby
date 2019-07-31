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
  height: 50%;
  width: 50%;
  padding: 5rem;
  background-color: #2F2C2C;
  border-radius: 0.5rem;
  box-shadow: 0 3px 6px 0 rgba(0,0,0,0.16);
`;

const StyledFormControl = styled(FormControl)`
  width: 33%;
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
    border-bottom: 1px solid white;
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
      <StyledFilledInput id="full-name" />
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
      <StyledFilledInput id="email-address" />
    </StyledFormControl>
  </StyledForm>
);

export default Form;
