import { useState, useEffect } from "react";

// ============================================================
// FIREBASE IMPORTS
// We only need collection and getDocs now to read your menu.
// ============================================================
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMenu() {
      try {
        // Fetching your actual items from the "menuItems" collection.
        const querySnapshot = await getDocs(collection(db, "menuItems"));
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMenuItems(items);
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

  // Groups your items by category (Quick Bites, Main Plates, etc.)[cite: 38].
  const categories = [...new Set(menuItems.map((item) => item.category))];

  return (
    <div className="page">
      <div className="menu-header">
        <h1>Bigreko Khana Menu</h1> {/* [cite: 28] */}
        <p>Experience the best of Modern Nepali Fusion.</p> {/* [cite: 8] */}
      </div>

      {categories.map((category) => (
        <div key={category} className="menu-category">
          <h2>{category}</h2>
          <div className="menu-items">
            {menuItems
              .filter((item) => item.category === category)
              .map((item) => (
                <div key={item.id} className="menu-item">
                  <h3>{item.name || "Unnamed Dish"}</h3>
                  <p className="description">{item.description || "No description available."}</p>
                  {/* Displays price with 2 decimal places[cite: 22]. */}
                  <p className="price">${(item.price || 0).toFixed(2)}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;