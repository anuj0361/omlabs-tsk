import React from "react";
import { ModalContext } from "../../context/modalContext";

const ModalTrigger = () => {
  let { openModal } = React.useContext(ModalContext);

  return (
    <>
      <p>Short Demo Page</p>
      <button
        className="mt-6 rounded  bg-purple-700 text-purple-100 px-5 h-12"
        onClick={() => openModal()}
      >
        open this modal!
      </button>
    </>
  );
};

export default ModalTrigger;
