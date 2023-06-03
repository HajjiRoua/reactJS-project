
import { Container, Header, Grid } from "semantic-ui-react";
import RecipeListItem from "./RecipeListItem";

const RecipeList = ({ recipes, searchedQuery }) => {
    const recipeData = recipes;
    return (
        <Container>
            <Header 
                size="huge"
                content={`RECIPE LIST FOR ${searchedQuery}`}
                textAlign='center'
            />
            <Grid columns={4} doubling>
                { recipeData &&
                      recipeData.map((recipe) => (
                        <Grid.Column key={recipe.id}>
                            <RecipeListItem recipe={recipe} />
                        </Grid.Column>
                    ))
                }
            </Grid>
        </Container>
    )
}

export default RecipeList;