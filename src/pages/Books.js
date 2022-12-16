import AddBook from '../components/AddBook';
import ListBooks from '../components/ListBooks';

const Books = () => (
  <div className="container p-5 background-main">
    <ListBooks />
    <hr />
    <AddBook />
  </div>
);

export default Books;
