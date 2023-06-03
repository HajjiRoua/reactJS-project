import { useEffect, useState } from "react";
import Search from "../components/Search";
import RecipeList from "../components/RecipeList";
import { getRecipes } from "../services/api";

const Recipes = () => {
    const [searchedQuery, setSearchedQuery] = useState('pizza');
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getSearchedResult();
    }, [searchedQuery])

    const getSearchedResult = async () => {
        let result = await getRecipes(searchedQuery);
            setRecipes(result);
    
    }

    return (
        <>
            <Search setSearchedQuery={setSearchedQuery} />
            <RecipeList recipes={recipes} searchedQuery={searchedQuery} />
        </>
    )
}


export default Recipes;