const menuItems = [
  {
    name: 'Mac Daddy Mac ‘n’ Cheese',
    description: 'Guy puts his signature indulgent spin on this timeless comfort food by cooking the cream sauce in reserved bacon fat. He adds roasted garlic and shallots to a creamy combo of pepper Jack and cheddar cheese, and then tops the pasta with breadcrumbs and diced bacon for an irresistibly golden crust.',
    category: 'lunch',
    imageUrl: 'food/Mac-Daddy-Mac-n-Cheese.jpeg',
  }, {
    name: 'Koi Fish Tacos',
    description: 'Frying fish to perfection is easy when you follow Guy’s lead. He starts by coating the cod with a tangy lime-and-tequila marinade, and then batters and fries it until a light and crisp crust forms. Layer the fish into warm corn tortillas with fresh pico de gallo and tequila lime aioli for a creamy tang to tie this eat-with-your-hands dish together.',
    category: 'lunch',
    imageUrl: 'food/tacos.jpeg',
  }, {
    name: 'Cuban Pork Chop with Mojo',
    description: 'Orange juice is certainly delicious as a breakfast drink and also in Guy’s Cuban-inspired spicy citrus sauce, known as mojo. Though this sauce is the star of his pork chops, the citrus marinade and dry rub are also key, as they flavor the meat from the outset. Add orange juice and white wine as the pork chops cook, then remove the meat and simmer until a thick sauce forms.',
    category: 'lunch',
    imageUrl: 'food/pork-chop.jpeg',
  }, {
    name: 'Texas French Toast Bananas Foster',
    description: 'Guy takes French toast up a notch when he batters thick-cut Texas toast in a creamy egg mixture that gets a rich element from orange liqueur. Top the golden toast with a buttery caramel sauce for a breakfast indulgence or decadent dessert.',
    category: 'dessert',
    imageUrl: 'food/French-Toast-Bananas-Foster.jpeg',
  }, {
    name: 'Ryder’s Turkey Chili',
    description: 'If there’s one recipe that epitomizes Guy’s big and bold flavors, it’s his turkey chili for Food Network Magazine. Guy flavors this hearty stew with pasilla chile peppers — he rehydrates the dry kind for convenience — and spices like cumin, chili powder and paprika. Add three types of beans for heft, plus a bit of cheddar cheese as a garnish.',
    category: 'lunch',
    imageUrl: 'food/BrownBag.jpeg',
  }, {
    name: 'Double-Fried French Fries',
    description: 'Though they’ve been a longtime sidekick to burgers, Guy puts the spotlight on fries. Before double-frying the potatoes — his trick for the crispiest texture — he soaks them in water to remove the excess starch. Season with salt and pepper for a finger-licking-good snack.',
    category: 'appetizer',
    imageUrl: 'food/french-fries.jpeg',
  }, {
    name: 'Chicken Avocado Egg Roll',
    description: 'Guy’s crispy fried egg rolls feature Asian-inspired ingredients like ginger and bamboo shoots that he sautes with chicken and veggies for the flavorful filling. Layer the mixture atop creamy avocado and fry until golden brown for a crowd-pleasing appetizer.',
    category: 'appetizer',
    imageUrl: 'food/Chicken-Avocado-Egg-Rolls.jpeg',
  }, {
    name: 'Killer Inside-Out Burger with Worcestershire Tomato Ketchup',
    description: 'Bite into this next-level burger and you’ll know why it gets the name “inside out.” Guy sandwiches a bacon-and-chorizo mixture with Swiss cheese in between two burger patties for an over-the-top filling that only gets better with the addition of his homemade ketchup.',
    category: 'lunch',
    imageUrl: 'food/burger.jpeg',
  }, {
    name: 'Guy-talian Nachos',
    description: 'Guy gives his nachos a twist by using fried wontons instead of chips. Layer the crisp wontons with a meaty mixture featuring ground beef and Italian turkey sausage, and a topping of creamy mozzarella cheese. Once the nachos broil and the cheese is melted, top with fresh Italian salsa and additional toppings like ricotta and salami for a party-ready meal.',
    category: 'appetizer',
    imageUrl: 'food/talian-nachos.jpeg',
  }, {
    name: 'Cin-ful Peach Cobbler',
    description: 'The beauty of Guy’s peach cobbler is that it can be made year round, thanks to his use of frozen peaches. Top the fruit with a buttery crumb topping that Guy takes to the next level with slivered almonds and cranberries. Serve with vanilla ice cream or fresh whipped cream for an over-the-top dessert.',
    category: 'dessert',
    imageUrl: 'food/Peach-Cobbler.jpeg',
  },
];

const MenuStore = {
  getMenuItems() {
    return menuItems;
  },
};

export default MenuStore;
