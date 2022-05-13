const MenuMobile = (mobileElement, headerListElement, className) => {
  const btn = document.querySelector(mobileElement);
  const headerList = document.querySelector(headerListElement);

  const handleToggleMobile = (e) => {
    e.preventDefault();
    btn.classList.toggle(className);
    headerList.classList.toggle(className);
  };

  const init = () => {
    if (btn && headerList) btn.addEventListener('click', handleToggleMobile);
  };

  return { init };
};

export default MenuMobile;
