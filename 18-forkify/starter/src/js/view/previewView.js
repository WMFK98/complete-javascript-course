import View from './View';

class PreviewView extends View {
  // เป็นเหมือนตัวประกอบที่เอาไว้ใช้ใน results กับ bookmark
  _parentEl = '';
  _gennerateMarkup() {
    const id = window.location.hash.slice(1); // เอา "#" ออก //
    return `
        <li class="preview">
        <a class="preview__link ${
          this._data.id === id ? 'preview__link--active' : '' // เปลี่ยนเพิ่มเอฟเฟคให้กับเมนูที่เรา select ให้เป็นแปลก hover ค้าง
        }" href="#${this._data.id}">
          <figure class="preview__fig">
            <img src="${this._data.image}" alt="${this._data.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${this._data.title}</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
          </div>
        </a>
      </li>
        `;
  }
}

export default new PreviewView();
