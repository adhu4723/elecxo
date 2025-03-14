const electronicProducts = [
    {
        id: 1,
        name: "Apple iPhone 13 Pro",
        ratings: 4.8,
        category: "Mobiles",
        rate: 99900, // ₹99,900
        description: "The iPhone 13 Pro features a stunning Super Retina XDR display, A15 Bionic chip, and a pro camera system for stunning photos and videos.",
        image: "https://pngimg.com/d/iphone_12_PNG18.png"
    },
    {
        id: 2,
        name: "Samsung Galaxy S21 Ultra",
        ratings: 4.7,
        category: "Mobiles",
        rate: 84999, // ₹84,999
        description: "The Samsung Galaxy S21 Ultra boasts a dynamic AMOLED 2X display, Exynos 2100 chipset, and a versatile quad-camera setup.",
        image: "https://images.samsung.com/is/image/samsung/p6pim/hk_en/galaxy-s21/gallery/hk-en-galaxy-s21-5g-g991-sm-g9910zigtgy-368805533?$624_624_PNG$"
    },
    {
        id: 3,
        name: "Sony WH-1000XM4",
        ratings: 4.6,
        category: "Headphones",
        rate: 24990, // ₹24,990
        description: "Industry-leading noise cancellation, exceptional sound quality, and up to 30 hours of battery life make these headphones a top choice.",
        image: "https://sony.scene7.com/is/image/sonyglobalsolutions/360-RA-category-icon-20221202?$S7Product$&fmt=png-alpha"
    },
    {
        id: 4,
        name: "Bose QuietComfort 45",
        ratings: 4.5,
        category: "Headphones",
        rate: 22999, // ₹22,999
        description: "The Bose QuietComfort 45 offers world-class noise cancellation, balanced audio, and a comfortable fit for long listening sessions.",
        image: "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc45/product_silo_images/QC45-LE_Right-Angle_1200x1022_Midnight-Blue_RGB.jpg/jcr:content/renditions/cq5dam.web.1920.1920.jpeg"
    },
    {
        id: 5,
        name: "Apple Watch Series 9",
        ratings: 4.7,
        category: "Wearables",
        rate: 41900, // ₹41,900
        description: "The Apple Watch Series 9 features a larger, more durable display, advanced health monitoring, and fast charging.",
        image: "https://i0.wp.com/cellbuddy.in/buddy/wp-content/uploads/2022/09/Series-7-41-_-45mm-GPS-Blue.png?fit=800%2C800&ssl=1"
    },
    {
        id: 6,
        name: "MacBook Pro 14-inch (M2)",
        ratings: 4.9,
        category: "Laptops",
        rate: 99900, // ₹1,99,900
        description: "The MacBook Pro 14-inch comes with the powerful M2 Pro chip, a stunning Liquid Retina XDR display, and all-day battery life.",
        image: "https://atlas-content-cdn.pixelsquid.com/stock-images/apple-macbook-pro-14-inch-silver-Ka8Ke1E-600.jpg"
    },
    {
        id: 7,
        name: "Dell XPS 13",
        ratings: 4.6,
        category: "Laptops",
        rate: 29999, // ₹1,29,999
        description: "The Dell XPS 13 is a sleek and powerful ultrabook with an InfinityEdge display, 11th Gen Intel Core processors, and long battery life.",
        image: "https://images-cdn.ubuy.co.in/635db62feaed300587621b54-dell-xps-13-9310-touchscreen-13-4-inch.jpg"
    },
    {
        id: 8,
        name: "Sony Bravia XR A80J",
        ratings: 4.8,
        category: "Televisions",
        rate: 89999, // ₹1,89,999
        description: "The Sony Bravia XR A80J features a 4K OLED display, Cognitive Processor XR, and Acoustic Surface Audio+ for an immersive viewing experience.",
        image: "https://financialexpresswpcontent.s3.amazonaws.com/uploads/2021/10/sony-a80j2.png"
    },
    {
        id: 9,
        name: "LG C1 OLED",
        ratings: 4.7,
        category: "Televisions",
        rate: 79999, // ₹1,39,999
        description: "The LG C1 OLED TV offers stunning picture quality, Dolby Vision IQ, and HDMI 2.1 support for next-gen gaming.",
        image: "https://www.lg.com/content/dam/channel/wcms/in/images/tvs/oled48c1xtz_atr_eail_in_c/gallery/OLED48C1XTZ-DZ-05.jpg"
    },
    {
        id: 10,
        name: "Canon EOS R5",
        ratings: 4.8,
        category: "Cameras",
        rate: 19999, // ₹3,19,999
        description: "The Canon EOS R5 is a full-frame mirrorless camera with 8K video recording, 45MP resolution, and advanced autofocus.",
        image: "https://i.pcmag.com/imagery/articles/0311VwJ7y9BQi7vkjLtfuiw-1..v1594234890.jpg"
    },
    {
        id: 11,
        name: "Sony Alpha 7 IV",
        ratings: 4.7,
        category: "Cameras",
        rate: 90999, // ₹1,99,999
        description: "The Sony Alpha 7 IV features a 33MP full-frame sensor, 4K 60p video, and real-time eye autofocus for both photos and videos.",
        image: "https://images-cdn.ubuy.co.in/65f314399d244b6db90b1676-sony-alpha-a7-iv-full-frame-mirrorless.jpg"
    },
    {
        id: 12,
        name: "Amazon Echo Dot (5th Gen)",
        ratings: 4.4,
        category: "Smart Home",
        rate: 5499, // ₹5,499
        description: "The Amazon Echo Dot (5th Gen) is a compact smart speaker with Alexa, improved sound quality, and voice control for your smart home.",
        image: "https://i.pcmag.com/imagery/reviews/04e3bEzJD7ng3WviIdH5URF-1.fit_scale.size_760x427.v1601313845.jpg"
    },
    {
        id: 13,
        name: "Apple iPhone 14 Pro",
        ratings: 4.8,
        category: "Mobiles",
        rate: 129900, // ₹1,29,900
        description: "The iPhone 14 Pro features a stunning Super Retina XDR display, A16 Bionic chip, and a pro camera system for stunning photos and videos.",
        image: "https://pngimg.com/d/iphone_12_PNG18.png"
    },
    {
        id: 14,
        name: "Samsung Galaxy Z Fold 4",
        ratings: 4.7,
        category: "Mobiles",
        rate: 154999, // ₹1,54,999
        description: "The Samsung Galaxy Z Fold 4 offers an immersive foldable display, Snapdragon 8+ Gen 1 processor, and multitasking capabilities.",
        image: "https://images.samsung.com/is/image/samsung/p6pim/in/sm-f936bzkhinu/gallery/in-galaxy-z-fold4-f936-432849-sm-f936bzkhinu-533834337?$720_576_PNG$"
    },
    {
        id: 15,
        name: "Google Pixel 7 Pro",
        ratings: 4.6,
        category: "Mobiles",
        rate: 84999, // ₹84,999
        description: "Google Pixel 7 Pro features a powerful Tensor G2 chip, an advanced camera system, and a stunning 120Hz OLED display.",
        image: "https://store.google.com/Pixel_7_Pro_White.png"
    },
    {
        id: 16,
        name: "JBL Charge 5",
        ratings: 4.5,
        category: "Speakers",
        rate: 15999, // ₹15,999
        description: "JBL Charge 5 delivers powerful sound, a built-in power bank, and IP67 waterproof rating for outdoor adventures.",
        image: "https://www.jbl.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw8aef1161/JBL_Charge_5_Hero.png"
    },
    {
        id: 17,
        name: "Asus ROG Strix G15",
        ratings: 4.8,
        category: "Laptops",
        rate: 124999, // ₹1,24,999
        description: "The Asus ROG Strix G15 is a gaming powerhouse featuring Ryzen 9, RTX 3070, and a 300Hz refresh rate display.",
        image: "https://dlcdnwebimgs.asus.com/gain/6F8E91EC-4E4F-4B26-9153-56D4E586E55A"
    },
    {
        id: 18,
        name: "Samsung 55-inch QN90B Neo QLED TV",
        ratings: 4.9,
        category: "Televisions",
        rate: 59999, // ₹1,59,999
        description: "Samsung QN90B Neo QLED TV features Quantum Matrix Technology, 4K AI upscaling, and a stunning HDR experience.",
        image: "https://images.samsung.com/is/image/samsung/p6pim/in/qa55qn90baklxl/gallery/in-qled-qn90b-qa55qn90baklxl-537166497?$684_547_PNG$"
    },
    {
        id: 19,
        name: "GoPro Hero 11 Black",
        ratings: 4.7,
        category: "Cameras",
        rate: 44999, // ₹44,999
        description: "The GoPro Hero 11 Black features 5.3K video, HyperSmooth 5.0 stabilization, and waterproof capabilities for adventure enthusiasts.",
        image: "https://assets.gadgetandgear.com/upload/product/20221014_1665723000_878544.jpeg"
    },
    {
        id: 20,
        name: "Dyson V15 Detect Vacuum Cleaner",
        ratings: 4.8,
        category: "Home Appliances",
        rate: 62900, // ₹62,900
        description: "The Dyson V15 Detect features laser dust detection, powerful suction, and intelligent cleaning modes.",
        image: "https://www.dyson.com.sg/media/catalog/product/cache/0d02df05d5aef33a5a2a589bdfdce9cc/v/1/v15detect-1.png"
    },
    {
        id: 21,
        name: "Sony PlayStation 5",
        ratings: 4.9,
        category: "Gaming",
        rate: 54999, // ₹54,999
        description: "The PlayStation 5 delivers ultra-fast SSD performance, 4K gaming, and immersive haptic feedback with the DualSense controller.",
        image: "https://cdn.alzashop.com/ImgW.ashx?fd=f4&cd=PS5"
    }
];

export default electronicProducts;
