const specialsData = [
  {
    title: "Summer Berry Delight",
    description: "A refreshing vanilla sponge layered with fresh summer berries and whipped cream.",
    price: "$25.00",
    
  },
  {
    title: "Autumn Spice Cake",
    description: "Moist pumpkin cake with cinnamon cream cheese frosting — perfect for fall.",
    price: "$28.00",
    
  },
  {
    title: "Winter Wonderland Cake",
    description: "White chocolate cake with peppermint frosting, dusted with snow-like sugar.",
    price: "$30.00",
    
},
 {
    title: "Vanilla sponge Cake",
    description: "Light vanilla cake with nice vanilla buttercream, soft and fluffy in texture.",
    price: "$26.00",
    
  },
   {
    title: "swiss roll ",
    description: "Light sponge cake with nice buttercream, garnished with jam in it.",
    price: "$26.00",
    
  },
   {
    title: " strawberry shortCake",
    description: "baked with real strawberrries, which is both healthy and nourishing.",
    price: "$20.00",
    
  },
   {
    title: "Japanese castella Cake",
    description: "soft and fluffy in texture,easy to chew.",
    price: "$70.00",
    
  },
   {
    title: " Almond Cake",
    description: "made with almond nuts,nutty and tasty.",
    price: "$16.00",
    
  },
     {
    title: "Red velvet Cake",
    description: "red,soft and sweet.",
    price: "$26.00",
    
  }
];

// Load specials dynamically
const specialsContainer = document.getElementById('specials');

specialsData.forEach(item => {
  const card = document.createElement('div');
  card.className = 'special-card';

  card.innerHTML = `
    <img src="${item.image}" alt="${item.title}">
    <div class="content">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <p><strong>${item.price}</strong></p>
    </div>
  `;
  specialsContainer.appendChild(card);
});