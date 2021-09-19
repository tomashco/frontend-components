import React from "react";

import styles from "./toggle-button.module.scss";

export type ToggleButtonProps = {
  clickHandler?: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export default function ToggleButton({ clickHandler }: ToggleButtonProps) {
  return (
    <div onClick={clickHandler}>
      <input type="checkbox" id="toggle" className={styles.toggleCheckbox} />
      <label htmlFor="toggle" className={styles.toggleLabel}>
        <span className={styles.toggleLabelBackground}></span>
      </label>
    </div>
  );
}
