function ShowInfoProduts() {
  const modal = document.querySelector('.modal-bg');

  function closeModal({ target, currentTarget }) {
    if (target === currentTarget) {
      modal.classList.remove('ative');
      modal.removeEventListener('click', closeModal);
    }
  }
  function changeContentOnListItem(li) {
    const imgLi = li.querySelector('.content-img').src;
    const titleLi = li.querySelector('.content-info-h4-title').innerText;
    const priceLi = li.querySelector('.content-info-h4-price').innerText;
    const categoryLi = li.querySelector('.content-info-h4-category').innerText;
    const src = `url('${imgLi}') no-repeat center center`;

    const img = modal.querySelector('.modal-bg-image');
    img.style.background = src;
    modal.querySelector('.content-info-h4-title').innerText = titleLi;
    modal.querySelector('.content-info-h4-price').innerText = priceLi;
    modal.querySelector('.content-info-h4-category').innerText = categoryLi;
  }
  function handleClick({ currentTarget }) {
    changeContentOnListItem(currentTarget);
    modal.classList.add('ative');
    modal.addEventListener('click', closeModal);
  }
  function init() {
    const li = document.querySelectorAll('.main-content-list li');
    li.forEach((i) => i.addEventListener('click', handleClick));
  }
  return { init };
}

export default ShowInfoProduts;
