// بيانات المنيو - Family Broast Restaurant
const MENU_DATA = {
    restaurant: {
        name: "Family Broast",
        nameAr: "فاميلي بروست",
        slogan: "Broast Chicken",
        phone1: "01040484460",
        phone2: "01044195791",
        footerInfoAr: "جميع الوجبات تقدم مع خبز وبطاطس وكولسلو",
        footerInfoEn: "All meals are served with bread, fries, and coleslaw",
        logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='95' fill='%23fff' stroke='%23c41e3a' stroke-width='5'/%3E%3Ctext x='100' y='80' text-anchor='middle' font-size='24' font-weight='bold' fill='%23c41e3a'%3EFAMILY%3C/text%3E%3Ctext x='100' y='110' text-anchor='middle' font-size='28' font-weight='bold' fill='%23c41e3a'%3EBROAST%3C/text%3E%3Ctext x='100' y='135' text-anchor='middle' font-size='12' fill='%23333'%3EBroast Chicken%3C/text%3E%3C/svg%3E"
    },
    categories: [
        {
            id: "broast-meals",
            name: "وجبات البروست",
            nameEn: "Broast Meals",
            icon: "🍗",
            items: [
                {
                    id: 1,
                    name: "سناك ميل",
                    nameEn: "Snack Meal",
                    description: "2 قطعة دجاج - مع خبز وكولسلو وبطاطس",
                    descriptionEn: "2 Chicken pieces - with bread, coleslaw, and fries",
                    price: "100",
                    image: "https://images.unsplash.com/photo-1626645738196-c2a72c8bc67b?w=400"
                },
                {
                    id: 2,
                    name: "دينر ميل",
                    nameEn: "Dinner Meal",
                    description: "3 قطعة دجاج - مع خبز وكولسلو وبطاطس",
                    descriptionEn: "3 Chicken pieces - with bread, coleslaw, and fries",
                    price: "135",
                    image: "https://images.unsplash.com/photo-1626645738196-c2a72c8bc67b?w=400"
                },
                {
                    id: 3,
                    name: "سوبر دينر",
                    nameEn: "Super Dinner",
                    description: "4 قطعة دجاج - مع خبز وكولسلو وبطاطس",
                    descriptionEn: "4 Chicken pieces - with bread, coleslaw, and fries",
                    price: "175",
                    image: "https://images.unsplash.com/photo-1626645738196-c2a72c8bc67b?w=400"
                },
                {
                    id: 4,
                    name: "فاميلي ميل",
                    nameEn: "Family Meal",
                    description: "8 قطعة دجاج - مع خبز وكولسلو وبطاطس",
                    descriptionEn: "8 Chicken pieces - with bread, coleslaw, and fries",
                    price: "350",
                    image: "https://images.unsplash.com/photo-1626645738196-c2a72c8bc67b?w=400"
                },
                {
                    id: 5,
                    name: "سوبر فاميلي",
                    nameEn: "Super Family",
                    description: "12 قطعة دجاج - مع خبز وكولسلو وبطاطس",
                    descriptionEn: "12 Chicken pieces - with bread, coleslaw, and fries",
                    price: "510",
                    image: "https://images.unsplash.com/photo-1626645738196-c2a72c8bc67b?w=400"
                },
                {
                    id: 6,
                    name: "اكس بوكس",
                    nameEn: "X-Box",
                    description: "15 قطعة دجاج - مع خبز وكولسلو وبطاطس",
                    descriptionEn: "15 Chicken pieces - with bread, coleslaw, and fries",
                    price: "640",
                    image: "https://images.unsplash.com/photo-1626645738196-c2a72c8bc67b?w=400"
                },
                {
                    id: 7,
                    name: "فاميلي بوكس",
                    nameEn: "Family Box",
                    description: "20 قطعة دجاج - مع خبز وكولسلو وبطاطس",
                    descriptionEn: "20 Chicken pieces - with bread, coleslaw, and fries",
                    price: "850",
                    image: "https://images.unsplash.com/photo-1626645738196-c2a72c8bc67b?w=400"
                }
            ]
        },
        {
            id: "strips-meals",
            name: "وجبات استربس",
            nameEn: "Strips Meals",
            icon: "🍟",
            items: [
                {
                    id: 8,
                    name: "استربس ميل",
                    nameEn: "Strips Meal",
                    description: "3 قطع استربس - مع خبز وكولسلو وبطاطس",
                    descriptionEn: "3 Strips pieces - with bread, coleslaw, and fries",
                    price: "100",
                    image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400"
                },
                {
                    id: 9,
                    name: "سوبر ميل",
                    nameEn: "Super Meal",
                    description: "5 قطع استربس - مع خبز وكولسلو وبطاطس",
                    descriptionEn: "5 Strips pieces - with bread, coleslaw, and fries",
                    price: "175",
                    image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400"
                },
                {
                    id: 10,
                    name: "تيم ميل",
                    nameEn: "Team Meal",
                    description: "10 قطع استربس - مع خبز وكولسلو وبطاطس",
                    descriptionEn: "10 Strips pieces - with bread, coleslaw, and fries",
                    price: "340",
                    image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400"
                },
                {
                    id: 11,
                    name: "فاميلي استربس",
                    nameEn: "Family Strips",
                    description: "20 قطعة استربس - مع خبز وكولسلو وبطاطس",
                    descriptionEn: "20 Strips pieces - with bread, coleslaw, and fries",
                    price: "670",
                    image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400"
                },
                {
                    id: 12,
                    name: "ميكس استربس",
                    nameEn: "Mix Strips",
                    description: "3 قطع استربس + 3 قطع بروست - مع خبز وكولسلو وبطاطس",
                    descriptionEn: "3 Strips + 3 Broast pieces - with bread, coleslaw, and fries",
                    price: "230",
                    image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400"
                },
                {
                    id: 13,
                    name: "بيج ميكس",
                    nameEn: "Big Mix",
                    description: "5 قطع استربس + 5 قطع بروست - مع خبز وكولسلو وبطاطس",
                    descriptionEn: "5 Strips + 5 Broast pieces - with bread, coleslaw, and fries",
                    price: "400",
                    image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400"
                }
            ]
        },
        {
            id: "beef-burgers",
            name: "برجر اللحم",
            nameEn: "Beef Burgers",
            icon: "🍔",
            items: [
                {
                    id: 14,
                    name: "كلاسيك بيف برجر",
                    nameEn: "Classic Beef Burger",
                    description: "قطعة بيف، خس، طماطم، مخلل، بصل، شرائح جبنة، صوص جبنة",
                    descriptionEn: "Beef patty, lettuce, tomato, pickles, onion, cheese slice, cheese sauce",
                    price: "110/160",
                    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400"
                },
                {
                    id: 15,
                    name: "سموكي بيف برجر",
                    nameEn: "Smoky Beef Burger",
                    description: "قطعة بيف، خس، طماطم، مخلل، بصل، جبنة، لحم مدخن، صوص سموكي، موتزريلا",
                    descriptionEn: "Beef patty, lettuce, tomato, pickles, onion, cheese, smoked meat, smoky sauce, mozzarella",
                    price: "110/160",
                    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400"
                },
                {
                    id: 16,
                    name: "ماشروم بيف برجر",
                    nameEn: "Mushroom Beef Burger",
                    description: "قطعة بيف، خس، طماطم، مخلل، بصل، جبنة، ماشروم، صوص رانش",
                    descriptionEn: "Beef patty, lettuce, tomato, pickles, onion, cheese, mushroom, ranch sauce",
                    price: "110/160",
                    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400"
                },
                {
                    id: 17,
                    name: "دراجون ميكس فاير",
                    nameEn: "Dragon Mix Fire",
                    description: "قطعة بيف + صدور فراخ، خس، طماطم، مخلل، بصل، جبنة، صوص رانش، موتزريلا",
                    descriptionEn: "Beef patty + Chicken breast, lettuce, tomato, pickles, onion, cheese, ranch sauce, mozzarella",
                    price: "160",
                    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400"
                }
            ]
        },
        {
            id: "chicken-burgers",
            name: "برجر الفراخ",
            nameEn: "Chicken Burgers",
            icon: "🍗",
            items: [
                {
                    id: 18,
                    name: "كرانشي تشيكن برجر",
                    nameEn: "Crunchy Chicken Burger",
                    description: "برجر دجاج، خس، طماطم، صوص مايونيز، صوص جبنة، حلقات بصل",
                    descriptionEn: "Chicken burger, lettuce, tomato, mayo sauce, cheese sauce, onion rings",
                    price: "110/140",
                    image: "https://images.unsplash.com/photo-1615297928064-24977384d0da?w=400"
                },
                {
                    id: 19,
                    name: "جولدن تشيكن برجر",
                    nameEn: "Golden Chicken Burger",
                    description: "برجر دجاج، خس، طماطم، صوص مايونيز، صوص جبنة، بيض مقلي، صوص تشيلي، بصل",
                    descriptionEn: "Chicken burger, lettuce, tomato, mayo sauce, cheese sauce, fried egg, chili sauce, onion",
                    price: "110/140",
                    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400"
                }
            ]
        },
        {
            id: "chicken-sandwiches",
            name: "سندوتشات الفراخ",
            nameEn: "Chicken Sandwiches",
            icon: "🌯",
            items: [
                {
                    id: 20,
                    name: "تشيكن كريسبي",
                    nameEn: "Chicken Crispy",
                    description: "صدور دجاج، خس، طماطم، مايونيز، صوص جبنة",
                    descriptionEn: "Chicken breast, lettuce, tomato, mayo, cheese sauce",
                    price: "80/120",
                    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400"
                },
                {
                    id: 21,
                    name: "تشيكن ماشروم",
                    nameEn: "Chicken Mushroom",
                    description: "صدور دجاج، خس، طماطم، مايونيز، صوص جبنة، ماشروم، رانش",
                    descriptionEn: "Chicken breast, lettuce, tomato, mayo, cheese sauce, mushroom, ranch",
                    price: "90/130",
                    image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400"
                },
                {
                    id: 22,
                    name: "تركي رانش",
                    nameEn: "Turkey Ranch",
                    description: "صدور دجاج، خس، طماطم، جبنة، تركي مدخن، رانش، حلقات بصل",
                    descriptionEn: "Chicken breast, lettuce, tomato, cheese, smoked turkey, ranch, onion rings",
                    price: "90/130",
                    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400"
                },
                {
                    id: 23,
                    name: "سموكي بيكون",
                    nameEn: "Smoky Bacon",
                    description: "صدور دجاج، خس، طماطم، مايونيز، صوص جبنة، لحم مدخن، صوص سموكي",
                    descriptionEn: "Chicken breast, lettuce, tomato, mayo, cheese sauce, smoked beef, smoky sauce",
                    price: "90/130",
                    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400"
                },
                {
                    id: 24,
                    name: "دراجون فاير",
                    nameEn: "Dragon Fire",
                    description: "صدور دجاج، خس، طماطم، هالبينو، صوص سبايسي",
                    descriptionEn: "Chicken breast, lettuce, tomato, jalapeño, spicy sauce",
                    price: "80/120",
                    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400"
                },
                {
                    id: 25,
                    name: "تويستر رانش",
                    nameEn: "Twister Ranch",
                    description: "صدور دجاج، خس، طماطم، صوص جبنة، رانش",
                    descriptionEn: "Chicken breast, lettuce, tomato, cheese sauce, ranch",
                    price: "85",
                    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400"
                },
                {
                    id: 26,
                    name: "تويستر فرايز",
                    nameEn: "Twister Fries",
                    description: "فرايز، خس، طماطم، صوص جبنة، رانش",
                    descriptionEn: "Fries, lettuce, tomato, cheese sauce, ranch",
                    price: "45",
                    image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400"
                }
            ]
        },
        {
            id: "kids-meals",
            name: "وجبات أطفال",
            nameEn: "Kids Meals",
            icon: "👶",
            items: [
                {
                    id: 27,
                    name: "هابي ميل",
                    nameEn: "Happy Meal",
                    description: "1 قطعة دجاج - بطاطس، عصير، ألعاب",
                    descriptionEn: "1 Chicken piece - fries, juice, toy",
                    price: "90",
                    image: "https://images.unsplash.com/photo-1619881589670-43629f0e90f4?w=400"
                },
                {
                    id: 28,
                    name: "كيدز ميل",
                    nameEn: "Kids Meal",
                    description: "2 قطعة استربس - بطاطس، عصير، ألعاب",
                    descriptionEn: "2 Strips pieces - fries, juice, toy",
                    price: "80",
                    image: "https://images.unsplash.com/photo-1619881589670-43629f0e90f4?w=400"
                }
            ]
        },
        {
            id: "extras",
            name: "الاضافات",
            nameEn: "Extras",
            icon: "➕",
            items: [
                {
                    id: 29,
                    name: "فرايز",
                    nameEn: "Fries",
                    description: "بطاطس مقلية",
                    descriptionEn: "French Fries",
                    price: "20",
                    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400"
                },
                {
                    id: 30,
                    name: "فرايز تشيز",
                    nameEn: "Cheese Fries",
                    description: "بطاطس بالجبنة",
                    descriptionEn: "Fries with cheese",
                    price: "50",
                    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=400"
                },
                {
                    id: 31,
                    name: "فرايز تشيز كريسبي",
                    nameEn: "Crunchy Cheese Fries",
                    description: "بطاطس بالجبنة وكريسبي",
                    descriptionEn: "Fries with cheese and crunchy chicken",
                    price: "75",
                    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=400"
                },
                {
                    id: 32,
                    name: "رز ريزو",
                    nameEn: "Rizoo Rice",
                    description: "أرز بسمتي أصفر بقطع الفراخ والصوص",
                    descriptionEn: "Yellow Basmati Rice with chicken pieces and sauce",
                    price: "75",
                    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400"
                },
                {
                    id: 33,
                    name: "رز سادة",
                    nameEn: "Plain Rice",
                    description: "أرز بسمتي أصفر سادة",
                    descriptionEn: "Plain Yellow Basmati Rice",
                    price: "30",
                    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=400"
                },
                {
                    id: 34,
                    name: "موتزريلا ستيك 3 قطع",
                    nameEn: "Mozzarella Sticks 3pcs",
                    description: "موتزريلا ستيك مقرمشة",
                    descriptionEn: "Crunchy mozzarella sticks",
                    price: "50",
                    image: "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=400"
                },
                {
                    id: 35,
                    name: "حلقات بصل 5 قطع",
                    nameEn: "Onion Rings 5pcs",
                    description: "حلقات بصل مقرمشة",
                    descriptionEn: "Crunchy onion rings",
                    price: "40",
                    image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=400"
                },
                {
                    id: 36,
                    name: "صوص",
                    nameEn: "Sauce",
                    description: "صوص إضافي (تومية/رانش/سبايسي)",
                    descriptionEn: "Extra sauce (Garlic/Ranch/Spicy)",
                    price: "25/50",
                    image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=400"
                },
                {
                    id: 37,
                    name: "كولسلو",
                    nameEn: "Coleslaw",
                    description: "سلطة كولسلو طازجة",
                    descriptionEn: "Fresh coleslaw salad",
                    price: "10/20",
                    image: "https://images.unsplash.com/photo-1625938145744-533e82abccf0?w=400"
                },
                {
                    id: 38,
                    name: "مياه",
                    nameEn: "Water",
                    description: "مياه معدنية",
                    descriptionEn: "Mineral Water",
                    price: "10",
                    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400"
                },
                {
                    id: 39,
                    name: "كانز",
                    nameEn: "Cans",
                    description: "مشروبات غازية",
                    descriptionEn: "Soft drinks",
                    price: "20",
                    image: "https://images.unsplash.com/photo-1581098365948-6a5a912b7a49?w=400"
                }
            ]
        }
    ]
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MENU_DATA;
}
