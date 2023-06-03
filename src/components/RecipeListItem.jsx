

import { Button, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const RecipeListItem = ({ recipe }) => {

    return (
        <Card>
            {/* <img src={recipe.image_url} alt="thumbnail" style={{ height: 170 }} /> */}
            <Card.Content>
              <Card.Header content={recipe.label} />
              <Card.Description>
                <h4>{recipe.source}</h4>
              </Card.Description>
            </Card.Content>
            <Card.Content>
              <Button 
                as={Link}
                to={`/recipes/${recipe.id}`}
                content="Details"
                color="blue"
                size="tiny"
              />
            </Card.Content>
          </Card>
    )
}

export default RecipeListItem;