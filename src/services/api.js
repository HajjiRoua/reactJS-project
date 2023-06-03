import axios from 'axios';



export const getRecipes = async (searchedQuery) => {
    try {
      const searchAttemptsUrl = 'http://localhost:3000/search-attempts/';

      const requestBody = {
        query: searchedQuery
      };
      
      let response = await axios.post(searchAttemptsUrl, requestBody);
      console.log(response.data)
          return response.data.recipes;
          // Handle the response data
        }
        catch(error) {
          console.log('Error while calling the API: ', error.message);
          // Handle the error
        };
      

  };

export const getRecipe = async (recipeId) => {
    try {
        let response = await axios.get(`http://localhost:3000/recipes/${recipeId}`);
        return response.data;
    } catch (error) {
        console.log('Error while calling the API: ', error.message);
        return error.response;
    }
};

// export const likeRecipe = async (recipeId) => {
//     try {
//         let response = await axios.post(`http://localhost:3000/recipes/like`, { recipeId });
//         return response.data;
//     } catch (error) {
//         console.log('Error while calling the API: ', error.message);
//         return error.response;
//     }
// };

// export const unlikeRecipe = async (recipeId) => {
//     try {
//       let response = await axios.post(`http://localhost:3000/recipes/unlike`, { recipeId });
//       return response.data;
//     } catch (error) {
//       console.log('Error while calling the API: ', error.message);
//       return error.response;
//     }
//   };


// export const saveRecipe = async (recipeId) => {
//     try {
//         let response = await axios.post(`http://localhost:3000/recipes/save`, { recipeId });
//         return response.data;
//     } catch (error) {
//         console.log('Error while calling the API: ', error.message);
//         return error.response;
//     }
// };

// export const unsaveRecipe = async (recipeId) => {
//     try {
//       let response = await axios.post(`http://localhost:3000/recipes/unsave`, { recipeId });
//       return response.data;
//     } catch (error) {
//       console.log('Error while calling the API: ', error.message);
//       return error.response;
//     }
//   };

export const getFeedbacks = async (recipeId) => {
    try {
        let response = await axios.get(`http://localhost:3000/recipes/${recipeId}/feedbacks`);
        return response.data;
    } catch (error) {
        console.log('Error while calling the API: ', error.message);
        return error.response;
    }
};

export const getIngredients = async (recipeId) => {
  try {
      let response = await axios.get(`http://localhost:3000/recipes/${recipeId}/ingredients`);
      return response.data;
  } catch (error) {
      console.log('Error while calling the API: ', error.message);
      return error.response;
  }
};
