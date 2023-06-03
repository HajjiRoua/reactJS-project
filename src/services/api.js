import axios from 'axios';



export const getRecipes = async () => {
    try {
      const searchAttemptsUrl = 'http://localhost:3000/search-attempts/';

      const requestBody = {
        query: 'chicken'
      };
      
      let response = await axios.post(searchAttemptsUrl, requestBody);
      console.log(response.data)
          return response.data;
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
//         let response = await axios.post(`${API_URL}/like`, { recipeId });
//         return response.data;
//     } catch (error) {
//         console.log('Error while calling the API: ', error.message);
//         return error.response;
//     }
// };

// export const unlikeRecipe = async (recipeId) => {
//     try {
//       let response = await axios.post(`${API_URL}/unlike`, { recipeId });
//       return response.data;
//     } catch (error) {
//       console.log('Error while calling the API: ', error.message);
//       return error.response;
//     }
//   };


// export const saveRecipe = async (recipeId) => {
//     try {
//         let response = await axios.post(`${API_URL}/save`, { recipeId });
//         return response.data;
//     } catch (error) {
//         console.log('Error while calling the API: ', error.message);
//         return error.response;
//     }
// };

// export const unsaveRecipe = async (recipeId) => {
//     try {
//       let response = await axios.post(`${API_URL}/unsave`, { recipeId });
//       return response.data;
//     } catch (error) {
//       console.log('Error while calling the API: ', error.message);
//       return error.response;
//     }
//   };

// export const getFeedbacks = async (recipeId) => {
//     try {
//         let response = await axios.get(`${API_URL}/feedbacks?rId=${recipeId}`);
//         return response.data;
//     } catch (error) {
//         console.log('Error while calling the API: ', error.message);
//         return error.response;
//     }
// };
