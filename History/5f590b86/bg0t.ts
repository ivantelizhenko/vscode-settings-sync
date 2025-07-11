type ModalStateType = { showModalStatus: ModalVariantsType };

export type ModalVariantsType = 'closedModal' | 'addUser' | 'confirmation';

export type ModalContextValueType = ModalStateType & {
  setStatusModal: (status: ModalVariantsType) => void;
};

export type SetStatusModalAction = {
  type: 'modal/setStatus';
  payload: ModalVariantsType;
};
export type CloseModalAction = {
  type: 'modal/close';
};

export type ActionType = SetStatusModalAction | CloseModalAction;
