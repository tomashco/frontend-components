import React from "react";

import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortAwesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@tomashco/minibit-ui.ui.button";
import styled from "styled-components";

const StyledButtons = styled(Button)`
  .fa-icon {
    padding: 0.5em;
  }
  .fa-icon:hover {
    -webkit-animation: fa-beat 1s 1 linear;
    -moz-animation: fa-beat 1s 1 linear;
    -o-animation: fa-beat 1s 1 linear;
    animation: fa-beat 1s 1 linear;
  }
  @keyframes fa-beat {
    from {
      transform: translateY(0);
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1.3, 1.3);
    }
    to {
      transform: translateY(-10px);
      transform: scale(1, 1);
    }
  }
`;

export type SocialButtonsProps = {
  Linkedin: string;
  GitHub: string;
  Mail: string;
};

export default function SocialButtons({
  Linkedin,
  GitHub,
  Mail,
}: SocialButtonsProps) {
  return (
    <StyledButtons secondary strong>
      <FontAwesomeIcon
        className="fa-icon"
        color="var(--primary-color)"
        size="2x"
        icon={faLinkedinIn}
        onClick={() => window.open(Linkedin, "_blank")}
      />
      <FontAwesomeIcon
        className="fa-icon"
        color="var(--primary-color)"
        size="2x"
        icon={faGithub}
        onClick={() => window.open(GitHub, "_blank")}
      />
      <FontAwesomeIcon
        className="fa-icon"
        color="var(--primary-color)"
        size="2x"
        icon={faEnvelope}
        onClick={() => window.open(Mail, "_blank")}
      />
    </StyledButtons>
  );
}
