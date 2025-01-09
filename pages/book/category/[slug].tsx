import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Book } from "@/models/book/book";
import { BookService } from "@/api/api_book";
import BookDetails from "@/components/book/BookDetails";

const BookPage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query; // On récupère le slug dans l'URL
  const [books, setBooks] = useState<Book[]>([]); // On stocke une liste de livres
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetchBooksByCategory = async () => {
    if (!slug) return; // Si le slug n'est pas encore défini, on ne fait rien

    try {
      const response = await new BookService().getBooksByCategorySlug(slug as string);
      setBooks(response); // On met à jour la liste des livres
      setLoading(false);
    } catch (err) {
      setError("Erreur lors de la récupération des livres pour cette catégorie.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooksByCategory();
  }, [slug]); // On recharge les livres dès que le slug change

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {books.length > 0 ? (
        books.map((book) => <BookDetails key={book.id} book={book} />) // Affichage des livres récupérés
      ) : (
        <p>Aucun livre trouvé pour cette catégorie.</p>
      )}
    </div>
  );
};

export default BookPage;
