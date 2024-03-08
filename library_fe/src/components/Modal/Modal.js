import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import useBookCalls from "../../services/useBookCalls";

function Example({ show, setShow, books, setBooks }) {
  const handleClose = () => setShow(false);
  const { createBook, updateBook } = useBookCalls();
  const handleChange = (e) => {
    setBooks({ ...books, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(books);
    if (books.id) {
      updateBook(books);
    } else {
      createBook(books);
    }
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ margin: "auto" }}>ADD BOOK</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Book Name</InputGroup.Text>
              <Form.Control
                placeholder="Book Name"
                aria-label="Book Name"
                aria-describedby="basic-addon1"
                value={books.title} // ISBN numarasının değeri
                name="title" // ISBN numarasının formda kullanılacak ismi
                id="title" // ISBN numarasının benzersiz kimliği (id)
                onChange={handleChange} // Değer değişikliğinde çalışacak fonksiyon
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Author Name</InputGroup.Text>
              <Form.Control
                placeholder=" Author name"
                aria-label="authorname"
                aria-describedby="basic-addon1"
                value={books.author} // ISBN numarasının değeri
                name="author" // ISBN numarasının formda kullanılacak ismi
                id="author" // ISBN numarasının benzersiz kimliği (id)
                onChange={handleChange} // Değer değişikliğinde çalışacak fonksiyon
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">ISBN</InputGroup.Text>
              <Form.Control
                placeholder="ISBN number"
                aria-label="ISBN Number"
                aria-describedby="basic-addon1"
                value={books.ISBN} // ISBN numarasının değeri
                name="ISBN" // ISBN numarasının formda kullanılacak ismi
                id="isbnInput" // ISBN numarasının benzersiz kimliği (id)
                onChange={handleChange} // Değer değişikliğinde çalışacak fonksiyon
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                Publication Date
              </InputGroup.Text>
              <Form.Control
                placeholder="Publication Date"
                aria-label="Publication Date"
                aria-describedby="basic-addon1"
                value={books.publicationYear} // ISBN numarasının değeri
                name="publicationYear" // ISBN numarasının formda kullanılacak ismi
                id="publicationYear" // ISBN numarasının benzersiz kimliği (id)
                onChange={handleChange} // Değer değişikliğinde çalışacak fonksiyon
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Genre</InputGroup.Text>
              <Form.Control
                placeholder="Genre"
                aria-label="Genre"
                aria-describedby="basic-addon1"
                value={books.genre} // ISBN numarasının değeri
                name="genre" // ISBN numarasının formda kullanılacak ismi
                id="genre" // ISBN numarasının benzersiz kimliği (id)
                onChange={handleChange} // Değer değişikliğinde çalışacak fonksiyon
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Image</InputGroup.Text>
              <Form.Control
                placeholder="Please enter a vaild image url."
                aria-label="Url"
                aria-describedby="basic-addon1"
                value={books.image} // ISBN numarasının değeri
                name="image" // ISBN numarasının formda kullanılacak ismi
                id="image" // ISBN numarasının benzersiz kimliği (id)
                onChange={handleChange} // Değer değişikliğinde çalışacak fonksiyon
              />
            </InputGroup>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button type="submit" variant="primary" onClick={handleSubmit}>
                Add Book
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
