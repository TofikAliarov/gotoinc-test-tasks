import React, { useState } from "react";
import Sliders from "../slider/Sliders";
import styles from "./ColorPicker.module.css";
import { connect } from "react-redux";

function ColorPicker({ colors }) {
  const [showModal, setShowModal] = useState(false);

  const close = () => {
    setShowModal((prev) => false);
  };
  return (
    <div className={styles.colorBody}>
      <div
        className={styles.colorBox}
        style={{ backgroundColor: ` rgb(${colors.BgColor})` }}
      ></div>
      <button className={styles.button} onClick={() => setShowModal(true)}>
        Open box color settings
      </button>
      {showModal && <Sliders close={() => close()} />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    colors: state.colors,
  };
};

export default connect(mapStateToProps)(ColorPicker);
