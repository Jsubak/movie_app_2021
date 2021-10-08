import PropTypes from 'prop-types';

const foodLike = [
  {
    id: 1,
    name : "chikin",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUGbP0Y0vXZBdo7p4sYAKh7fm0lAsflEkAZA&usqp=CAU",
    alt: "치킨",
    rating: 5.0
  },
  {
    id: 2,
    name : "pizza",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBiAL4n_yvKZR3guA_h0wNiNcpd39irG0Tuw&usqp=CAU",
    alt: "피자",
    rating: 4.9
  }
]

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

function App() {
  return (
    <div>
      {
        foodLike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} alt={dish.alt} rating={dish.rating} />))
      }
    </div>
  )
}

function Food({name, picture, alt, rating}) {
  return (
  <div>
    <h1>I like {name} </h1>
    <h4>{rating}/5.0</h4>
    <img alt={alt} src={picture} />  
  </div>
  )
}

export default App