function About() {
  return (
    <div className="page">
      {/* ============================================================
          ABOUT HEADER
          TODO: Change the heading and subtitle for YOUR restaurant.
          ============================================================ */}
      <div className="about-header">
        <h1>About Hawa Khana Restaurant</h1>
        <p className="subtitle">Authentic Roots. Modern Plates.</p>
      </div>

      {/* ============================================================
          YOUR STORY
          TODO: Write 2-3 paragraphs telling YOUR restaurant's story.
          Be creative! You can make it all up. Think about:
          - How did the restaurant start?
          - Who founded it and why?
          - What is the restaurant's mission or philosophy?
          ============================================================ */}
      <div className="about-story">
        <p>
          The story of Bigreko Khana began as a small joke among a group of software developers who wanted to find "real food" that didn't feel like a corporate script. Inspired by the quirky Nepali phrase for "spoiled food," our founder decided to flip the script and create a space where the name was silly but the quality was unmatched. What started as a late-night kitchen experiment blending traditional Himalayan spices with modern street food favorites quickly became a local sensation, driven by a passion for unique flavor profiles.
        </p>
        <p>
          As word spread, the "Bigreko" concept grew from a weekend pop-up to a permanent home in the heart of the city. We faced the challenge of staying true to our traditional roots while embracing a high-energy, modern vibe, but our community of culinary explorers kept us moving forward. Today, we are known as the go-to spot for anyone who wants a meal that is both comforting and completely unexpected, proving that a weird name is often a sign of a great story.
        </p>
        <p>
          Our mission is to bridge the gap between "Tech and Tradition," offering a high-energy space where every guest feels like a part of the family. We want you to feel the warmth of a traditional kitchen and the excitement of modern innovation the moment you walk through our doors. It is this commitment to high-quality ingredients and a relaxed, friendly atmosphere that keeps our guests coming back for more—because at Bigreko Khana, the only thing "broken" is the mold of the traditional restaurant.
        </p>
      </div>

      <div className="about-divider"></div>

      {/* ============================================================
          MEET THE TEAM
          TODO: Create 2-3 fictional team members for YOUR restaurant.
          Change the emoji, name, role, and bio for each person.
          ============================================================ */}
      <div className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-avatar">👨‍🍳</div>
            <h3>Chef Aayush</h3>
            <p className="role">Executive Chef</p>
            <p>With over 15 years of experience in Himalayan kitchens, Aayush is the mastermind behind our fusion recipes. He specializes in blending traditional spices with modern cooking techniques to create our signature dishes.</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">👩‍💼</div>
            <h3>Sarina Poudel</h3>
            <p className="role">General Manager</p>
            <p>Sarina keeps the "Tech-Meets-Tradition" vibe alive, ensuring that every guest has a seamless and friendly experience. She is passionate about creating a high-energy atmosphere that feels like home for all our diners.</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">👨‍🍳</div>
            <h3>Bibek Sharma</h3>
            <p className="role">Head of Innovations</p>
            <p>Bibek is the creator of our "Main Modules" and the experimental spirit behind our seasonal specials. He loves finding new ways to surprise our guests with flavors they’ve never tasted before.</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">
              <img 
      src="/bhude.jpg" 
      alt="Sudip Amgain" 
      className="team-photo" 
      style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1rem' }}
    /></div>
            <h3>Dr. Sudip Amgain</h3>
            <p className="role">Dishwash Cleaner Expert</p>
            <p>Sudip, PhD in dishwashing, is the backbone of our kitchen's hygiene, ensuring every plate is spotless and ready for its next fusion masterpiece. His dedication to cleanliness ensures that our "real food" is always served on perfectly polished surfaces.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
