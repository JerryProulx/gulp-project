import $ from 'jquery';

class ModalOverlay {
  constructor(){
    this.modal = $('.modal');
    this.body = $('body');
    this.modalCloseButton = $('.modal__close-button');
    this.getInTouchButton = $('.open-modal');
    this.modalText = $('.modal__text')
    this.events();
  }

  events() {
    // Clicking the open modal
    this.handleOpenModal();


    // Clicking the close modal
    this.handleCloseModal();


    // Press the escape key
    $(document).keydown((e) => {
      this.handleKeyPress(e);
    })
  }

  handleOpenModal(){
    this.getInTouchButton.on('click', (e) => {
      e.preventDefault();
      this.openModal();
    });
  }

  openModal(){
      this.modal.addClass('modal--open');
      this.body.addClass('modal-open');
      return false;
  }


  //Handler for actions

  handleCloseModal(){
    this.modalText.on('click', (e) => {
      e.stopPropagation();
    });
    this.modalCloseButton.on('click', () => {
      this.closeModal();
    });
    this.modal.on('click', (e) => {
      this.closeModal();
    });
  }

  closeModal(){
    this.modal.removeClass('modal--open');
    this.body.removeClass('modal-open');
    return false;
  }

  handleKeyPress(e){
      if(this.modal.hasClass('modal--open') && e.keyCode === 27){
        this.closeModal();
      }
  }

}

export default ModalOverlay;
