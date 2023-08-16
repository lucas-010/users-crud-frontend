import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const FormTitle = styled.h2`
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormField = styled.div`
  margin-bottom: 15px;

  label {
    margin-bottom: 5px;
  }

  input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 300px;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #1e3a8a;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #154378;
  }
`;
