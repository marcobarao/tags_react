import React, { Component } from "react";

import MainInput from "../MainInput";
import MainTags from "../MainTags";

import { Form } from "./styles";

class FormCollab extends Component {
  state = {
    tags: [
      { name: "Alegria", active: false },
      { name: "Tristeza", active: false },
      { name: "Amor", active: false },
      { name: "Raiva", active: false }
    ]
  };

  checkKey = event => {
    const keyPressed = event.keyCode;
    if (keyPressed === 13 || keyPressed === 9) {
      event.preventDefault();
      this.addNew(event.target.value);
      event.target.value = "";
    }
  };

  addNew = value => {
    const { tags } = this.state;
    this.setState({ tags: [...tags, { name: value, active: true }] });
  };

  handleClick = ({ target }) => {
    const newTags = this.state.tags.map(
      tag =>
        tag.name === target.textContent
          ? { name: tag.name, active: !tag.active }
          : tag
    );
    this.setState({ tags: newTags });
  };

  removeTag = ({ target }) => {
    const parent = target.parentNode;
    const label = parent.querySelector("label");
    const tagText = label.textContent;
    const newTags = this.state.tags.filter(tag => tag.name !== tagText);
    this.setState({ tags: newTags });
  };

  render() {
    const { tags } = this.state;
    return (
      <Form>
        <MainInput checkKey={this.checkKey} />
        <MainTags
          tags={tags}
          removeTag={this.removeTag}
          handleClick={this.handleClick}
        />
      </Form>
    );
  }
}

export default FormCollab;
