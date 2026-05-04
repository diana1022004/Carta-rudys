const menu = [
  // ============ COCTELES CLÁSICOS ============
  {
    id: 'smoked-mojito',
    category: 'clasicos',
    name: 'Smoked Mojito',
    price: 29000,
    description: 'El clásico reinventado y ahumado',
    ingredients: 'Ron, hierbabuena, zumo de limón y soda',
    image: '🍹',
    emoji: true
  },
  {
    id: 'basil-daiquiri',
    category: 'clasicos',
    name: 'Basil & Passion Daiquiri',
    price: 32000,
    description: 'Refrescante, herbal y tropical',
    ingredients: 'Ron, hierbabuena, zumo de limón y soda',
    image: '🌿',
    emoji: true
  },
  {
    id: 'cuba-lite',
    category: 'clasicos',
    name: 'Cuba Lite',
    price: 29000,
    description: 'Ligero, chispeante y listo para la rumba',
    ingredients: 'Ron, hierbabuena, zumo de limón y soda',
    image: '🌴',
    emoji: true
  },
  {
    id: 'margarita',
    category: 'clasicos',
    name: 'Margarita',
    price: 29000,
    description: 'La infaltable. Ácida, salada y perfecta',
    ingredients: 'Tequila, triple sec, zumo de limón y tajín',
    image: '🍊',
    emoji: true
  },
  {
    id: 'paloma-rosa',
    category: 'clasicos',
    name: 'Paloma Rosa',
    price: 32000,
    description: 'Refrescante, herbal y tropical',
    ingredients: 'Tequila, toronja, miel y limón',
    image: '🌸',
    emoji: true
  },
  {
    id: 'el-diablo',
    category: 'clasicos',
    name: 'El Diablo',
    price: 32000,
    description: 'Picoso y oscuro, con alma mexicana',
    ingredients: 'Tequila, cassis, limón y jengibre',
    image: '🔥',
    emoji: true
  },
  {
    id: 'gin-tonic',
    category: 'clasicos',
    name: 'Gin Tonic',
    price: 29000,
    description: 'Clásico, aromático y elegante',
    ingredients: 'Ginebra, especias y tónica',
    image: '💎',
    emoji: true
  },
  {
    id: 'negroni',
    category: 'clasicos',
    name: 'Negroni',
    price: 29000,
    description: 'Bitter, equilibrado y con estilo',
    ingredients: 'Ginebra, vermut rosso y campari',
    image: '🎭',
    emoji: true
  },
  {
    id: 'martini',
    category: 'clasicos',
    name: 'Martini',
    price: 29000,
    description: 'Ligero, chispeante y sofisticado',
    ingredients: 'Ginebra, vermut seco y aceitunas',
    image: '🥒',
    emoji: true
  },
  {
    id: 'new-old-fashion',
    category: 'clasicos',
    name: 'New Old Fashion',
    price: 29000,
    description: 'El clásico del sur, con un twist a la naranja',
    ingredients: 'Whiskey, twist de naranja, gotas de angostura',
    image: '🥃',
    emoji: true
  },
  {
    id: 'mint-julep',
    category: 'clasicos',
    name: 'Mint Julep',
    price: 29000,
    description: 'Menta fresca y whisky para calmar el calor',
    ingredients: 'Whisky bourbon, miel y menta',
    image: '🌿',
    emoji: true
  },
  {
    id: 'whisky-red-sour',
    category: 'clasicos',
    name: 'Whisky Red Sour',
    price: 32000,
    description: 'Cítrico, dulce y coronado con vino tinto',
    ingredients: 'Whisky, miel, triple sec y vino tinto',
    image: '🍷',
    emoji: true
  },
  {
    id: 'moscow-mule',
    category: 'clasicos',
    name: 'Moscow Mule',
    price: 29000,
    description: 'Refrescante, picante y servido con estilo',
    ingredients: 'Vodka, jengibre, limón',
    image: '🐴',
    emoji: true
  },
  {
    id: 'cosmopolitan',
    category: 'clasicos',
    name: 'Cosmopolitan Rosé',
    price: 29000,
    description: 'Frutal, floral y muy chic',
    ingredients: 'Vodka, triple sec, zumo de arándanos',
    image: '💄',
    emoji: true
  },
  {
    id: 'sex-on-beach',
    category: 'clasicos',
    name: 'Sex on the Beach',
    price: 29000,
    description: 'Juguetón y tropical. Un clásico de fiesta',
    ingredients: 'Vodka, triple sec, maracuyá, arándanos',
    image: '🏖️',
    emoji: true
  },
  {
    id: 'black-forest-spark',
    category: 'clasicos',
    name: 'Black Forest Spark',
    price: 32000,
    description: 'Intensidad herbal + Red Bull: boom',
    ingredients: 'Jägermeister, cassis, Red Bull, jengibre',
    image: '🌲',
    emoji: true
  },
  {
    id: 'black-mule',
    category: 'clasicos',
    name: 'Black Mule',
    price: 29000,
    description: 'Jäger y jengibre: una mezcla electrizante',
    ingredients: 'Jägermeister, jengibre, limón',
    image: '⚫',
    emoji: true
  },
  {
    id: 'smoked-jager-mojito',
    category: 'clasicos',
    name: 'Smoked Jäger Mojito',
    price: 29000,
    description: 'Un mojito oscuro y ahumado',
    ingredients: 'Jägermeister, hierbabuena, zumo de limón y soda',
    image: '🌫️',
    emoji: true
  },

  // ============ COCTELES DE AUTOR ============
  {
    id: 'message-to-you-rudy',
    category: 'autor',
    name: 'A Message to You, Rudy',
    price: 32000,
    description: 'Refrescante, ácido y tropical, con el alma de un escocés rebelde',
    ingredients: 'Scotch whisky, triple sec, sirope artesanal de lulo, zumo de limón, gotas de angostura',
    image: '🎸',
    emoji: true
  },
  {
    id: 'black-leather-jacket',
    category: 'autor',
    name: 'Black Leather Jacket',
    price: 32000,
    description: 'Intenso, herbal y oscuro. El cóctel que entra con actitud y deja huella',
    ingredients: 'Ginebra, vodka infusionado con romero y carbón activado, sirope artesanal de mora y zumo de limón',
    image: '🧥',
    emoji: true
  },
  {
    id: 'pacific-york',
    category: 'autor',
    name: 'Pacific York',
    price: 32000,
    description: 'Tradición del Pacífico con un giro cosmopolita. Dulce, especiado y burbujeante',
    ingredients: 'Licor de viche, vermut seco, sirope artesanal de panela y especias, zumo de limón, tónica',
    image: '🌊',
    emoji: true
  },
  {
    id: 'midnight-groove',
    category: 'autor',
    name: 'Midnight Groove',
    price: 32000,
    description: 'Cítrico, vibrante y con el fuego de la noche. Ideal para entrar en ritmo',
    ingredients: 'Aguardiente, vodka, sirope artesanal de maracuyá y jengibre y zumo de limón',
    image: '🎵',
    emoji: true
  },

  // ============ SHOTS ============
  {
    id: 'cocaina-rusa',
    category: 'bebidas',
    name: 'Cocaína Rusa',
    price: 22000,
    description: 'Directo y sin escalas. Un shot que no pide permiso',
    ingredients: 'Vodka, slide de limón con azúcar y café',
    image: '❄️',
    emoji: true
  },
  {
    id: 'york-knockout',
    category: 'bebidas',
    name: 'York Knockout',
    price: 22000,
    description: 'Un derechazo potente con sabor criollo y picante final',
    ingredients: 'Ron, aguardiente, jengibre y maracuyá',
    image: '💥',
    emoji: true
  },
  {
    id: 'veneno-del-rudy',
    category: 'bebidas',
    name: 'Veneno del Rudy',
    price: 22000,
    description: 'Oscuro, ardiente y letal. Se sirve encendido',
    ingredients: 'Tequila, jägermeister y licor de café',
    image: '☠️',
    emoji: true
  },

  // ============ COCTELES SIN LICOR ============
  {
    id: 'lulo-sour',
    category: 'sinlicor',
    name: 'Lulo Sour',
    price: 22000,
    description: 'Lulo fresco, limón y espuma suave. Tropical, ácido y vibrante',
    ingredients: 'Lulo, limón, soda y espuma',
    image: '🌿',
    emoji: true
  },
  {
    id: 'ginger-twist',
    category: 'sinlicor',
    name: 'Ginger Twist',
    price: 22000,
    description: 'Jengibre, limón, soda y un toque herbal. Refrescante y con un picante elegante',
    ingredients: 'Jengibre, limón, soda y menta',
    image: '🍃',
    emoji: true
  },
  {
    id: 'mora-tonic',
    category: 'sinlicor',
    name: 'Mora Tonic',
    price: 22000,
    description: 'Mora, tónica y romero. Burbujeante, botánico y sofisticado',
    ingredients: 'Mora, tónica, romero y hielo',
    image: '🫐',
    emoji: true
  },
  {
    id: 'passion-smoke',
    category: 'sinlicor',
    name: 'Passion Smoke',
    price: 22000,
    description: 'Maracuyá, albahaca y hielo ahumado. Exótico y profundo',
    ingredients: 'Maracuyá, albahaca, hielo ahumado y soda',
    image: '💨',
    emoji: true
  },

  // ============ BEBIDAS ============
  {
    id: 'club-dorada',
    category: 'bebidas',
    name: 'Club Colombia Dorada',
    price: 8000,
    description: 'Cerveza clara, refrescante',
    ingredients: 'Maltas y lúpulos selectos',
    image: '🍺',
    emoji: true
  },
  {
    id: 'club-negra',
    category: 'bebidas',
    name: 'Club Colombia Negra',
    price: 8000,
    description: 'Cerveza oscura y maltosa',
    ingredients: 'Maltas oscuras y lúpulos',
    image: '🍺',
    emoji: true
  },
  {
    id: 'stella',
    category: 'bebidas',
    name: 'Stella Artois',
    price: 10000,
    description: 'Cerveza importada, premium',
    ingredients: 'Cebada y lúpulos belgas',
    image: '🍺',
    emoji: true
  },
  {
    id: 'corona',
    category: 'bebidas',
    name: 'Corona',
    price: 10000,
    description: 'Cerveza clara mexicana',
    ingredients: 'Granos y lúpulos',
    image: '🍺',
    emoji: true
  },
  {
    id: 'budget',
    category: 'bebidas',
    name: 'Budweiser',
    price: 8000,
    description: 'Cerveza americana clásica',
    ingredients: 'Arroz y cebada',
    image: '🍺',
    emoji: true
  },

  // ============ COMIDAS ============
  {
    id: 'sp-nippon',
    category: 'comidas',
    name: 'SP Nippon',
    price: 25000,
    description: 'Hamburguesa con pan artesanal, jugosa carne angus 100% certificada',
    ingredients: 'Pan artesanal, 160g carne angus, cebolla caramelizada, queso cheddar, ripio de papa crujiente, tocineta, lechuga, tomate, salsas especiales',
    image: '🍔',
    emoji: true
  },
  {
    id: 'sp-autor',
    category: 'comidas',
    name: 'SP Autor',
    price: 35000,
    description: 'Pan artesanal, 160g carne angus premium y 150g de pierna de cerdo al barril',
    ingredients: 'Cebolla caramelizada, doble queso cheddar, ripio de papa, tocineta, lechuga, tomate fresco, salsas de la casa',
    image: '🍔',
    emoji: true
  },
  {
    id: 'pernil-ahumado',
    category: 'comidas',
    name: 'Pernil Ahumado',
    price: 28000,
    description: 'Sándwich en pan baguette con láminas de pernil de cerdo al barril',
    ingredients: 'Cebolla caramelizada, mojo cubano, salsa de la casa, queso cheddar, lechuga, tomate fresco, papas artesanales',
    image: '🥪',
    emoji: true
  },
  {
    id: 'nachos-sp',
    category: 'comidas',
    name: 'Nachos SP',
    price: 25000,
    description: 'Totopos de maíz crocante cubiertos con queso gratinado',
    ingredients: 'Acompañados de nuestro chili con carne, pico de gallo fresco, guacamole cremoso y salsa chipotle artesanal',
    image: '🧅',
    emoji: true
  },
  {
    id: 'papas-sp',
    category: 'comidas',
    name: 'Super Papas SP',
    price: 27000,
    description: 'Papas artesanales a la francesa, gratinadas con queso mozzarella, tocineta crujiente',
    ingredients: 'Bondiola de cerdo al barril, cebolla caramelizada y 150g de carne angus, todo bañado en nuestra salsa de la casa',
    image: '🍟',
    emoji: true
  }
];