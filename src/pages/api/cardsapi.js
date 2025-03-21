
const cards = [
    { image: "/pepsi.jpg", title: "Fizz the World", description: "Pepsi's Expo 2022 campaign" },
    { image: "/display.jpg", title: "A Display To Inspire The Every Day Chef", description: "We created our bespoke, modular displays that can be arranged in countless configurations." },
    { image: "/nutrition.jpg", title: "The Optimum Nutrition For The Optimum Challenge", description: "In less than three weeks, we took the leading sports nutrition specialist Optimum Nutrition and got it in perfect shape." },
    { image: "/biodegradable-product.jpg", title: "Biodegradable Product in an Eco-friendly Space", description: "Perfect balance between highlighting their green credentials without casting any doubt about their make-up removal efficacy." },
    { image: "/mouthwash-superhero.jpg", title: "Even a Mouthwash Can Be A Superhero", description: "We designed a cartoonish sleeve to turn the bottle into a playful superhero, making it appealing to kids aged 6 and over." },
    { image: "/img-world.jpg", title: "Taking Over the IMG World", description: "When Lay’s appeared in the Lost Valley dinosaur enclosure at Dubai’s biggest indoor theme park - IMG Worlds of Adventure." },
    { image: "/longest-passes.jpg", title: "Longest Passes in History", description: "PepsiCo enters the Book of World Records." },
    { image: "/trick-or-treat.jpg", title: "Trick or Treat", description: "KitKat Halloween full packaging-driven campaign." },
    { image: "/mountain-dew.jpg", title: "Let It Shine Brighter", description: "Launch of Mountain Dew glow in the dark neon can." },
    { image: "/first-pepsi.jpg", title: "My First Pepsi", description: "Revival of Pepsi’s vintage can design in celebration of their 120th birthday." },
    { image: "/knowledge-empower.jpg", title: "Knowledge to Empower", description: "How can we shift the perception of UH to reach a younger audience." },
    { image: "/make-every-pack-count.jpg", title: "Make Every Pack Count", description: "Sunbites sustainable product launch at EXPO." },
  ];

export default function cardsapi(req, res){


    res.status(200).json(cards);

}