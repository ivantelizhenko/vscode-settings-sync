import styled from 'styled-components';
import { Button } from '../components/buttons/Button';
import {
  cloneElement,
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { ModalVariantsType } from '../contexts/userContext/AppContextTypes';

const StyledModal = styled.div``;

const StyledOverlay = styled.div``;

type ModalContextType = {
  openName: ModalVariantsType;
  open: Dispatch<SetStateAction<ModalVariantsType>>;
  close: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

function Modal({ children }: { children: ReactNode }) {
  const [openName, setOpenName] = useState<ModalVariantsType>('closedModal');

  const close = () => setOpenName('closedModal');
  const open = setOpenName;

  const ctx: ModalContextType = { openName, close, open };

  return <ModalContext.Provider value={ctx}>{children}</ModalContext.Provider>;
}

type OpenPropsType = {
  children: ReactNode;
  opens: string;
};

function Open({ children, opens: opensWindowName }: OpenPropsType) {
  const x = useContext(ModalContext);
  console.log(x);
  return cloneElement(children, {
    onClick: () => {
      open(opensWindowName);
    },
  });
}

export default Modal;

// return (
//   <StyledOverlay>
//     <Button width="4.8rem">Close</Button>

//     <StyledModal>Modal</StyledModal>
//   </StyledOverlay>
// );
