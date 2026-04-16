import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      {/* ============================================================
          HERO SECTION
          TODO: Replace the name, tagline, and button text with yours.
          ============================================================ */}
      <section className="hero">
        <h1>Hawa Khana Restaurant</h1>
        <p className="tagline">Real food. Weird name.</p>
        <Link to="/menu" className="cta-button">
          View Our Menu
        </Link>
      </section>

      {/* ============================================================
          WELCOME SECTION
          TODO: Write 1-2 paragraphs about YOUR restaurant.
          What makes it special? What's your story?
          ============================================================ */}
      <section className="welcome-section">
        <div className="welcome-text">
          <h2>Welcome</h2>
          <p>
            Welcome to Hawa Khana Restaurant, where we prove that a quirky name actually leads to some of the best "real food" you'll ever taste. We specialize in Modern Nepali Fusion, serving up a creative menu that blends traditional Himalayan spices with modern favorites. Whether you are craving our signature Kathmandu Burger with mint sauce or our spicy Fusion Momos, every dish is designed to be a high-quality culinary adventure. You should eat here because we provide a relaxed, friendly environment that is perfect for students and food lovers who want to try something bold and new.
          </p>
          <p style={{ marginTop: "1rem" }}>
            Our story began with a simple mission: to stay grounded in our authentic roots while serving unique, modern plates. We believe that the best dining experiences happen when you don't take yourself too seriously, which is why we pair our fun atmosphere with a serious passion for fresh ingredients. From our "Quick Bites" like Cheesy Sel Roti to our slow-cooked Fusion Curry Bowls, our philosophy is to honor traditional recipes while adding a modern twist. When you dine with us, you aren't just getting a meal—you're joining a community that celebrates great food and a good laugh.
          </p>
        </div>
        <div className="welcome-image">
          <img src="restaurant-hero-photo.png" alt="Bigreko Khana Restaurant" />
        </div>
      </section>

      {/* ============================================================
          FEATURE CARDS
          TODO: Change the icons, titles, and descriptions below
          to highlight 3 things that make YOUR restaurant special.
          ============================================================ */}
      <section>
        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">🍽️</div>
            <h3>Himalayan Spice Fusion</h3>
            <p>We take traditional Nepali spices and mix them with modern favorites like our signature Kathmandu Burger. It is the perfect blend of authentic Himalayan roots and modern culinary trends.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⭐</div>
            <h3>Quirky & Cool Atmosphere</h3>
            <p>Our space features industrial brick walls and neon signs to create a trendy, high-energy vibe. It is the best spot in town to relax with friends or grab a quick "byte" between classes.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">❤️</div>
            <h3>Serious Food, Silly Name</h3>
            <p>Don't let the name "Bigreko Khana" fool you—we are incredibly serious about the quality of our ingredients. Every dish is a handcrafted masterpiece designed to prove that great food doesn't have to be formal.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
