import React, { useEffect, useState } from "react";
import style from "./books.module.css";
import BookDetailed from "./BookDetailed";
import Modal from "../Modal/Modal";
import Button from "react-bootstrap/esm/Button";
import { useSelector } from "react-redux";
import useBookCalls from "../../services/useBookCalls";

const BookContainer = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const { libraries } = useSelector((state) => state.books);

  const { getBooks } = useBookCalls();

  const [books, setBooks] = useState({
    title: "",
    author: "",
    ISBN: "",
    genre: "",
    publicationYear: "",
    image: "",
  });

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className={style.books}>
      <div>
        <Button className={style.button} onClick={handleShow}>
          Add New Book
        </Button>
      </div>

      <div className={style.detailbook}>
        {libraries.map((book) => (
          <BookDetailed
            key={book.id}
            book={book}
            setBooks={setBooks}
            handleShow={handleShow}
          />
        ))}
      </div>
      <Modal show={show} setShow={setShow} books={books} setBooks={setBooks} />
    </div>
  );
};

export default BookContainer;
