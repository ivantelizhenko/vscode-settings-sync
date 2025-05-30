export type StateType = {
  isOpenModalWindow: ModalWindowType;
};

export enum ModalWindowType {
  'promotion',
  'gameOver',
  'surrender',
  'offerDrawSend',
  'offerDrawGet',
  null,
}
