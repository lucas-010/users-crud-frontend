import React from "react";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.StyledHeader>
      <S.StyledContainerImg>
        <S.StyledImg src="https://img.icons8.com/?size=512&id=Ej0xqjuU6l1x&format=png" />
      </S.StyledContainerImg>
      <S.StyledLinksList>
        <S.StyledLink to={"/criar-usuario"}>
          <S.StyledListItem>Criar Usuário</S.StyledListItem>
        </S.StyledLink>
      </S.StyledLinksList>
    </S.StyledHeader>
  );
};
