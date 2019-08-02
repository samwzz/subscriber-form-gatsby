import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  FormControl,
  InputLabel,
  FilledInput,
  Select,
  MenuItem,
  Chip,
  Avatar,
} from '@material-ui/core';
import orange from '@material-ui/core/colors/orange';
import data from '../data';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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

const StyledFormFields = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
    border-bottom: 2px solid ${orange[500]};
  }
`;

const StyledInputLabel = styled(InputLabel)`
  color: rgba(255, 255, 255, 0.7);
  &.Mui-focused {
    color: ${orange[500]};
  }
`;

const StyledH1 = styled.h1`
  color: #fff;
`;

const StyledH5 = styled.h5`
  color: rgba(255, 255, 255, 0.7);
`;

const StyledSelect = styled(Select)`
  .MuiSelect-icon {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const Chips = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  height: 100px;
  max-height: 100px;
  overflow-y: auto;
`;

const StyledChip = styled(Chip)`
  margin: 0 0.5rem 0.5rem 0;
  background-color: ${props => `#${props.chipcolor}`};
  .MuiChip-label {
    color: ${props => props.chipcolor === 'FFFFFF' ? '#000' : '#fff'};
  }
`;

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      color: '#fff',
      backgroundColor: '#424242',
    },
  },
};
const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [teams, setTeams] = useState({});
  const [selectedTeams, setSelectedTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const fetchedTeams = await Promise.resolve(data);
      setTeams(fetchedTeams);
    };
    fetchTeams()
  }, [])

  const handleDelete = chipToDelete => () => {
    setSelectedTeams(selectedTeams.filter(team => team.alias !== chipToDelete.alias));
  }

  return (
    <StyledForm>
      <div>
        <StyledH1>ClutchPoints NBA Mailing list</StyledH1>
        <StyledH5>Information will be collected for promotional purposes only.</StyledH5>
        <StyledH5>* Required</StyledH5>
      </div>
      <StyledFormFields>
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
            value={name}
            onChange={e => setName(e.target.value)}
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
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </StyledFormControl>
        <StyledFormControl
          variant="filled"
          required
        >
          <StyledInputLabel
            htmlFor="team-select"
            shrink
          >
            Select Teams
          </StyledInputLabel>
          <StyledSelect
            multiple
            value={selectedTeams}
            onChange={e => setSelectedTeams(e.target.value)}
            input={(
            <StyledFilledInput
              id="email-address"
              placeholder="example@email.com"
            />)}
            MenuProps={MenuProps}
          >
            {Object.keys(teams).map(key => {
              const team = teams[key];
              const { alias, market, name } = team;
              if (market === 'Team') { return };
              return (
                <MenuItem
                  key={key}
                  value={team}
                >
                  {`${market} ${name}`}
                </MenuItem>
              ) 
            })}
          </StyledSelect>
        <Chips>
          {selectedTeams.map(selected => (
            <StyledChip
              key={selected.alias}
              label={selected.name}
              chipcolor={selected.team_color}
              onDelete={handleDelete(selected)}
            />
          ))}
        </Chips>
        </StyledFormControl>
      </StyledFormFields>
    </StyledForm>
  );
};

export default Form;
