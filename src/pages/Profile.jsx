import React from "react";
import "./ProfilePage.css"; // Import the CSS file for styling

const ProfilePage = () => {
  // Dummy user data
  const user = {
    name: "John Doe",
    biography:
      "I am a passionate cook and love to experiment with different recipes.",
    savedRecipes: [
      { id: 1, title: "Pasta Carbonara" },
      { id: 2, title: "Chicken Curry" },
      { id: 3, title: "Chocolate Cake" },
    ],
    likedRecipes: [
      { id: 4, title: "Roasted Vegetables" },
      { id: 5, title: "Homemade Pizza" },
    ],
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1 className="profile-name">{user.name}</h1>
        <p className="profile-bio">{user.biography}</p>
      </div>

      <div className="profile-section">
        <h2 className="profile-section-title">Saved Recipes</h2>
        {user.savedRecipes.length > 0 ? (
          <ul className="recipe-list">
            {user.savedRecipes.map((recipe) => (
              <li key={recipe.id} className="recipe-item">
                {recipe.title}
              </li>
            ))}
          </ul>
        ) : (
          <p className="empty-message">No saved recipes.</p>
        )}
      </div>

      <div className="profile-section">
        <h2 className="profile-section-title">Liked Recipes</h2>
        {user.likedRecipes.length > 0 ? (
          <ul className="recipe-list">
            {user.likedRecipes.map((recipe) => (
              <li key={recipe.id} className="recipe-item">
                {recipe.title}
              </li>
            ))}
          </ul>
        ) : (
          <p className="empty-message">No liked recipes.</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
