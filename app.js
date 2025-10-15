// Game Data
const games = [
  {
    id: 1,
    title: "FIFA22",
    price: 59.99,
    rating: 4.5,
    category: "Sports",
    platform: "PC",
    description: "The ultimate football experience.",
    releaseDate: "2021-10-01",
    recommended: true,
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1506830/capsule_616x353.jpg?t=1712678728",
    thumbnails: [
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202205/menu-screen-final-2.png.adapt..png?VersionId=Ycz9LuJ0QsgNcCrejEg7Lv7QHy1Tga9x",
      "https://www.videogameschronicle.com/files/2021/07/fifa-22-d-scaled.jpg",
      "https://i2-prod.mirror.co.uk/article24988353.ece/ALTERNATES/s1200c/0_Messi-vs-Ronaldo-FIFA-22.png",
      "https://assets-prd.ignimgs.com/2021/09/27/fifa-22-20210927154711-1632775274561.jpg",
    ],
    screenshots: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1506830/capsule_616x353.jpg?t=1712678728",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1506830/capsule_616x353.jpg?t=1712678728",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1506830/capsule_616x353.jpg?t=1712678728",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1506830/capsule_616x353.jpg?t=1712678728",
    ],
    reviews: [
      {
        author: "John Doe",
        rating: 5,
        text: "Amazing game! Best football simulation ever.",
      },
      {
        author: "Jane Smith",
        rating: 4,
        text: "Great graphics and gameplay, minor bugs though.",
      },
    ],
  },
  {
    id: 2,
    title: "Ghost of Tsushima",
    price: 69.99,
    rating: 4.9,
    category: "Action",
    platform: "PlayStation",
    description:
      "A samurai adventure set in feudal Japan with stunning visuals.",
    releaseDate: "2020-07-17",
    recommended: true,
    image:
      "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/07/Ghost-of-Tsushima-Key-Art.jpg?w=1200&h=675&fit=crop",
    thumbnails: [
      "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/07/Ghost-of-Tsushima-Key-Art.jpg?w=1200&h=675&fit=crop",
      "https://www.gamereactor.eu/media/08/ghosttsushima_3200883b.png",
      "https://www.thegamecrater.com/wp-content/uploads/2020/08/Ghost-of-Tsushima-New-Header.jpg",
      "https://foreignpolicy.com/wp-content/uploads/2020/08/ghost-of-Tsushima-island-videogame-Japan-1.jpg",
    ],
    screenshots: [
      "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/07/Ghost-of-Tsushima-Key-Art.jpg?w=1200&h=675&fit=crop",
      "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/07/Ghost-of-Tsushima-Key-Art.jpg?w=1200&h=675&fit=crop",
      "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/07/Ghost-of-Tsushima-Key-Art.jpg?w=1200&h=675&fit=crop",
      "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/07/Ghost-of-Tsushima-Key-Art.jpg?w=1200&h=675&fit=crop",
    ],
    reviews: [
      {
        author: "Mike Johnson",
        rating: 5,
        text: "Absolutely beautiful! The story and visuals are incredible.",
      },
      {
        author: "Sarah Lee",
        rating: 5,
        text: "Best samurai game ever made. A masterpiece.",
      },
    ],
  },
  {
    id: 3,
    title: "NBA2K24",
    price: 49.99,
    rating: 4.2,
    category: "Sports",
    platform: "PC, Console",
    description: "Experience next-gen basketball with enhanced realism.",
    releaseDate: "2023-09-08",
    recommended: false,
    image:
      "https://cdn.wccftech.com/wp-content/uploads/2023/09/WCCFnba2k242.jpg",
    thumbnails: [
      "https://cdn.wccftech.com/wp-content/uploads/2023/09/WCCFnba2k242.jpg",
      "https://i.ytimg.com/vi/Vcws8mpbBt4/maxresdefault.jpg",
      "https://i.ytimg.com/vi/qdTzei0kAtY/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAQTJGdejA1ExJ4exo4K56WPHp4Fw",
      "https://preview.redd.it/do-you-guys-think-this-is-better-than-the-original-cover-of-v0-q7usqvf8lpob1.jpg?width=640&crop=smart&auto=webp&s=290bd28b91eaf09d9633c01496975fb06c65292a",
    ],
    screenshots: [
      "https://cdn.wccftech.com/wp-content/uploads/2023/09/WCCFnba2k242.jpg",
      "https://cdn.wccftech.com/wp-content/uploads/2023/09/WCCFnba2k242.jpg",
      "https://cdn.wccftech.com/wp-content/uploads/2023/09/WCCFnba2k242.jpg",
      "https://cdn.wccftech.com/wp-content/uploads/2023/09/WCCFnba2k242.jpg",
    ],
    reviews: [
      {
        author: "Tom Wilson",
        rating: 4,
        text: "Great basketball sim, but some microtransactions are annoying.",
      },
      {
        author: "Amy Chen",
        rating: 4,
        text: "Realistic gameplay and good career mode.",
      },
    ],
  },
  {
    id: 4,
    title: "The Witcher 3: Wild Hunt",
    price: 39.99,
    rating: 4.8,
    category: "RPG",
    platform: "PC / Console",
    description:
      "Play as Geralt, a monster hunter, in a vast open world full of quests and choices.",
    releaseDate: "2015-05-18",
    recommended: true,
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/ad9240e088f953a84aee814034c50a6a92bf4516/header.jpg?t=1756366569",
    thumbnails: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/ad9240e088f953a84aee814034c50a6a92bf4516/header.jpg?t=1756366569",
      "https://www.thewitcher.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.4c59601c.jpg&w=3840&q=75",
      "https://i.ytimg.com/vi/TZ_G6XiHoUA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAJTVdUB0woThOdnsKuqVBOiIk0IQ",
      "https://www.bedfordtoday.co.uk/webimg/legacy_oak_71369136.jpg?crop=3:2,smart&trim=&width=640&quality=65&enable=upscale",
    ],
    screenshots: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/ad9240e088f953a84aee814034c50a6a92bf4516/header.jpg?t=1756366569",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/ad9240e088f953a84aee814034c50a6a92bf4516/header.jpg?t=1756366569",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/ad9240e088f953a84aee814034c50a6a92bf4516/header.jpg?t=1756366569",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/ad9240e088f953a84aee814034c50a6a92bf4516/header.jpg?t=1756366569",
    ],
    reviews: [
      {
        author: "Chris Brown",
        rating: 5,
        text: "One of the best RPGs ever created. Incredible story and world.",
      },
      {
        author: "Emma Davis",
        rating: 5,
        text: "Masterpiece. Every quest feels meaningful and well-crafted.",
      },
    ],
  },
  {
    id: 5,
    title: "Assassins Creed Mirage",
    price: 24.99,
    rating: 4.7,
    category: "Roguelike / Action",
    platform: "PC / Switch / Console",
    description:
      "A narrative-driven action-adventure game developed by Ubisoft",
    releaseDate: "2020-09-17",
    recommended: true,
    image: "https://cdn.mos.cms.futurecdn.net/pP4idKwBFCH9vGLkf6g87c.jpg",
    thumbnails: [
      "https://cdn.mos.cms.futurecdn.net/pP4idKwBFCH9vGLkf6g87c.jpg",
      "https://i0.wp.com/waytoomany.games/wp-content/uploads/2023/10/975baf30-4302-44ce-af65-ced67d42283f-1.png?fit=3840%2C2160&ssl=1",
      "https://cdn.mos.cms.futurecdn.net/4Q8iwiHCEjYsADAEXMMxTD.jpeg",
      "https://gamingbolt.com/wp-content/uploads/2023/06/assassins-creed-mirage-image-8.jpg",
    ],
    screenshots: [
      "https://cdn.mos.cms.futurecdn.net/pP4idKwBFCH9vGLkf6g87c.jpg",
      "https://cdn.mos.cms.futurecdn.net/pP4idKwBFCH9vGLkf6g87c.jpg",
      "https://cdn.mos.cms.futurecdn.net/pP4idKwBFCH9vGLkf6g87c.jpg",
      "https://cdn.mos.cms.futurecdn.net/pP4idKwBFCH9vGLkf6g87c.jpg",
    ],
    reviews: [
      {
        author: "Ryan Garcia",
        rating: 5,
        text: "Back to the roots of AC. Absolutely loved it!",
      },
      {
        author: "Lisa Wang",
        rating: 4,
        text: "Great stealth mechanics and beautiful setting.",
      },
    ],
  },
  {
    id: 6,
    title: "Horizon Zero Dawn",
    price: 29.99,
    rating: 4.5,
    category: "Action / RPG",
    platform: "PC / PlayStation",
    description:
      "Explore a post-apocalyptic world overrun by robotic creatures as Aloy.",
    releaseDate: "2017-02-28",
    recommended: true,
    image:
      "https://www.voicesquad.com/app/uploads/Video-Game-Horizon-Zero-Dawn.jpg",
    thumbnails: [
      "https://www.voicesquad.com/app/uploads/Video-Game-Horizon-Zero-Dawn.jpg",
      "https://www.gamereactor.eu/media/14/horizon_4381473b.jpg",
      "https://steamforged.com/cdn/shop/collections/collection-1200x600-horizonzerodawn-507663.png?v=1743077126",
      "https://4kwallpapers.com/images/wallpapers/horizon-zero-dawn-aloy-scenery-game-art-landscape-5k-2880x1800-4414.jpg",
    ],
    screenshots: [
      "https://www.voicesquad.com/app/uploads/Video-Game-Horizon-Zero-Dawn.jpg",
      "https://www.voicesquad.com/app/uploads/Video-Game-Horizon-Zero-Dawn.jpg",
      "https://www.voicesquad.com/app/uploads/Video-Game-Horizon-Zero-Dawn.jpg",
      "https://www.voicesquad.com/app/uploads/Video-Game-Horizon-Zero-Dawn.jpg",
    ],
    reviews: [
      {
        author: "Kevin Martinez",
        rating: 5,
        text: "Stunning visuals and engaging story. Aloy is an amazing protagonist.",
      },
      {
        author: "Rachel Kim",
        rating: 4,
        text: "Unique setting and fun combat system.",
      },
    ],
  },
  {
    id: 7,
    title: "GTA San Andreas",
    price: 19.99,
    rating: 4.6,
    category: "Platformer / Indie",
    platform: "PC / Console",
    description: "Action-adventure game developed by Rockstar North.",
    releaseDate: "2018-01-25",
    recommended: true,
    image:
      "https://lh3.googleusercontent.com/proxy/6Lu96C0LJo5XpNug2AvzhqJsBQexHexgj3pPzMRpDR3fmBzGZhs-vM5c7CrmxF4Av-Hg_4QsC4dRnMbgNu2QwxCGZJyXA2b18V9Web05rvrndk0uG6i9FyyW9SSd7x3jiyRkRi9ULxsxR2jx4BfXuToUeCvb8crfI5JCf4-JOBcc0pw_nOKBdZhmFDRH_wiyyZs",
    thumbnails: [
      "https://lh3.googleusercontent.com/proxy/6Lu96C0LJo5XpNug2AvzhqJsBQexHexgj3pPzMRpDR3fmBzGZhs-vM5c7CrmxF4Av-Hg_4QsC4dRnMbgNu2QwxCGZJyXA2b18V9Web05rvrndk0uG6i9FyyW9SSd7x3jiyRkRi9ULxsxR2jx4BfXuToUeCvb8crfI5JCf4-JOBcc0pw_nOKBdZhmFDRH_wiyyZs",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQl3345BJYY2-5R2h4Q_bm3ZpUNfbdWVmSpQ&s",
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Gta-sa-screen1.jpg/330px-Gta-sa-screen1.jpg",
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/wm/2024/10/grand-theft-auto-san-andreas-anniversary-1.jpg?w=1600&h=900&fit=crop",
    ],
    screenshots: [
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/wm/2024/10/grand-theft-auto-san-andreas-anniversary-1.jpg?w=1600&h=900&fit=crop",
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/wm/2024/10/grand-theft-auto-san-andreas-anniversary-1.jpg?w=1600&h=900&fit=crop",
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/wm/2024/10/grand-theft-auto-san-andreas-anniversary-1.jpg?w=1600&h=900&fit=crop",
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/wm/2024/10/grand-theft-auto-san-andreas-anniversary-1.jpg?w=1600&h=900&fit=crop",
    ],
    reviews: [
      {
        author: "David Lee",
        rating: 5,
        text: "Classic GTA! So many memories with this game.",
      },
      {
        author: "Nicole Brown",
        rating: 5,
        text: "Still holds up today. Timeless classic.",
      },
    ],
  },
  {
    id: 8,
    title: "Red Dead Redemption 2",
    price: 59.99,
    rating: 4.9,
    category: "Action / Adventure",
    platform: "PC / PlayStation / Xbox",
    description:
      "Experience stunning storytelling, immersive open-world exploration, and emotional depth.",
    releaseDate: "2018-10-26",
    recommended: false,
    image:
      "https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png?w=440",
    thumbnails: [
      "https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png?w=440",
      "https://www.playstationlifestyle.net/wp-content/uploads/sites/9/2018/10/Red-Dead-Redemption-2-horse-loyalty-gameplay.jpg.optimal.jpg?w=1024",
      "https://www.playstationlifestyle.net/wp-content/uploads/sites/9/2025/09/ps-store-deal-2.jpg",
      "https://www.cnet.com/a/img/resize/d797af24f6114b86902bc06c6ad8ff1d91f08b3b/hub/2018/10/25/776b9111-60ec-4e79-9f16-8372eac0635c/red-dead-redemption-2-20181021172719.jpg?auto=webp&width=1200",
    ],
    screenshots: [
      "https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png?w=440",
      "https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png?w=440",
      "https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png?w=440",
      "https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png?w=440",
    ],
    reviews: [
      {
        author: "James Anderson",
        rating: 5,
        text: "Rockstar's magnum opus. Incredible attention to detail.",
      },
      {
        author: "Maria Rodriguez",
        rating: 5,
        text: "Best open-world game ever made. The story made me cry.",
      },
    ],
  },
  {
    id: 9,
    title: "Elden Ring",
    price: 69.99,
    rating: 4.9,
    category: "Action RPG",
    platform: "PC / PlayStation / Xbox",
    description:
      "An expansive open-world adventure crafted by FromSoftware and George R.R. Martin, combining challenging combat, exploration, and deep lore.",
    releaseDate: "2022-02-25",
    recommended: false,
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/ZmqYfcMqlAbRB1s0XClGgwBc.png",
    thumbnails: [
      "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/ZmqYfcMqlAbRB1s0XClGgwBc.png",
      "https://backend.artreview.com/wp-content/uploads/2022/03/heroDn3SrrTeZNNq5x62Rn4bhc-2048x1000.jpg",
      "https://cdn.mos.cms.futurecdn.net/2cZUgBhqioM26W3h22ryFj.jpg",
      "https://cdn.thewirecutter.com/wp-content/media/2022/03/elden-ring-2048px-0002.jpg?auto=webp&quality=75&crop=1.91:1&width=1200",
    ],
    screenshots: [
      "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/ZmqYfcMqlAbRB1s0XClGgwBc.png",
      "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/ZmqYfcMqlAbRB1s0XClGgwBc.png",
      "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/ZmqYfcMqlAbRB1s0XClGgwBc.png",
      "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/ZmqYfcMqlAbRB1s0XClGgwBc.png",
    ],
    reviews: [
      {
        author: "Alex Thompson",
        rating: 5,
        text: "FromSoftware's best game yet. Challenging but fair.",
      },
      {
        author: "Sophie Turner",
        rating: 5,
        text: "Game of the year material. Absolutely brilliant.",
      },
    ],
  },
];

