import React from 'react';

function AddBook() {
  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input type="text" placeholder="Book title" />
        <input type="text" placeholder="Book author" />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default AddBook;
