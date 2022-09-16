import { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";

import Header from "./components/views/Header/Header";
import Sidebar from "./components/views/Sidebar/Sidebar";
import BooksList from "./components/features/BooksList/BooksList";

import { books } from "./books";

import "./App.css";

const App = () => {
  const [booksData,setBooksData] = useState(books)

  const addBook = (book) => {
    setBooksData([...booksData, book])
  }

  return (
    <Container>
      <Header/>
        <Row>
          <Col xs="12" md="9">
            <main className="mt-2 mb-2">
              <BooksList books={booksData} addBook={addBook}/>
            </main>
          </Col>
          <Col xs="12" md="3">
            <Sidebar />
          </Col>
        </Row>
    </Container>
  );
};

export default App;
