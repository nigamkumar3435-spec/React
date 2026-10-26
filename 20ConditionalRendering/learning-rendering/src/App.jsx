import "bootstrap/dist/css/bootstrap.min.css"
function App() {

  //let foodItems = [];
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  //Ternary Operator --> //let emptyMessage = foodItems.length == 0 ? <h3>I am still hungry.</h3>: null;

  return (
  <>
    <h1>Healthy Food</h1> 

    {/*emptyMessage*/}

  {/*Logical Operator -->*/} {foodItems.length === 0 && <h3>I am still hungry.</h3>}

    <ul className="list-group">
      {foodItems.map((item) => (
        <li key={item} class="list-group-item">{item}</li>
      ))}
    </ul>
  </>);
}

export default App;