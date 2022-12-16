import AddBook from '../components/AddBook';
import ListBooks from '../components/ListBooks';

const Books = () => (
  <div>
    <ListBooks />
    <hr className="mx-5" />
    <AddBook />
  </div>
);

export default Books;