// State Management (using variables instead of localStorage)
let cart = [];
let wishlist = [];
let currentPage = "home";
let currentSlideIndex = 0;
let filteredGames = [...games];

// Initialize app
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  loadHomePage();
  updateBadges();
});

// Navigation
function initNavigation() {
  const navLinks = document.querySelectorAll("[data-page]");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = link.getAttribute("data-page");
      navigateTo(page);
    });
  });
}

function navigateTo(page) {
  // Hide all pages
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));

  // Show selected page
  document.getElementById(page).classList.add("active");
  currentPage = page;

  // Load page content
  switch (page) {
    case "home":
      loadHomePage();
      break;
    case "games":
      loadGamesPage();
      break;
    case "about":
      loadAboutPage();
      break;
    case "cart":
      loadCartPage();
      break;
    case "wishlist":
      loadWishlistPage();
      break;
    case "checkout":
      loadCheckoutPage();
      break;
  }

  // Scroll to top
  window.scrollTo(0, 0);
}

// Home Page
function loadHomePage() {
  loadHeroSlider();
  loadRecommendedGames();
  setupNewsletterForm();
}

function loadHeroSlider() {
  const recommendedGames = games.filter((g) => g.recommended);
  const sliderContainer = document.getElementById("heroSlider");

  sliderContainer.innerHTML = recommendedGames
    .map(
      (game) => `
    <div class="slider-item">
      <img src="${game.image}" alt="${game.title}">
      <div class="slider-info">
        <h2>${game.title}</h2>
        <p>${game.description}</p>
        <p class="price">${game.price}</p>
      </div>
    </div>
  `
    )
    .join("");

  // Setup slider controls
  document.getElementById("prevBtn").addEventListener("click", () => {
    currentSlideIndex =
      (currentSlideIndex - 1 + recommendedGames.length) %
      recommendedGames.length;
    updateSlider();
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    currentSlideIndex = (currentSlideIndex + 1) % recommendedGames.length;
    updateSlider();
  });

  // Auto slide
  setInterval(() => {
    currentSlideIndex = (currentSlideIndex + 1) % recommendedGames.length;
    updateSlider();
  }, 5000);
}

