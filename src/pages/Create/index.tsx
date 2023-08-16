import React, { useState } from "react";
import * as S from "./styles";
import { FormData } from "./types";

const Create: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  return (
    <S.FormContainer>
      <S.FormTitle>Formulário</S.FormTitle>
      <S.Form onSubmit={handleSubmit}>
        <S.FormField>
          <label>Nome </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </S.FormField>
        <S.FormField>
          <label>Email </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </S.FormField>
        <S.FormField>
          <label>Senha </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </S.FormField>
        <S.SubmitButton type="submit">Enviar</S.SubmitButton>
      </S.Form>
    </S.FormContainer>
  );
};

export default Create;
