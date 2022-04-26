import client from './client';

const PATH = 'categories/';

const categoriesApi = {
  getFoodsByCategory: async ({ type, pageId, pageCount }) => {
    const options = {
      pageId: pageId || 1,
      ...(pageCount ? { pageCount } : {}),
    };
    const response = await client.get(`${PATH}${type}`, options);
    console.log(response);
  },
};

export default categoriesApi;
