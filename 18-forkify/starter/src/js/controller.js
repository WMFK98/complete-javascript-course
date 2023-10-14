// import icons from '../img/icons.svg'; //parcel

// ที่ต้องทำเพราะว่า markup ของเราที่โหลดมามันไม่ได้แปลงให้เป็นที่อยู่ของไฟล์ parcel ดังนั้นเราเลยต้องดึงผาดที่อยู่มา อีกที
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model.js'; // จะได้เป็น obj model ที่มีค่าของ export ทั้งหมด
import recipeView from './view/recipeView.js';
import searchView from './view/searchView.js';
import resultsView from './view/resultsView.js';
import { async } from 'regenerator-runtime';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
// if (module.hot) {
//   module.hot.accept(); // สิ่งนี้จะช่วยให้เมื่อมีการแก้ไขตัวของ parcel ทำให้ไม่ต้องหลบหน้าใหม่ทุกครั้ง
// }

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1); // เอาค่าของ hash ซึ่งคือถ้า /#...
    if (!id) return;
    recipeView.renderSpinner(); //เอาไว้ทำระหว่างรอโหลด
    //1) Loading recipe
    await model.loadRecipe(id);
    // const { recipe } = model.state;
    //2) Rendering recipe
    recipeView.render(model.state.recipe); // ส่งค่าให้ data
    // const recipeView = new recipeView(model.state.recipe) // ความหมายเดียวกันกับตัวบนก็คือเอาไปสร้างอ๊อฟเจ็กในที่นี้
  } catch (err) {
    recipeView.renderError();
  }
};
const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    //1 getQuery
    const query = searchView.getQuery();
    if (!query) return;
    //2 load
    await model.loadSearchResults(query); // รันเพื่อให้เอาไปเก็บใน state
    //3 render
    resultsView.render(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};

// สิ่งที่จะทำงานเมื่อเริ่มต้น controller
const init = function () {
  // เอาไว้จัดการ addlisterner
  recipeView.addHandlerRender(controlRecipe);
  searchView.addHandlerSearch(controlSearchResults);
};

init();
// ฟังก์ชันนี้เนื่องจากเป็นการทำงานร่วมกับดองจึงไม่ควรจะมาอยู่ controller but ควรไปอยู่ใน viewแทน
// ['hashchange', 'load'].forEach(ev =>
//   window.addEventListener(ev, controlRecipe)
// );

// window.addEventListener('hashchange', controlRecipe); // ทำงานเมื่อเปลี่ยน hash
// window.addEventListener('load', controlRecipe); // ทำงานเมื่อโหลดหน้าเว็บ
