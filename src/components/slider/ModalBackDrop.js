import React from "react";
import styles from "./ModalBackDrop.module.css";

const modalBackDrop = (WrappedComponent) => {
  return class ModalBackDrop extends React.Component {
    state = {
      isOpen: false,
    };

    componentDidMount() {
      this.setState({ isOpen: true });
      window.addEventListener("keydown", this.closeModalKeydown);
      document.addEventListener("click", this.closeModalOverlay);
      document.styleSheets.overflow = "hidden";
    }

    componentWillUnmount() {
      window.removeEventListener("keydown", this.closeModalKeydown);
      document.removeEventListener("click", this.closeModalOverlay);
      document.styleSheets.overflow = "auto";
    }

    closeModal = () => {
      this.props.close();
    };

    render() {
      return (
        <div data-type="modal" className={styles.modal}>
          <WrappedComponent {...this.props} onClick={this.closeModal} />
        </div>
      );
    }
  };
};

export default modalBackDrop;
