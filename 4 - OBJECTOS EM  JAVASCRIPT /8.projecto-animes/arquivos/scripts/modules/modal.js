function Modal(modalElement, buttonelement) {
  const modal = document.querySelector(modalElement);
  const btn = document.querySelector(buttonelement);

  function openModal() {
    modal.classList.add('ative');
    if (modal.classList.contains('ative')) {
      modal.addEventListener('click', closeModal);
    }
  }

  function closeModal(e) {
    if (e.target === e.currentTarget) {
      e.target.classList.remove('ative');
    }
  }

  function initModal() {
    btn.addEventListener('click', openModal);
  }

  return { openModal, closeModal, initModal };
}
export default Modal;
