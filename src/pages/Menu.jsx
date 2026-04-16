import { useState, useEffect } from "react";

// ============================================================
// WEEK 3: Uncomment these two imports AFTER setting up Firebase:
// ============================================================
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../firebase";

// ============================================================
// MENU DATA FROM YOUR PLANNING DOCUMENT
// This allows the menu to show your items before Firebase is set up.
// ============================================================
const sampleMenuItems = [
  {
    id: "1",
    name: "Everest Momos",
    description: "Steamed dumplings with a spicy fusion dipping sauce.",
    price: 10.99,
    category: "Quick Bites",
  },
  {
    id: "2",
    name: "Crispy Chili Cauliflower",
    description: "Flash-fried florets tossed in a spicy Szechuan-Nepalese fusion glaze.",
    price: 8.99,
    category: "Quick Bites",
  },
  {
    id: "3",
    name: "Chicken Wings",
    description: "Chicken wings with a special Nepali spice rub.",
    price: 12.99,
    category: "Quick Bites",
  },
  {
    id: "4",
    name: "Hawa Sel Roti",
    description: "Traditional rice bread topped with melted cheese.",
    price: 6.99,
    category: "Quick Bites",
  },
  {
    id: "5",
    name: "Kathmandu Chicken Sandwich",
    description: "A juicy chicken burger with Nepali spices and mint sauce. Served with fries and drinks.",
    price: 10.99,
    category: "Main Plates",
  },
  {
    id: "6",
    name: "Fusion Curry Bowl",
    description: "Slow-cooked curry served with rice and a fresh salad.",
    price: 11.99,
    category: "Main Plates",
  },
  {
    id: "7",
    name: "Spicy Pasta",
    description: "Italian pasta cooked with a spicy Himalayan twist.",
    price: 10.99,
    category: "Main Plates",
  },
  {
    id: "8",
    name: "Fusion Thali Platter",
    description: "A sampler of black lentils, mustard greens, seasonal curry, and fermented pickles.",
    price: 13.99,
    category: "Main Plates",
  },
  {
    id: "9",
    name: "Yak Cheese Platter",
    description: "Locally sourced artisanal cheeses paired with spiced honey and house-made crackers.",
    price: 6.99,
    category: "Quick Bites/ Deserts",
  },
  {
    id: "10",
    name: "Sweet Curd Mousse",
    description: "A light dessert made with sweet yogurt and nuts.",
    price: 5.99,
    category: "Quick Bites/ Deserts",
  },
];

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMenu() {
      try {
        // ==========================================================
        // WEEK 3: FIREBASE VERSION
        // ==========================================================
        /* const querySnapshot = await getDocs(collection(db, "menuItems"));
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMenuItems(items);
        */

        // ==========================================================
        // SAMPLE DATA VERSION (delete this block in Week 3)
        // ==========================================================
        await new Promise((resolve) => setTimeout(resolve, 500));
        setMenuItems(sampleMenuItems);
      } catch (err) {
        console.error("Error fetching menu:", err);
        setError("Failed to load menu. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchMenu();
  }, []);

  if (loading) {
    return (
      <div className="page">
        <p className="loading-message">Loading menu...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page">
        <p className="error-message">{error}</p>
      </div>
    );
  }

  // Group items by category automatically
  const categories = [...new Set(menuItems.map((item) => item.category))];

  return (
    <div className="page">
      <div className="menu-header">
        <h1>Bigreko Khana Menu</h1>
        <p>Experience the best of Modern Nepali Fusion.</p>
      </div>

      {categories.map((category) => (
        <div key={category} className="menu-category">
          <h2>{category}</h2>
          <div className="menu-items">
            {menuItems
              .filter((item) => item.category === category)
              .map((item) => (
                <div key={item.id} className="menu-item">
                  <h3>{item.name}</h3>
                  <p className="description">{item.description}</p>
                  <p className="price">${item.price.toFixed(2)}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;