import React, { useCallback, useEffect, useContext, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { ModalContext } from "../../context/modalContext";
import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import { CloseIcon, ArrowDownIcon, SettingsIcon } from "@chakra-ui/icons";
import Widget from "./Widget";

interface contextType {
  closeModal: Function;
  openModal: Function;
  modal: boolean;
}

const Modal = () => {
  const { closeModal, openModal, modal } =
    useContext<contextType>(ModalContext);

  const closeOnEscapeKeyDown = useCallback((e) => {
    if ((e.charCode || e.keyCode) === 27) {
      closeModal();
    }
  }, []);

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, [closeOnEscapeKeyDown]);

  const [haveMetamask, sethaveMetamask] = useState(true);
  const [isConnected, setIsConnected] = useState(false);
  const [accountAddress, setAccountAddress] = useState("");

  useEffect(() => {
    const { ethereum } = window;
    const checkMetamaskAvailability = async () => {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      sethaveMetamask(true);
    };
    checkMetamaskAvailability();
  }, []);

  const connectWallet = async () => {
    const { ethereum } = window;
    try {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccountAddress(accounts[0]);
      setIsConnected(true);
    } catch (error) {
      setIsConnected(false);
    }
  };

  return (
    <CSSTransition in={modal} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
      <div className="modal" onClick={() => closeModal()}>
        <Box
          minH={"500px"}
          minW={"683px"}
          padding={10}
          bg={"#0d111c"}
          border={"2px solid"}
          borderColor={"#969cab"}
          borderRadius={"20px"}
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <Flex justifyContent={"space-between"}>
            <h4></h4>
            <Box
              color={"white"}
              cursor={"pointer"}
              onClick={() => closeModal()}
              maxH={"20px"}
            >
              <CloseIcon />
            </Box>
          </Flex>
          {isConnected ? (
            <Widget />
          ) : (
            <Button
              minH={"50px"}
              width={"100%"}
              borderRadius={"10px"}
              background={"#424288"}
              color={"white"}
              onClick={connectWallet}
            >
              Connect Wallet
            </Button>
          )}
        </Box>
      </div>
    </CSSTransition>
  );
};

export default Modal;
