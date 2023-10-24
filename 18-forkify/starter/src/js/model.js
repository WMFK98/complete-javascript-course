import { async } from 'regenerator-runtime';
import { API_URL, RES_PER_PAGE } from './config';
import { getJSON } from './helpers';
export const state = {
  // ตะกร้าเตรียมใส่
  recipe: {},
  search: {
    query: '', //ค้นหา
    results: [], // เจ็บข้อมูลที่ค้นหาเจอ
    resultsPerPage: RES_PER_PAGE,
    page: 1,
  },
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);
    let { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
      image: recipe.image_url,
    };
    // console.log(state.recipe);
  } catch (err) {
    console.error(err);
    throw err; // ส่งไปให้ดักจับที่ controller
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}?search=${query}`);
    const { recipes } = data.data;
    state.search.results = recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      };
    });
  } catch (err) {}
};

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page; // ทำให้อัพเดทค่าภายในตัว
  // ตั้งค่าเริ่มต้นให้อยู่ที่หน้าหนึ่ง
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;
  return state.search.results.slice(start, end); //0-10 แต่จริงๆคือเอาตัวที่ 0-9 เพราะ 10 ที่เราเขียนวันหมายถึงจุด ก่อนหน้า 10
};

loadSearchResults('pizza');
