import React from "react";
import * as S from "./styles";
import { User } from "./types";
import { BiSolidUserCircle } from "react-icons/bi";

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
    </S.StyledCard>
  );
};
