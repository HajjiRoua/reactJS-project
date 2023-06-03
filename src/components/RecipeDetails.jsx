import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, Button, Image, Header, Segment, Icon } from 'semantic-ui-react';
import { getRecipe } from "../services/api";
import { Link } from "react-router-dom";

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState({});
  const [feedbacks, setFeedbacks] = useState([]);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const { recipeId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getRecipe(recipeId);
      if (result && result.recipe) {
        setRecipe(result.recipe);
      }
    };

    // const fetchFeedbacks = async () => {
    //   const result = await getFeedbacks(recipeId);
    //   if (result && result.feedbacks) {
    //     setFeedbacks(result.feedbacks);
    //   }
    // };

    fetchData();
    // fetchFeedbacks();
  }, [recipeId]);

// const handleLike = async () => {
//     if (liked) {
//         // Unlike the recipe if already liked
//         await unlikeRecipe(recipeId);
//         setLiked(false);
//     } else {
//         // Like the recipe if not liked
//         await likeRecipe(recipeId);
//         setLiked(true);
//     }
// }

// // Function to handle the save button click
// const handleSave = async () => {
//     if (saved) {
//         // Unsave the recipe if already saved
//         await unsaveRecipe(recipeId);
//         setSaved(false);
//     } else {
//         // Save the recipe if not saved
//         await saveRecipe(recipeId);
//         setSaved(true);
//     }
// }


  return (
    Object.keys(recipe).length > 0 ? 
    <Grid container stackable columns={2} className="detailsPageContent">
      <Grid.Column>
        {/* <Button 
          as={Link}
          to={'/recipes'}
          content="Back to recipe List"
          color="yellow"
          style={{ marginBottom: 40 }}
        />
        <Image src={recipe.image_url} />
        <Button
          icon
          color={liked ? "red" : "grey"}
          labelPosition="left"
          onClick={handleLike}
          style={{ padding: '10px' }}
        >
          <Icon name="heart" />
          Like
        </Button>
        <Button
          icon
          color={saved ? "green" : "grey"}
          labelPosition="left"
          onClick={handleSave}
          style={{ padding: '10px' }}
        >
          <Icon name="bookmark" />
          Save
        </Button> */}
      </Grid.Column>
      <Grid.Column>
        <Header size="medium">{recipe.title}</Header>
        <p>Provided By: {recipe.publisher}</p>
        <Button 
          as={"a"}
          href={recipe.publisher_url}
          target="_blank"
          content="Publisher Webpage"
          color="blue"
        />
        <Button 
          as={"a"}
          href={recipe.source_url}
          target="_blank"
          content="Recipe URL"
          color="green"
        />
        <Header size="large" content="Ingredients" />
        <Segment.Group>
          {
            recipe && recipe.ingredients.map((data, index) => (
              <Segment key={index}>
                <h5>{data}</h5>
              </Segment>
            ))
          }
        </Segment.Group>
        <Header size="large" content="Feedbacks" />
        {/* <Segment.Group>
          {
            feedbacks && feedbacks.map((feedback, index) => (
              <Segment key={index}>
                <p>{feedback}</p>
              </Segment>
            ))
          }
        </Segment.Group> */}
      </Grid.Column>
    </Grid> : null
  );
};

export default RecipeDetails;
