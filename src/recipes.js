
export function filterItems(items, query) {
  query = query.toLowerCase();
  return items.filter(item =>
    item.name.split(' ').some(word =>
      word.toLowerCase().startsWith(query)
    )
  );
}

export const foods = [{
  id: 0,
  name: 'cake',
  description: 'Preheat oven to 350, bake for 45 minutes'
}, {
  id: 1,
  name: 'pie',
  description: 'Preheat oven to 350, bake for 45 minutes'
}, {
  id: 2,
  name: 'cookies',
  description: 'Preheat oven to 350, bake for 45 minutes'
}, {
  id: 3,
  name: 'Shish kebab',
  description: 'Shish kebab is a popular meal of skewered and grilled cubes of meat.'
}, {
  id: 4,
  name: 'Dim sum',
  description: 'Dim sum is a large range of small dishes that Cantonese people traditionally enjoy in restaurants for breakfast and lunch'
}];


/*

const recipes = [
    {
        id:1,
        image: {
            src: "https://www.southernliving.com/thmb/6jANEFrMvwSWlRlxCDCzulxXQZY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2641101_Funfetti_Cake_702-2000-a2d8f835fd8f4a928fa17222e71241c3.jpg",
            alt: '',
        },
        name: " cake",
        direction: " Preheat oven to 350, bake for 45 minutes", 
        difficulty: " hard", 
        stars: " ***",
        status: 1,
    },
    {
        id:2,
        image: {
            src: " https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/6/28/0/FNK_Apple-Pie_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382545039107.jpeg",
            alt: '',
        },
        name: " pie",
        direction: "Preheat oven to 400, bake 30 minutes ", 
        difficulty: " basic", 
        stars: " **",
        status: 2,
    },
    {
        id:3,
        image: {
            src: " https://images-gmi-pmc.edge-generalmills.com/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg",
            alt: '',
        },
        name: " cookies",
        direction: "preheat oven to 350, bake 30 minutes ", 
        difficulty: " easy", 
        stars: " *",
        status: 3,
    }
 ]

 export default recipes
 */