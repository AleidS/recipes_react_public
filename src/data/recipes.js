//Ingredients is an array so you can loop over it with .map

export default[{
    category:'Dinner',
    // icon: "https://img.icons8.com/color/96/000000/cooking-pot.png",
    content: [
        {
            Name: 'Dutch Pancakes',

            Source: 'http://www.test.com',
            IntendedPeople: 3,
            Image: 'pancakes1.jpg', //CHANGE!
            ImageSource: 'N.d.',
            RecipeSource:'Haagse Kookboek',
            Table: [
                {Ingredients:[
                    
                        {  
                            quantity: 160,
                            unit: 'gr',
                            type: 'flour',
                           
                           
                        },
                        {   quantity: 3,
                            unit: 'small',
                            type: 'eggs',
                            
                        },
                        {   quantity: 3/2,
                            unit: 'dl',
                            type: 'milk',
                            
                        },
                        {   quantity: 4,
                            unit: 'gr',
                            type: 'salt',
                        
                    }
                    
                    ],
                Instruction: 'stir flour, eggs and salt with 1/3 of the milk until smooth'
                },
                {Ingredients:[
                    
                    {  
                        quantity: 50,
                        unit: 'gr',
                        type: 'butter',
                       
                       
                    },
                
                ],
            Instruction: 'Add rest of the milk, then bake on medium/high in butter (or oil), flip when top-side is dry'
            },
            {Title:'serving suggestions',

            Instruction:'Eat with fruit, honey, icing sugar or plain.'},
            {Title:'Variations',
            Instruction:`1: Slice apple thinly, sandwich apple slices in pan between two layers of batter. Serve with cinnamon. \n \n 2: Bake one side, flip, add cheese and fold in half or add other pancake on top.`}
            ]
        }, {
            Name: 'Oven baked Fries',
            vegan: true,
            Image: 'french-fries.jpg',
            ImageSource:'https://pixabay.com/photos/french-fries-food-fries-meal-1351067/',
            Table: [
                {Ingredients:[
                        {  
                            unit: '',
                            type: 'Potatoes with skin',
                        }
                    ],
                Instruction: 'Cut potatoes as desired, let soak in water for 10 minutes, then pat dry with towel'
                },
                {Ingredients:[
                    {  
                        unit: '',
                        type: 'olive oil',
                    },
                    {   
                        unit: '',
                        type: 'salt',
                        
                    },
                    {   
                        unit: '',
                        type: 'pepper',
                    },
                    {   
                        unit: '',
                        type: 'garlic powder',
                    },
                    {   
                        unit: '',
                        type: 'onion powder',
                    },
                    {   
                        unit: '',
                        type: 'cayenne pepper',
                    },
                ],
                 Instruction: 'Add olive oil, salt, pepper, garlic and onion powder, and cayenne pepper to taste, then bake for 40 minutes on 180°C in oven on flat metal surface'
            },
                
            ]
        }
        ,{
            Name: 'Stuffed baguette',
            Image: '',
            ImageSource:'',
            Table: [
                {Ingredients:[
                        {   
                            unit: '',
                            type: 'oven baguette (not entirely baked)',
                        }
                      
                    ],
                Instruction: 'Cut off top of baguette, and hollow some'
                },
                {Ingredients:[
                    {  
                        type: 'pesto',
                    },
                ],
                 Instruction: 'cover inside of baguette with pesto'
                 },
                 {Ingredients:[
                    {  
                        type: 'mozzarella',
                    },
                    {  
                        type: 'tomato',
                    },
                ],
                 Instruction: 'fill with pieces mozerella and tomato'
                 },
                 {Ingredients:[
                    {  
                        type: 'pepper',
                    },
                    {  
                        type: 'dried basil',
                    },
                ],
                 Instruction: 'Sprinkle over pepper and dried basil, then bake around 10 minutes in oven as described for the baguette'
                 },
                
            ]
        }
        ,{
            Name: 'American Pancakes',
            Type: 'Dinner',
            Source: 'http://www.test.com',
            IntendedPeople: 2,
            Subtype: 'Festive',
            Image: 'AmericanPancakes2.jpg',
            ImageSource: 'https://pixabay.com/photos/pancakes-schaumomelette-omelette-1984705/',
            Table: [
                {Ingredients:[
                    
                        {  
                            quantity: 2,
                            unit: 'cups',
                            type: 'flour',
                           
                           
                        },
                        {   quantity: 2,
                            unit: 'ts',
                            type: 'baking powder',
                            
                        },
                        {   quantity: 1/4,
                            unit: 'ts',
                            type: 'salt',
                            
                        },
                        {   quantity: 1,
                            unit: 'Tbs',
                            type: 'sugar',
                        
                    }
                    
                    ],
                Instruction: 'Mix flour, baking powder, salt and sugar'
                },
                {Ingredients:[
                    
                    {  
                        quantity: 1,
                        unit: 'large',
                        type: 'eggs',
                       
                       
                    },
                    {   quantity: 3,
                        unit: 'Tbs',
                        type: 'melted butter',
                        
                    },
                    {   quantity: 2,
                        unit: 'ts',
                        type: 'vanilla extract',
                        
                    }
                
                ],
            Instruction: 'add, eggs, melted butter and vanilla extract; do not over-mix, let rest for 10-15 minutes'
            },
            {
            Instruction: 'bake 1/4 cup batter at a time on low/medium heat (let pan heat for 2 min beforehand), optionally use oil in pan'
             }
            ]
        },

        {
            Name: 'Pizza',
            Image: 'pizza2.jpg',
            IntendedPeople:3,
            Table: [
                {Title: 'Dough',
                Ingredients:[
                        {   quantity: 1,
                            unit: 'ts',
                            type: 'sugar',
                            
                        },
                        {   quantity: 60,
                            unit: 'ml',
                            type: 'lukewarm Water',
                            
                        },
                        {   quantity: 10,
                            unit: 'gr',
                            type: 'fresh yeast /',
                            
                        },
                        {   word: 'OR',
                            quantity: 1,
                            unit: 'ts',
                            type: 'dry yeast',
                            
                        }
                    
                    ],
                Instruction: 'Mix sugar, lukewarm water and yeast untill bubbly'
                },
                {Ingredients:[
                    {   quantity: 3,
                        unit: 'cups',
                        type: 'flour',
                        
                        
                    },
                    {   quantity: 1,
                        unit: 'ts',
                        type: 'salt',
                    }
                
                ],
                Instruction: 'Mix flour and salt seperately, then add the yeast mixture'
                },
                {Ingredients:[
                    {   quantity: 2,
                        unit: 'Tbs',
                        type: 'Olive Oil',
                        
                        
                    },
                    {   quantity: 3/4,
                        unit: 'cup',
                        type: 'warm water',
                    }
                
                ],
                Instruction: "Add water, and knead untill smooth and dough doesn't stick to oiled bowl. Cover with clingwrap, let sit for 2 hours at room temp untill doubled in size."
                },
                {Title:'Sauce',
                Ingredients:[
                    {   quantity: 1.5,
                        unit: 'Tbs',
                        type: 'Olive Oil',
                        
                        
                    },
                    {   quantity: 1.5,
                        unit: 'clove',
                        type: 'garlic',
                    },
                    {   quantity: 600,
                        unit: 'gr',
                        type: 'canned chopped tomatoes',
                     }
                
                ],
                Instruction: "Heat oil, add chopped garlic, add tomatoes after few seconds (Turn down heat to avoid hot oil splashes!)"
                },
                {
                Ingredients:[
                    {   quantity: 1/2,
                        unit: 'Ts',
                        type: 'sugar',
                        
                        
                    },
                    {   quantity: 1,
                        unit: 'ts',
                        type: 'dry oregano',
                    },
                    {   quantity: 1,
                        unit: 'ts',
                        type: 'dry basil',
                     },
                     {  
                        type: 'bay leaf',
                     },
                     {  
                        type: 'opt: red pepper flakes',
                     },
                     {  
                        type: 'salt',
                     },
                     {  
                        type: 'black pepper',
                     }
                
                ],
                Instruction: "Add all seasoning, cook for 10 minutes untill thickened enough"
                }
            ]
        },
        {
            Name: 'Homemade Tortilla wraps',
            vegan: true,
            Image: 'tortilla.jpg',
            ImageSource:'https://pixabay.com/photos/d%c3%bcr%c3%bcm-food-dish-wrap-meal-6119590/',
            IntendedPeople:3,
            Table: [
                {Ingredients:[
                        {   quantity: 250 ,
                            unit: 'gr',
                            type: 'Flour',
                        },
                        {   quantity:1,
                            unit: 'ts',
                            type: 'baking powder',
                            
                        },
                        {  quantity: 3,
                            unit: 'tbs',
                            type: 'sunflower oil',
                        },
                        {   type: 'salt to taste',
                            
                    },
                    ],
                Instruction: 'Mix flour, baking powder, sunflower oil and salt'
                },
                {Ingredients:[
                    {   quantity: 150,
                        unit: 'ml',
                        type: 'lukewarm water',
                    },
                    {   word:'+',
                        quantity: 1,
                        unit: 'tbs',
                        type: 'sunflower oil',
                    }
                  
                ],
                 Instruction: 'Add water and more sunflower oil to the mix, knead untill smooth on flour dusted surface, divide dough into 2 parts per person, place in a bowl and cover with 1 tbs of sunflower oil, then cover bowl with a wet towel and let rest for 15 minutes. Bake on medium high, for about 1 minute per side '
            },
                
            ]
        }
       
    ]
},
    {category:'Dessert',
    content: [
        {
            Name: 'Ice-cream Cones',
            Image: 'ice-cream-cone.jpg',
            ImageSource:'https://pixabay.com/photos/ice-cream-cones-scooper-5928048/',
            IntendedPeople:6,
            Table: [
                {Ingredients:[
                        {   quantity:115 ,
                            unit: 'gr',
                            type: 'sugar',
                        },
                        {   quantity:2 ,
                            unit: '',
                            type: 'egg whites',
                            
                        },
                        {   quantity: 40,
                            unit: 'ml',
                            type: 'milk',
                        },
                        {   unit: 'pinch of',
                            type: 'salt',
                        },
                        {   
                             type: 'vanilla sugar / extract',
                    },
                    ],
                Instruction: 'Mix sugar, egg whites, milk, salt and vanilla extract'
                },
                {Ingredients:[
                    {   quantity:150,
                        unit: 'gr',
                        type: 'flour',
                    },
                    {   quantity: 30 ,
                        unit: 'gr',
                        type: 'molten butter',
                        
                    },
                ],
                 Instruction: 'add flour and molten butter, mix, then bake 2 table spoons at a time (turn after 4 minutes, then bake for 1 more minute) wrap into desired shape with baking sheet and gloves'
            },
                
            ]
        },
        {
            Name: 'Banana/kiwi ice-cream',
            vegan:true,
            Image: 'bananaKiwiIceCream.jpg',
            ImageSource:'https://pixabay.com/photos/ice-ice-three-scoops-3478336/',
            IntendedPeople:3,
            Table: [
                {Ingredients:[
                        {   quantity: 2,
                            unit: '',
                            type: 'bananas',
                        },
                        {   quantity: 2,
                            unit: '',
                            type: 'kiwis',
                            
                        }
                    ],
                Instruction: 'Cut the banana(s) and kiwi(s) in blocks, freeze for 2 hours, blend in blender (one that is closed off) -> Careful not to damage your blender or yourself. Might have to wait for it to unfreeze some',
                    }
                
            ],
            RecipeSource:'https://www.youtube.com/watch?v=scIjcMha208&ab_channel=SchnelleRezepte',
        },
        {
            Name: 'Yoghurt Cake',
            Image: 'spongeCake.jpg',
            ImageSource:'https://www.pexels.com/photo/cut-sponge-cake-on-white-plate-6601712/',
            IntendedPeople:4,
            Table: [
                {Ingredients:[
                        {   quantity: 600 ,
                            unit: 'ml',
                            type: 'sweetened yoghurt',
                        },
                        {   quantity: 6,
                            unit: '',
                            type: 'eggs',
                            
                        }
                    ],
                Instruction: 'Mix sweeetened yoghurt and eggs'
                },
                {Ingredients:[
                    {  quantity: 60,
                        unit: 'gr',
                        type: 'Cornstarch',
                    },
                 
                ],
                 Instruction: 'Add cornstarch, then bake 1.5 hours on 170°C'
            },
                
            ]
        },
    ]
},
{category:'Smoothies',
// icon: 
content:[
    // {
    //     Name: 'Banana Yoghurt Chocolate Smoothie',
    //     vegan: false,
    //     Image: 'bananaSmoothie.jpg',
    //     ImageSource: "https://www.freepik.com/free-photo/chocolate-smoothie-with-choco-syrup-branch-bananas_12373363.htm#query=banana%20chocolate%20smoothie&position=2&from_view=search",
    //     freePikName: 'azerbaijan_stockers', 
    //     Ingredients:[
    //         {   type: 'Vanilla yoghurt',
    //             unit: '',
    //             quantity: null,
    //         },
    //         {   type: 'Banana',
    //             unit: '',
    //             quantity: null,
    //         },
    //         {
    //             type:'Hazelnut chocolate paste',
    //             unit: '',
    //             quantity: null,
    //         }
    //     ],
    //     Instructions:('1. Mix yoghurt, banana and hazelnut chocolate paste, however much you like and enjoy'
    //                     ),
    //     RecipeSource:'Trial and error'
    // },
]}
,
{category:'Appetizers',
// icon: "https://img.icons8.com/color/96/000000/cooking-pot.png",
content:[]},
{category:'Other',
// icon: "https://img.icons8.com/color/96/000000/cooking-pot.png",
content:[]}
]