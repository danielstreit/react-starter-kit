
const categories = {
  appetizer: {
    text: 'Appetizers',
    priority: 1,
  },
  lunch: {
    text: 'Lunch',
    priority: 2,
  },
  dessert: {
    text: 'Dessert',
    priority: 3,
  },
};

const CategoryStore = {
  getCategories() {
    return categories;
  },
};

export default CategoryStore;
