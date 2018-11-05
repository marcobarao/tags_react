import React from "react";

import { Label, Title, Subtitle, Input } from "./styles.js";
const MainInput = props => (
  <Label>
    <Title>Como você se sentiu hoje?</Title>
    <Subtitle>
      Você pode selecionar os sentimentos que estão ai, ou criar um novo
      sentimento escrevendo o nome dela no campo abaixo e apertando o ENTER
    </Subtitle>
    <Input
      placeholder="Não tem o sentimento que você quer? Escreva!"
      onKeyDown={props.checkKey}
    />
  </Label>
);

export default MainInput;
