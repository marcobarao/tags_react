import styled, { css, keyframes } from "styled-components";

export const WrapTag = styled.span`
  position: relative;
  margin-right: 10px;
  transition: opacity 200ms linear;

  &.-remove {
    opacity: 0;
  }
`;

export const VibrationChecked = keyframes`
    33% {
      transform: rotate(-10deg)
    }
    66% {
      transform: rotate(10deg)
    }
    100% {
      transform: rotate(0);
    }
`;

export const VibrationNonChecked = keyframes`
    33% {
      transform: rotate(-15deg)
    }
    66% {
      transform: rotate(15deg)
    }
    100% {
      transform: rotate(0);
    }
`;

export const Tag = styled.label.attrs({ active: props => props.active })`
  display: inline-block;
  font-size: 18px;
  background-color: var(--color-second-light);
  animation: ${props => (props.active ? VibrationNonChecked : VibrationChecked)}
    300ms linear;
  ${props =>
    props.active &&
    css`
      background-color: var(--color-first);
      color: var(--color-zero);
    `};
  padding: 8px;
  cursor: pointer;

  &::selection {
    background-color: transparent;
  }
`;

export const Remove = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  margin-right: -10px;
  width: 20px;
  height: 20px;
  line-height: 22px;
  text-align: center;
  background: var(--color-second);
  color: var(--color-zero);
  transform: translateY(-50%);
  font-size: 12px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 100ms linear;

  &:hover,
  &focus {
    transform: translateY(-50%) scale(1.2);
  }

  &::selection {
    background-color: transparent;
  }
`;
