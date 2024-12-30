import React from "react";
import { Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { Book } from "@/models/book/book";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
      <Card
        className="mb-4 shadow-sm"
        style={{
          width: "14rem",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <Card.Img
          variant="top"
          src={"https://via.placeholder.com/300x400?text=Book+Image"}
          alt={book.title}
          style={{
            objectFit: "cover",
            height: "200px",
          }}
        />
        <Card.Body>
          <Card.Title className="text-truncate">{book.title}</Card.Title>
          <Card.Text className="text-muted">Auteur : {book.author}</Card.Text>
          <Card.Text className="text-muted">Prix : {book.rentalPrice}€</Card.Text>
          <div className="d-flex justify-content-between">
            {/* Lien vers les détails */}
            <Link href={`/book/${book.id}`}>
              <Button variant="outline-primary" size="sm">
                Voir Détails
              </Button>
            </Link>
            <Button variant="outline-success" size="sm">
              Aimer
            </Button>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default BookCard;
