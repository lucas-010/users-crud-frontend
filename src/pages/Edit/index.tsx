import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as S from "./styles";
import axios from "axios";

interface EditFormProps {
  fetchUsers: () => void;
}

interface FormData {
  name: string;
  email: string;
}

const EditForm: React.FC<EditFormProps> = ({ fetchUsers }) => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/user/${id}`);
        const userData = response.data[0];
        setFormData({
          name: userData.name,
          email: userData.email,
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, [id]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:8080/user/${id}`, formData);
      fetchUsers();
      navigate("/");
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    }
  };

  return (
    <S.FormContainer>
      <S.FormTitle>Editar Usuário</S.FormTitle>
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
        <S.SubmitButton type="submit">Atualizar</S.SubmitButton>
      </S.Form>
    </S.FormContainer>
  );
};

export default EditForm;
