import React from "react";
import * as S from "./styles";
import { User } from "../../types";
import { BiSolidUserCircle } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

export const Card = ({ name, email, id }: User) => {
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
        <MdDelete fontSize={40} style={{ marginRight: "20px" }} />
        <AiFillEdit fontSize={40} />
      </S.StyledContainerIcons>
    </S.StyledCard>
  );
};
