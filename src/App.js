import products from './products.json'
import { FilterableProductTable } from './components';

function App() {
  return (
    <div className="App">
      <FilterableProductTable
        products={products} />
    </div>
  );
}

export default App;
