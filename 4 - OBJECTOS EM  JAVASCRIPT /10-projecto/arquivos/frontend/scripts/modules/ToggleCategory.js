const ToggleCategory = (categoryElement, spanElement, className) => {
  const category = document.querySelector(categoryElement);
  const span = document.querySelector(spanElement);

  function handleToggle() {
    category.classList.toggle(className);
  }

  function init() {
    if (category && span) span.addEventListener('click', handleToggle);
  }

  return { init };
};

export default ToggleCategory;
