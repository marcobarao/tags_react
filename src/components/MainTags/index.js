import React from "react";

import { WrapTag, Tag, Remove } from "./styles.js";
const MainTags = props => (
  <fieldset>
    {props.tags.map(tag => (
      <WrapTag key={tag.name}>
        <Tag active={tag.active} onClick={props.handleClick}>
          {tag.name}
        </Tag>
        <Remove onClick={props.removeTag}>X</Remove>
      </WrapTag>
    ))}
  </fieldset>
);

export default MainTags;
