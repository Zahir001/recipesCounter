import { useState } from 'react';
import img1 from '../assets/image/mutton.jpg'
import img2 from '../assets/image/vegPulao.jpg'
import img3 from '../assets/image/gobiMatar.webp'
import img4 from '../assets/image/daalMakahani.webp'
import img5 from '../assets/image/paneerTikka.jpg'
import img6 from '../assets/image/pannerMasala.jpg'
import img7 from '../assets/image/chef.webp'

var recipeData = [
  {
    id: 1,
    name: "Mutton Karahi",
    image: img1,
    upload_by: "New Chef",
    uploaded_date: "April 11, 2024",
    rating: 4.5,
    title_desc: "How to make Mutton Karahi",
    isFav: false,
    chefImg: img7,
    description: "I believe you can make great food with everyday ingredients even if you’re short on time and cost conscious. You just need to cook clever and get creative!I share tried and tested Vegetarian recipes on my food blog since 2009,with plenty of tips so that your cooking journey is easier.",
    nutrionalDesc: 'Nutrition information is calculated using an ingredient database and should be considered an estimate. In cases where multiple ingredient alternatives are given, the first listed is calculated for nutrition. Garnishes and optional ingredients are not included.',
    recipe: ["½ cup (125 ml) oil or ghee", "5 (600 g) tomatoes, diced very finely", "1 bulb garlic minced", "1 thumb sized chunk of ginger minced","2 teaspoon salt or to taste","2 teaspoon paprika or kashmiri red chilli powder","1.5 teaspoon black pepper","1 teaspoon chilli flakes","0.5 teaspoon cumin powder","0.5 teaspoon coriander powder","1 teaspoon nigella seeds kalonji, optional","2 green chillis slit in half if you like your Karahi hot","0.5 bunch coriander chopped","ginger cut into matchsticks as much as desired"],
    instruction:["Heat up your oil/ghee in a wok, cast iron skillet or karahi. Add the lamb/mutton and fry on high, stirring constantly until all the meat has changed its colour","Add the minced ginger and garlic and give this a quick fry for 1-2 minutes, until the raw smell goes away. Don't allow the ginger and garlic to colour too much","Add all the spices and 1/1.5 cups (250-375ml) of water for lamb and 2.5/3 cups (625-750ml) of water for mutton. Bring to a boil, then turn the heat down to low and put to lid on. Simmer for 1hr for lamb and 2hrs for mutton. Keep checking during this time to ensure there is sufficient water and top up a little as and if it looks like there's no water left in the pan.","Once the simmer time is up, the meat should be almost done, and there shouldn't be much water in the pan. The pan will look quite oily (remember, you can remove the oil at the end if you want!).","Turn the heat to high. Add the tomatoes. Let this cook on high, stirring constantly and scraping the bottom of the pan. The tomatoes will release A LOT of juices and you may feel a bit overwhelmed with the moisture at this point, but stay strong. Keep stirring and just allow everything to concentrate","Once the gravy (masala) looks wet but jammy and glossy, and the oil is beginning to come to the surface, add in the chopped coriander and green chilli. Turn the heat to low and allow this to simmer without the lid on for 5 minutes.","Garnish with additional chopped coriander and the matchstick-cut ginger."],
    calories: 663,
    fat: "25g",
    carbs: "72g",
    protien: "38g"
  },
  {
    id: 2,
    name: "Veg Pulao",
    image: img2,
    upload_by: "New Chef",
    uploaded_date: "April 11, 2024",
    rating: 4.5,
    title_desc: "How to make veg pulao",
    isFav: false,
    chefImg: img7,
    description: "I believe you can make great food with everyday ingredients even if you’re short on time and cost conscious. You just need to cook clever and get creative!I share tried and tested Vegetarian recipes on my food blog since 2009,with plenty of tips so that your cooking journey is easier.",
    nutrionalDesc: "Nutrition information is calculated using an ingredient database and should be considered an estimate. In cases where multiple ingredient alternatives are given, the first listed is calculated for nutrition. Garnishes and optional ingredients are not included.",
    recipe: ["3 cups of basmati rice", "1 cup frozen carrots and peas", "3 1/2 cups of water", "2 tsp cumin seeds","2 tsp crushed red pepper flakes","2 tsp garam masala","1/2 tbsp roasted cumin seed powder","1/2 tbsp roasted coriander seed powder","2 tsp black pepper powder (optional)","1 bay leaf","1 black cardamom pod","1/2 inch piece cinnamon stick","2 tsp salt or to taste","1 tbsp chicken bullion powder (optional)","4 tbsp oil"],
    instruction:["Rinse and soak the rice for 10 mins.","In a stock pot heat oil, to this add the frozen vegetables and sauté for a minute.","Now all all the spices and chicken bullion powder and cook for around 30 seconds or until fragrant.","Add water and cover the pot until it comes to a boil.","Drain the rice and set aside.","Remove the cover and add the drained rice to the liquid.","Stir gently and let it cook for around 5 to 7 minutes on medium flame.","Once the rice has absorbed 80% of the liquid, turn down the flame to low, cover with the lid and let the rice steam until it’s cooked thru for about 10 mins.","After 10 minutes, the rice should be cooked thru and absorbed the liquid, with the use of a rice spoon or fork fluff the rice to check.","Enjoy with your favorite gravy."],
    calories: 663,
    fat: "25g",
    carbs: "72g",
    protien: "38g"
  },
  {
    id: 3,
    name: "Gobi Matar",
    image: img3,
    upload_by: "New Chef",
    uploaded_date: "April 11, 2024",
    rating: 4.5,
    title_desc: "How to make Gobi Matar",
    isFav: false,
    chefImg: img7,
    description: "I believe you can make great food with everyday ingredients even if you’re short on time and cost conscious. You just need to cook clever and get creative!I share tried and tested Vegetarian recipes on my food blog since 2009,with plenty of tips so that your cooking journey is easier.",
    nutrionalDesc: "Nutrition information is calculated using an ingredient database and should be considered an estimate. In cases where multiple ingredient alternatives are given, the first listed is calculated for nutrition. Garnishes and optional ingredients are not included.",
    recipe: ["½ cup (125 ml) oil or ghee", "5 (600 g) tomatoes, diced very finely", "1 bulb garlic minced", "1 thumb sized chunk of ginger minced","2 teaspoon salt or to taste","2 teaspoon paprika or kashmiri red chilli powder","1.5 teaspoon black pepper","1 teaspoon chilli flakes","0.5 teaspoon cumin powder","0.5 teaspoon coriander powder","1 teaspoon nigella seeds kalonji, optional","2 green chillis slit in half if you like your Karahi hot","0.5 bunch coriander chopped","ginger cut into matchsticks as much as desired"],
    instruction:["Heat up your oil/ghee in a wok, cast iron skillet or karahi. Add the lamb/mutton and fry on high, stirring constantly until all the meat has changed its colour","Add the minced ginger and garlic and give this a quick fry for 1-2 minutes, until the raw smell goes away. Don't allow the ginger and garlic to colour too much","Add all the spices and 1/1.5 cups (250-375ml) of water for lamb and 2.5/3 cups (625-750ml) of water for mutton. Bring to a boil, then turn the heat down to low and put to lid on. Simmer for 1hr for lamb and 2hrs for mutton. Keep checking during this time to ensure there is sufficient water and top up a little as and if it looks like there's no water left in the pan.","Once the simmer time is up, the meat should be almost done, and there shouldn't be much water in the pan. The pan will look quite oily (remember, you can remove the oil at the end if you want!).","Turn the heat to high. Add the tomatoes. Let this cook on high, stirring constantly and scraping the bottom of the pan. The tomatoes will release A LOT of juices and you may feel a bit overwhelmed with the moisture at this point, but stay strong. Keep stirring and just allow everything to concentrate","Once the gravy (masala) looks wet but jammy and glossy, and the oil is beginning to come to the surface, add in the chopped coriander and green chilli. Turn the heat to low and allow this to simmer without the lid on for 5 minutes.","Garnish with additional chopped coriander and the matchstick-cut ginger."],
    calories: 663,
    fat: "25g",
    carbs: "72g",
    protien: "38g"
  },
  {
    id: 4,
    name: "Daal Makhani",
    image: img4,
    upload_by: "New Chef",
    uploaded_date: "April 11, 2024",
    rating: 4.5,
    title_desc: "How to make Daal Makhani",
    isFav: false,
    chefImg: img7,
    description: "I believe you can make great food with everyday ingredients even if you’re short on time and cost conscious. You just need to cook clever and get creative!I share tried and tested Vegetarian recipes on my food blog since 2009,with plenty of tips so that your cooking journey is easier.",
    nutrionalDesc: "Nutrition information is calculated using an ingredient database and should be considered an estimate. In cases where multiple ingredient alternatives are given, the first listed is calculated for nutrition. Garnishes and optional ingredients are not included.",
    recipe: ["3 cups of basmati rice", "1 cup frozen carrots and peas", "3 1/2 cups of water", "2 tsp cumin seeds","2 tsp crushed red pepper flakes","2 tsp garam masala","1/2 tbsp roasted cumin seed powder","1/2 tbsp roasted coriander seed powder","2 tsp black pepper powder (optional)","1 bay leaf","1 black cardamom pod","1/2 inch piece cinnamon stick","2 tsp salt or to taste","1 tbsp chicken bullion powder (optional)","4 tbsp oil"],
    instruction:["Rinse and soak the rice for 10 mins.","In a stock pot heat oil, to this add the frozen vegetables and sauté for a minute.","Now all all the spices and chicken bullion powder and cook for around 30 seconds or until fragrant.","Add water and cover the pot until it comes to a boil.","Drain the rice and set aside.","Remove the cover and add the drained rice to the liquid.","Stir gently and let it cook for around 5 to 7 minutes on medium flame.","Once the rice has absorbed 80% of the liquid, turn down the flame to low, cover with the lid and let the rice steam until it’s cooked thru for about 10 mins.","After 10 minutes, the rice should be cooked thru and absorbed the liquid, with the use of a rice spoon or fork fluff the rice to check.","Enjoy with your favorite gravy."],
    calories: 663,
    fat: "25g",
    carbs: "72g",
    protien: "38g"
  },
  {
    id: 5,
    name: "Paneer Tikka",
    image: img5,
    upload_by: "New Chef",
    uploaded_date: "April 11, 2024",
    rating: 4.5,
    title_desc: "How to make Paneer Tikka",
    isFav: false,
    chefImg: img7,
    description: "I believe you can make great food with everyday ingredients even if you’re short on time and cost conscious. You just need to cook clever and get creative!I share tried and tested Vegetarian recipes on my food blog since 2009,with plenty of tips so that your cooking journey is easier.",
    nutrionalDesc: "Nutrition information is calculated using an ingredient database and should be considered an estimate. In cases where multiple ingredient alternatives are given, the first listed is calculated for nutrition. Garnishes and optional ingredients are not included.",
    recipe: ["½ cup (125 ml) oil or ghee", "5 (600 g) tomatoes, diced very finely", "1 bulb garlic minced", "1 thumb sized chunk of ginger minced","2 teaspoon salt or to taste","2 teaspoon paprika or kashmiri red chilli powder","1.5 teaspoon black pepper","1 teaspoon chilli flakes","0.5 teaspoon cumin powder","0.5 teaspoon coriander powder","1 teaspoon nigella seeds kalonji, optional","2 green chillis slit in half if you like your Karahi hot","0.5 bunch coriander chopped","ginger cut into matchsticks as much as desired"],
    instruction:["Heat up your oil/ghee in a wok, cast iron skillet or karahi. Add the lamb/mutton and fry on high, stirring constantly until all the meat has changed its colour","Add the minced ginger and garlic and give this a quick fry for 1-2 minutes, until the raw smell goes away. Don't allow the ginger and garlic to colour too much","Add all the spices and 1/1.5 cups (250-375ml) of water for lamb and 2.5/3 cups (625-750ml) of water for mutton. Bring to a boil, then turn the heat down to low and put to lid on. Simmer for 1hr for lamb and 2hrs for mutton. Keep checking during this time to ensure there is sufficient water and top up a little as and if it looks like there's no water left in the pan.","Once the simmer time is up, the meat should be almost done, and there shouldn't be much water in the pan. The pan will look quite oily (remember, you can remove the oil at the end if you want!).","Turn the heat to high. Add the tomatoes. Let this cook on high, stirring constantly and scraping the bottom of the pan. The tomatoes will release A LOT of juices and you may feel a bit overwhelmed with the moisture at this point, but stay strong. Keep stirring and just allow everything to concentrate","Once the gravy (masala) looks wet but jammy and glossy, and the oil is beginning to come to the surface, add in the chopped coriander and green chilli. Turn the heat to low and allow this to simmer without the lid on for 5 minutes.","Garnish with additional chopped coriander and the matchstick-cut ginger."],
    calories: 663,
    fat: "25g",
    carbs: "72g",
    protien: "38g"
  },
  {
    id: 6,
    name: "Paneer Masala",
    image: img6,
    upload_by: "New Chef",
    uploaded_date: "April 11, 2024",
    rating: 4.5,
    title_desc: "How to make Paneer Masala",
    isFav: false,
    chefImg: img7,
    description: "I believe you can make great food with everyday ingredients even if you’re short on time and cost conscious. You just need to cook clever and get creative!I share tried and tested Vegetarian recipes on my food blog since 2009,with plenty of tips so that your cooking journey is easier.",
    nutrionalDesc: "Nutrition information is calculated using an ingredient database and should be considered an estimate. In cases where multiple ingredient alternatives are given, the first listed is calculated for nutrition. Garnishes and optional ingredients are not included.",
    recipe: ["3 cups of basmati rice", "1 cup frozen carrots and peas", "3 1/2 cups of water", "2 tsp cumin seeds","2 tsp crushed red pepper flakes","2 tsp garam masala","1/2 tbsp roasted cumin seed powder","1/2 tbsp roasted coriander seed powder","2 tsp black pepper powder (optional)","1 bay leaf","1 black cardamom pod","1/2 inch piece cinnamon stick","2 tsp salt or to taste","1 tbsp chicken bullion powder (optional)","4 tbsp oil"],
    instruction:["Rinse and soak the rice for 10 mins.","In a stock pot heat oil, to this add the frozen vegetables and sauté for a minute.","Now all all the spices and chicken bullion powder and cook for around 30 seconds or until fragrant.","Add water and cover the pot until it comes to a boil.","Drain the rice and set aside.","Remove the cover and add the drained rice to the liquid.","Stir gently and let it cook for around 5 to 7 minutes on medium flame.","Once the rice has absorbed 80% of the liquid, turn down the flame to low, cover with the lid and let the rice steam until it’s cooked thru for about 10 mins.","After 10 minutes, the rice should be cooked thru and absorbed the liquid, with the use of a rice spoon or fork fluff the rice to check.","Enjoy with your favorite gravy."],
    calories: 663,
    fat: "25g",
    carbs: "72g",
    protien: "38g"
  }

]
export default recipeData