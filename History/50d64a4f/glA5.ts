export type StateType = {
  isOpenModalWindow: ModalWindowType;
};

export omit ModalWindowType {

   1: 'promotion',
   'gameOver',
   'surrender',
   'offerDrawSend',
   'offerDrawGet',
   null;
}
