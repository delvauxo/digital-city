import './App.css';
import ProductList from './components/product-list/product-list';
import StudentTable from './components/student-table/student-table';

// Static data => json import.
import students from './data/students.json';
import products from './data/products.json';

function App() {
  return (
    <div className="App">
      <h1>Demo 03 - Collection</h1>
      <h3>Table : </h3>
      <StudentTable students={students} />
      <h3>List :</h3>
      <ProductList products={products} />
    </div>
  );
}

export default App;
