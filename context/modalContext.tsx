import React, { ReactNode, createContext } from "react";
import { useModal } from "../hooks/useModal";
import Modal from "../components/modal";

let ModalContext;
let { Provider } = (ModalContext = createContext());

interface propType {
  children: ReactNode;
}

let ModalProvider = (props: propType) => {
  let { modal, openModal, closeModal } = useModal();

  return (
    <Provider value={{ modal, openModal, closeModal }}>
      <Modal />
      {props?.children}
    </Provider>
  );
};

export { ModalContext, ModalProvider };