function updateSlider() {
  const sliderContainer = document.getElementById("heroSlider");
  sliderContainer.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
}

function loadRecommendedGames() {
  const recommendedGames = games.filter((g) => g.recommended);
  const container = document.getElementById("recommendedGames");

  container.innerHTML = recommendedGames
    .map((game) => createGameCard(game))
    .join("");

  // Add click listeners
  container.querySelectorAll(".games-card").forEach((card, index) => {
    card.addEventListener("click", () =>
      showGameDetail(recommendedGames[index].id)
    );
  });
}

function setupNewsletterForm() {
  const form = document.getElementById("newsletterForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("newsletterEmail").value;
    const error = document.getElementById("newsletterError");

    if (!validateEmail(email)) {
      error.textContent = "Please enter a valid email address";
      return;
    }

    error.textContent = "";
    alert("Thank you for subscribing!");
    form.reset();
  });
}

// Games Page
function loadGamesPage() {
  filteredGames = [...games];
  renderGames();
  setupFilters();
  setupViewToggle();
}

function renderGames() {
  const container = document.getElementById("allGamesContainer");
  container.innerHTML = filteredGames
    .map((game) => createGameCard(game))
    .join("");

  // Add click listeners
  container.querySelectorAll(".games-card").forEach((card, index) => {
    card.addEventListener("click", () =>
      showGameDetail(filteredGames[index].id)
    );
  });
}

