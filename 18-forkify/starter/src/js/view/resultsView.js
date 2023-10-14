import View from './View';
import icons from 'url:../../img/icons.svg';
class ResultsView extends View {
  _parentEl = document.querySelector('.results');
  _errorMessage = `No recipes found for your query! Please try again i kak ;)`;

  _gennerateMarkup(data) {
    return this._data.map(this._gennerateMarkupPreview).join('');
  }

  _gennerateMarkupPreview(data) {
    return `
    <li class="preview">
    <a class="preview__link" href="#${data.id}">
      <figure class="preview__fig">
        <img src="${data.image}" alt="${data.title}" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${data.title}</h4>
        <p class="preview__publisher">${data.publisher}</p>
      </div>
    </a>
  </li>
    `;
  }
}

export default new ResultsView();
