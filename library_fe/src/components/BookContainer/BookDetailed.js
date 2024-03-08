import style from "./books.module.css";
import useBookCalls from "../../services/useBookCalls";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/esm/Button";

const BookDetailed = ({ book, handleShow, setBooks }) => {
  const { deleteBook } = useBookCalls();
  return (
    <Card border="danger"  bg={"dark"} text={"light"} style={{ width: "20rem",paddingBottom:"1rem" }}>
      <Card.Img thumbnail variant="top" src={book.image} height="300px" />
      <Card.Body>
        <Card.Title style={{ textTransform: "capitalize" }}>
          {book.title}
        </Card.Title>
        <Card.Text>Author: {book.author}</Card.Text>
        <Card.Text>Genre: {book.genre}</Card.Text>
        <Card.Text>ISBN: {book.ISBN}</Card.Text>
      </Card.Body>

      {/* <ListGroup  className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup> */}
      <div className={style.btnContainer} >
        <button
          onClick={() => {
            handleShow();
            setBooks(book);
          }}
          className={style.button}
        >
          Edit
        </button>
        <button onClick={() => deleteBook(book.id)} className={style.button}>
          Delete
        </button>
      </div>
    </Card>
    // <div
    //   style={{
    //     paddingBottom: "1rem",
    //     borderBottom: "5px solid black",
    //     marginBottom: "2rem",
    //     maxWidth: "300px",
    //     maxHeight: "600px",
    //   }}
    // >
    //   <h1 style={{ fontSize: "20px" }}>{book.title}</h1>
    //   <p>ISBN:{book.ISBN} </p>
    //   <p>Yayınlanma yılı:{book.publicationYear} </p>
    //   <p>Tür:{book.genre}</p>
    //   <img src={book.image} height="250px" alt="" />
    //   <p>Yazar:{book.author}</p>
    //   <div className={style.btnContainer}>
    //     <button
    //       onClick={() => {
    //         handleShow();
    //         setBooks(book);
    //       }}
    //       className={style.button}
    //     >
    //       Edit
    //     </button>
    //     <button onClick={() => deleteBook(book.id)} className={style.button}>
    //       Delete
    //     </button>
    //   </div>
    // </div>
  );
};

export default BookDetailed;
