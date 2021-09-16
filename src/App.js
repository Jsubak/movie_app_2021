const foodLike = [
  {
    id: 1,
    name : "chikin",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUGbP0Y0vXZBdo7p4sYAKh7fm0lAsflEkAZA&usqp=CAU"
  },
  {
    id: 2,
    name : "pizza",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBiAL4n_yvKZR3guA_h0wNiNcpd39irG0Tuw&usqp=CAU"
  }
]

function App() {
  return (
    <div>
      {
        foodLike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} />))
      }
    </div>
  )
}

function Food({name, picture}) {
  return (
  <div>
    <h1>I like {name} </h1>
    <img src={picture} />  
  </div>
  )
}

export default App
