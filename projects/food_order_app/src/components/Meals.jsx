import MealsItem from "./MealsItem.jsx";
import useHttp from "../hooks/useHttp.js";
import Error from "./Error.jsx";

const requestConfigs = {};

function Meals () {
  const {
    data: loadedMeals,
    error,
    isLoading,
  } = useHttp("http://localhost:3000/meals", requestConfigs, []);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>
  }

  if (error) {
    return <Error title="Faild to fetch meals..." message={error}/>
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => <MealsItem key={meal.id} meal={meal}/>)}
    </ul>
  );
}

export default Meals;