import React from "react";
import * as S from "./styles";
import { User } from "../../types";
import { BiSolidUserCircle } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import axios from "axios";

interface CardProps extends User {
  fetchUsers: () => Promise<void>;
}

export const Card = ({ name, email, id, fetchUsers }: CardProps) => {
  const deleteUser = async () => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    fetchUsers();
  };
  return (
    <S.StyledCard>
      <S.StyledIcon>
        <BiSolidUserCircle fontSize={70} />
      </S.StyledIcon>
      <S.StyledName>
        {id} - {name}
      </S.StyledName>
      <S.StyledEmail>{email}</S.StyledEmail>
      <S.StyledContainerIcons>
        <MdDelete
          onClick={deleteUser}
          fontSize={40}
          style={{ marginRight: "20px", cursor: "pointer" }}
        />
        <AiFillEdit fontSize={40} style={{ cursor: "pointer" }} />
      </S.StyledContainerIcons>
    </S.StyledCard>
  );
};
