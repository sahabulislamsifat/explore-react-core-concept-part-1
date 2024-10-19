export default function BookStore({ book }) {
  //   const { name, price } = book;
  return (
    <div>
      <h3>Our Book Store : {book.length} </h3>
      <h4> Book Name : {book.name} </h4>
      <p>Price : {book.price} </p>
    </div>
  );
}
