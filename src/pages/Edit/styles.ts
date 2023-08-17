import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
`;

export const FormTitle = styled.h2`
  margin-bottom: 10px;
`;

export const Form = styled.form``;

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
  background-color: #1e3a8a;
  color: white;
  padding: 8px 15px;
  border: none;
  cursor: pointer;
  border-radius: 6px;
`;
