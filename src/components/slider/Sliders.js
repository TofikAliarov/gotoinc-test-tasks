import React from "react";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import styles from "./Slider.module.css";
import modalBackDrop from "./ModalBackDrop";
import { connect, useDispatch } from "react-redux";
import { colorReducers } from "../../redux/colorReducers";
function Sliders({ close, colors }) {
  const dispatch = useDispatch();

  const {
    actions: { changeColorR, changeColorG, changeColorB, changeBgColor },
  } = colorReducers;

  const onChangeColorR = (event, newValue) => {
    dispatch(changeColorR(newValue));
  };

  const onChangeColorG = (event, newValue) => {
    dispatch(changeColorG(newValue));
  };

  const onChangeColorB = (event, newValue) => {
    dispatch(changeColorB(newValue));
  };

  const onSubmit = () => {
    const BgColor = `${colors.colorR},${colors.colorG},${colors.colorB}`;
    dispatch(changeBgColor(BgColor));
    close();
  };

  const onCancel = () => {
    dispatch(changeBgColor("222,19,229"));
    dispatch(changeColorR(222));
    dispatch(changeColorG(19));
    dispatch(changeColorB(229));
    close();
  };

  return (
    <>
      <div className={styles.sliderModal}>
        <div className={styles.sliderList}>
          <div className={styles.sliderItem}>
            <Slider
              value={colors.colorR}
              min={0}
              step={1}
              max={255}
              onChange={onChangeColorR}
              valueLabelDisplay="auto"
              aria-labelledby="non-linear-slider"
            />
            <p className={styles.text}>R: {colors.colorR}</p>
          </div>
          <div className={styles.sliderItem}>
            <Slider
              value={colors.colorG}
              min={0}
              step={1}
              max={255}
              onChange={onChangeColorG}
              valueLabelDisplay="auto"
              aria-labelledby="non-linear-slider"
            />

            <p className={styles.text}>G: {colors.colorG}</p>
          </div>
          <div className={styles.sliderItem}>
            <Slider
              value={colors.colorB}
              min={0}
              step={1}
              max={255}
              onChange={onChangeColorB}
              valueLabelDisplay="auto"
              aria-labelledby="non-linear-slider"
            />

            <p className={styles.text}>B: {colors.colorB}</p>
          </div>
        </div>
        <div className={styles.buttons}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => onCancel()}
          >
            Cancle
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => onSubmit()}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    colors: state.colors,
  };
};
export default modalBackDrop(connect(mapStateToProps)(Sliders));