function setupFilters() {
  const searchBar = document.getElementById("searchBar");
  const applyBtn = document.getElementById("applyFilters");

  searchBar.addEventListener("input", () => {
    const query = searchBar.value.toLowerCase();
    filteredGames = games.filter((g) => g.title.toLowerCase().includes(query));
    renderGames();
  });

  applyBtn.addEventListener("click", applyFilters);
}

function applyFilters() {
  const category = document.getElementById("categoryFilter").value;
  const platform = document.getElementById("platformFilter").value;
  const minPrice = parseFloat(document.getElementById("minPrice").value) || 0;
  const maxPrice =
    parseFloat(document.getElementById("maxPrice").value) || Infinity;
  const sortBy = document.getElementById("sortBy").value;

  // Filter
  filteredGames = games.filter((game) => {
    const categoryMatch = !category || game.category === category;
    const platformMatch = !platform || game.platform.includes(platform);
    const priceMatch = game.price >= minPrice && game.price <= maxPrice;
    return categoryMatch && platformMatch && priceMatch;
  });

  // Sort
  if (sortBy === "price-asc") {
    filteredGames.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    filteredGames.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating-desc") {
    filteredGames.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "name-asc") {
    filteredGames.sort((a, b) => a.title.localeCompare(b.title));
  }

  renderGames();
}

