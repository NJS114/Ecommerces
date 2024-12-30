import React, { useState } from 'react';
import { Book } from '@/models/book/book';
import { TransactionType } from '@/models/Enums';

interface BookFormProps {
  initialData?: Book;
  onSubmit: (book: Book) => void;
}

const BookForm: React.FC<BookFormProps> = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState<Book>(
    initialData || {
      id: '',
      barcode: '',
      title: '',
      author: '',
      synopsis: '',
      edition: '',
      publicationDate: new Date(''),  // Initialisez comme un objet Date
      bookCondition: 1,
      coverImagePath: '',
      additionalImagePaths: [],
      transactionType: TransactionType.Rental,
      category: 1,
      rentalPrice: 0,
    }
  );
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block font-bold">Titre</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
      </div>
      <div>
        <label htmlFor="author" className="block font-bold">Auteur</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
      </div>
      {/* Ajoutez d'autres champs similaires */}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Enregistrer</button>
    </form>
  );
};

export default BookForm;
