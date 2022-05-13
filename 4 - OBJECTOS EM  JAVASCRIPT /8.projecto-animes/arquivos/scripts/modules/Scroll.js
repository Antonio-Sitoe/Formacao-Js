function Scroll(buttonArrowElement, sectionsElement, getSrc) {
  const buttonArrow = document.querySelector(buttonArrowElement);
  const sections = document.querySelectorAll(sectionsElement);
  let i = 0;

  function ScrollAnimation(section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  function changeSVgOnButton(src) {
    const svg = buttonArrow.querySelector('img');
    svg.src = src;
  }
  function slowDown(e) {
    e.preventDefault();
    if (!(i >= sections.length)) {
      const id = sections[i].getAttribute('id');
      buttonArrow.setAttribute('href', `#${id}`);

      ScrollAnimation(sections[i]);
      if (i === sections.length - 1) changeSVgOnButton(getSrc.up);
      else changeSVgOnButton(getSrc.down);
      i++;
    } else {
      i = 0;
    }
  }
  function init() {
    buttonArrow.addEventListener('click', slowDown);
  }
  return { init, ScrollAnimation, changeSVgOnButton };
}

export default Scroll;