function setupViewToggle() {
  const gridBtn = document.getElementById("gridView");
  const listBtn = document.getElementById("listView");
  const container = document.getElementById("allGamesContainer");

  gridBtn.addEventListener("click", () => {
    container.classList.remove("list-view");
    container.classList.add("grid-view");
    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
  });

  listBtn.addEventListener("click", () => {
    container.classList.remove("grid-view");
    container.classList.add("list-view");
    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
  });
}

// Game Detail Page
function showGameDetail(gameId) {
  const game = games.find((g) => g.id === gameId);
  const container = document.getElementById("detailContainer");

  container.innerHTML = `
    <div class="detail-header">
      <div class="detail-images">
        <img src="${game.image}" alt="${
    game.title
  }" class="main-image" id="mainImage">
        <div class="thumbnails">
          ${game.thumbnails
            .map(
              (thumb, i) => `
            <img src="${thumb}" alt="Thumbnail ${i + 1}" class="thumbnail ${
                i === 0 ? "active" : ""
              }" onclick="changeMainImage('${thumb}', this)">
          `
            )
            .join("")}
        </div>
      </div>
      <div class="detail-info">
        <h1>${game.title}</h1>
        <p class="price">${game.price.toFixed(2)}</p>
        <p class="rating">${game.rating} ⭐</p>
        <div class="detail-specs">
          <p><strong>Category:</strong> ${game.category}</p>
          <p><strong>Platform:</strong> ${game.platform}</p>
          <p><strong>Release Date:</strong> ${game.releaseDate}</p>
          <p><strong>Description:</strong> ${game.description}</p>
        </div>
        <div class="detail-actions">
          <button class="btn-cart" onclick="addToCart(${
            game.id
          })">Add to Cart</button>
          <button class="btn-wishlist" onclick="addToWishlist(${
            game.id
          })">Add to Wishlist</button>
        </div>
      </div>
    </div>
    
    <div class="screenshots">
      <h2>Screenshots</h2>
      <div class="screenshot-grid">
        ${game.screenshots
          .map((ss) => `<img src="${ss}" alt="Screenshot">`)
          .join("")}
      </div>
    </div>
    
    <div class="reviews">
      <h2>Reviews</h2>
      ${game.reviews
        .map(
          (review) => `
        <div class="review">
          <div class="review-header">
            <span class="review-author">${review.author}</span>
            <span class="review-rating">${review.rating} ⭐</span>
          </div>
          <p>${review.text}</p>
        </div>
      `
        )
        .join("")}
    </div>
  `;

  navigateTo("gameDetail");
}

