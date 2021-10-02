import React, { ReactNode } from "react";

import styled from "styled-components";

const BaseButton = styled.button`
  height: 50px;
  padding: 0.5em 1em;

  display: flex;
  align-items: center;
  justify-content: center;

  user-select: none;
  cursor: pointer;

  box-shadow: ${({ strong }) =>
    strong ? "-2px 5px 0 0px var(--primary-light)" : "none"};

  border-radius: 3em;
  border: ${({ secondary }) =>
    secondary ? "4px solid var(--primary-light)" : "none"};

  transition: all 100ms ease-in-out;

  background-color: ${({ disabled, primary, dataTheme }) =>
    disabled
      ? "var(--text-inactive)"
      : primary
      ? "var(--primary-color)"
      : "var(--secondary-button)"};

  &:hover {
    box-shadow: ${({ strong }) =>
      strong && "-2px 5px 0 0px var(--primary-light)"};
  }

  &:active {
    box-shadow: ${({ strong }) =>
      strong && "-1px 3px 0 0px var(--primary-heavy)"};
    transform: translateY(4px);
  }
`;

export type ButtonProps = {
  loader?: ReactNode;
  primary?: boolean;
  loading?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  strong?: boolean;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  loader,
  primary,
  secondary,
  disabled,
  onClick,
  loading,
  children,
  strong,
  ...rest
}) => {
  return (
    <BaseButton
      {...rest}
      disabled={disabled}
      loading={loading}
      primary={primary}
      secondary={secondary}
      onClick={onClick}
      strong={strong}
    >
      {children}
    </BaseButton>
  );
};

export default Button;
