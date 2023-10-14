import icons from 'url:../../img/icons.svg';
export default class View {
  // เป็นตัวกลางที่ให้ view ทุกตัวสามารถใช้ฟังก์ชันในนี้ได้เป็นตัวไว้สำหรับสืบทอด
  _data;
  render(data) {
    if (!data || data?.length === 0) return this.renderError();
    console.log(data);
    this._data = data;
    const markup = this._gennerateMarkup();
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }
  _clear() {
    this._parentEl.innerHTML = '';
  }
  renderSpinner() {
    const markup = `
      <div class="spinner">
              <svg>
                <use href="${icons}#icon-loader"></use>
              </svg>
            </div>
      `;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }
  renderMessage(message = this._message) {
    const markup = `
      <div class="message">
              <div>
                <svg>
                  <use href="${icons}#icon-smile"></use>
                </svg>
              </div>
              <p>${message}</p>
            </div> 
      `;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `
      <div class="error">
              <div>
                <svg>
                  <use href="${icons}#icon-alert-triangle"></use>
                </svg>
              </div>
              <p>${message}</p>
            </div> 
      `;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }
}
