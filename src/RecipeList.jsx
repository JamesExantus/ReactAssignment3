import { PropTypes } from "prop-types";

export function RecipeList(props) {

    const {
        image: { src, alt },
        name,
        direction,
        difficulty,
        stars,
      } = props.recipes;

      const recipe = [recipes];

      const recipes = props.recipes;
      const food = recipes.map((recipes) => { <div className="j-desc">
        <img src={src} alt={alt} />
        <div>
            <h2 className="text-xl font-bold relative -top-1.5">{name}</h2>
            <p className="text-gray-400 italic mb-2">{direction}</p>
            <ul className="j-desc__metadata">
                <li>{difficulty}</li>
                <li>{stars}</li>
            </ul>
        </div>
      </div>});
       
      return (
            <div> 
                <ul>{food}</ul>
            </div>

      )

/*
    return (
     <div className="j-desc">
        <img src={src} alt={alt} />
        <div>
            <h2 className="text-xl font-bold relative -top-1.5">{name}</h2>
            <p className="text-gray-400 italic mb-2">{direction}</p>
            <ul className="j-desc__metadata">
                <li>{difficulty}</li>
                <li>{stars}</li>
            </ul>
        </div>
      </div>

    );

*/

  
};


        RecipeList.propTypes = {
            recipes: PropTypes.shape({
                image: PropTypes.shape({
                 src: PropTypes.string,
                 alt: PropTypes.string,
                }),
                 name: PropTypes.string,
                 direction: PropTypes.string,
                 difficulty: PropTypes.string,
                 stars: PropTypes.string,
            })
        }
export function SearchBar({ query, onChange }) {
  return (
    <label>
      Search:{' '}
      <input
        value={query}
        onChange={onChange}
      />
    </label>
  );
}

        
export function List({ items }) {
  return (
    <table>
      <tbody> 
        {items.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}


  


export default RecipeList