function changeMainImage(src, thumbnail) {
  document.getElementById("mainImage").src = src;
  document
    .querySelectorAll(".thumbnail")
    .forEach((t) => t.classList.remove("active"));
  thumbnail.classList.add("active");
}

// Cart Functions
function addToCart(gameId) {
  const existingItem = cart.find((item) => item.id === gameId);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    const game = games.find((g) => g.id === gameId);
    cart.push({ ...game, quantity: 1 });
  }
  updateBadges();
  alert("Added to cart!");
}

function addToWishlist(gameId) {
  if (!wishlist.find((item) => item.id === gameId)) {
    const game = games.find((g) => g.id === gameId);
    wishlist.push(game);
    updateBadges();
    alert("Added to wishlist!");
  } else {
    alert("Already in wishlist!");
  }
}

function updateBadges() {
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = wishlist.length;

  document.getElementById("cartBadge").textContent = cartCount;
  document.getElementById("wishlistBadge").textContent = wishlistCount;
}

function loadCartPage() {
  const container = document.getElementById("cartItems");
  const summary = document.getElementById("cartSummary");

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty</p>";
    summary.innerHTML = "";
    return;
  }

  container.innerHTML = cart
    .map(
      (item) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.title}">
      <div class="item-info">
        <h3>${item.title}</h3>
        <p>${item.price.toFixed(2)}</p>
      </div>
      <div class="item-actions">
        <div class="quantity-controls">
          <button onclick="updateQuantity(${item.id}, -1)">-</button>
          <span>${item.quantity}</span>
          <button onclick="updateQuantity(${item.id}, 1)">+</button>
        </div>
        <button class="remove-btn" onclick="removeFromCart(${
          item.id
        })">Remove</button>
      </div>
    </div>
  `
    )
    .join("");

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.13;
  const total = subtotal + tax;

  summary.innerHTML = `
    <h2>Order Summary</h2>
    <div class="summary-row">
      <span>Subtotal:</span>
      <span>${subtotal.toFixed(2)}</span>
    </div>
    <div class="summary-row">
      <span>Tax (13%):</span>
      <span>${tax.toFixed(2)}</span>
    </div>
    <div class="summary-row total">
      <span>Total:</span>
      <span>${total.toFixed(2)}</span>
    </div>
    <button class="checkout-btn" onclick="navigateTo('checkout')">Proceed to Checkout</button>
  `;
}

function updateQuantity(gameId, change) {
  const item = cart.find((i) => i.id === gameId);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(gameId);
    } else {
      updateBadges();
      loadCartPage();
    }
  }
}

function removeFromCart(gameId) {
  cart = cart.filter((item) => item.id !== gameId);
  updateBadges();
  loadCartPage();
}

// Wishlist Functions
function loadWishlistPage() {
  const container = document.getElementById("wishlistItems");

  if (wishlist.length === 0) {
    container.innerHTML = "<p>Your wishlist is empty</p>";
    return;
  }

  container.innerHTML = wishlist
    .map(
      (item) => `
    <div class="wishlist-item">
      <img src="${item.image}" alt="${item.title}">
      <div class="item-info">
        <h3>${item.title}</h3>
        <p>${item.price.toFixed(2)}</p>
        <p>${item.description}</p>
      </div>
      <div class="item-actions">
        <button class="btn-cart" onclick="addToCart(${
          item.id
        })">Add to Cart</button>
        <button class="remove-btn" onclick="removeFromWishlist(${
          item.id
        })">Remove</button>
      </div>
    </div>
  `
    )
    .join("");
}

function removeFromWishlist(gameId) {
  wishlist = wishlist.filter((item) => item.id !== gameId);
  updateBadges();
  loadWishlistPage();
}

// About Page
function loadAboutPage() {
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contactName").value;
    const email = document.getElementById("contactEmail").value;
    const message = document.getElementById("contactMessage").value;
    const error = document.getElementById("contactError");

    if (!validateEmail(email)) {
      error.textContent = "Please enter a valid email address";
      return;
    }

    if (message.trim() === "") {
      error.textContent = "Please enter a message";
      return;
    }

    error.textContent = "";
    alert("Thank you for contacting us! We will get back to you soon.");
    form.reset();
  });
}

// Checkout Page
function loadCheckoutPage() {
  const form = document.getElementById("checkoutForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const cardName = document.getElementById("cardName").value;
    const cardNumber = document.getElementById("cardNumber").value;
    const expiryDate = document.getElementById("expiryDate").value;
    const cvv = document.getElementById("cvv").value;
    const email = document.getElementById("checkoutEmail").value;
    const error = document.getElementById("checkoutError");

    // Validate
    if (!validateEmail(email)) {
      error.textContent = "Please enter a valid email address";
      return;
    }

    if (!/^\d{16}$/.test(cardNumber)) {
      error.textContent = "Card number must be 16 digits";
      return;
    }

    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      error.textContent = "Expiry date must be in MM/YY format";
      return;
    }

    if (!/^\d{3,4}$/.test(cvv)) {
      error.textContent = "CVV must be 3 or 4 digits";
      return;
    }

    error.textContent = "";

    // Show loading spinner
    document.getElementById("loadingSpinner").classList.remove("hidden");
    form.style.display = "none";

    // Simulate processing
    setTimeout(() => {
      generateReceipt(email);
    }, 2000);
  });
}

// Receipt Page
function generateReceipt(email) {
  const orderNumber = generateOrderNumber();
  const orderDate = new Date().toLocaleDateString("en-GB");
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.13;
  const total = subtotal + tax;

  const container = document.getElementById("receiptContainer");
  container.innerHTML = `
    <h1>Order Confirmation</h1>
    <div class="receipt-info">
      <p><strong>Order Number:</strong> ${orderNumber}</p>
      <p><strong>Order Date:</strong> ${orderDate}</p>
      <p><strong>Email:</strong> ${email}</p>
    </div>
    
    <div class="receipt-items">
      <h2>Order Items</h2>
      ${cart
        .map(
          (item) => `
        <div class="receipt-item">
          <div>
            <strong>${item.title}</strong>
            <p>Quantity: ${item.quantity}</p>
          </div>
          <div>${(item.price * item.quantity).toFixed(2)}</div>
        </div>
      `
        )
        .join("")}
    </div>
    
    <div class="receipt-summary">
      <p>
        <span>Subtotal:</span>
        <span>${subtotal.toFixed(2)}</span>
      </p>
      <p>
        <span>Tax (13%):</span>
        <span>${tax.toFixed(2)}</span>
      </p>
      <p class="total">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </p>
    </div>
    
    <div class="receipt-actions">
      <button class="continue-btn" onclick="continueShop()">Continue Shopping</button>
      <button class="print-btn" onclick="printReceipt()">Print Receipt</button>
    </div>
  `;

  // Clear cart
  cart = [];
  updateBadges();

  navigateTo("receipt");
}

function generateOrderNumber() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const random = Math.floor(1000 + Math.random() * 9000);
  return `ORD-${year}${month}${day}-${random}`;
}

function continueShop() {
  navigateTo("home");
}

function printReceipt() {
  window.print();
}

// Helper Functions
function createGameCard(game) {
  return `
    <div class="games-card">
      <img src="${game.image}" alt="${game.title}">
      <div class="game-info">
        <h3>${game.title}</h3>
      </div>
    </div>
  `;
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
