const Template = ({ image, name, category, price }) => {
  return `<li class="content-item" title="${name}">
            <img src="${image}" alt="name" class="content-img" />
             <div class="content-info">
                <h4 class="content-info-h4">
                  <span class="content-info-h4-title">${name}</span>
                  <span class="content-info-h4-price">${price} MT</span>
                </h4>
                <p>Category:<span class="content-info-h4-category">${category}</span><span>★★★★★</span></p>
              </div>
        </li>`;
};

export default Template;
