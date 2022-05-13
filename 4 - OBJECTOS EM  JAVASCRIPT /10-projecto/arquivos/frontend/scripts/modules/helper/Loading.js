import { main } from '../Context.js';

function Loading(isTruth) {
  const loading = document.querySelector('.loading');

  if (main && loading && isTruth === true) {
    main.style.display = 'none';
    loading.classList.remove('show');
  }
  if (main && loading && isTruth === false) {
    main.style.display = 'block';
    loading.classList.add('show');
  }
}

export default Loading;
