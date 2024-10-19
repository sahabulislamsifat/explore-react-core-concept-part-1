export default function bookShop({ books }) {
  return (
    <div>
      <h3>Books :</h3>
      {bookShop.map((book) => (
        <book book={book}></book>
      ))}
    </div>
  );
}
