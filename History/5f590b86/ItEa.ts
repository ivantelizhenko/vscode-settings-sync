type ModalStateType = {};

export type SetStatusModalAction = {
  type: 'modal/setStatus';
  payload: ModalVariantsType;
};
export type CloseModalAction = {
  type: 'modal/close';
};

export type ActionType = SetStatusModalAction | CloseModalAction;
