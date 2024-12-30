import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Form, FormControl, Navbar, Nav } from "react-bootstrap"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

enum TransactionType {
  Purchase = 2,
  Rental = 1,
  Sale = 0,
}

interface BookFilterProps {
  onFilterChange: (filters: {
    category: string;
    condition: string;
    priceMin: string;
    priceMax: string;
    transactionType: TransactionType | string;
    searchQuery: string;
  }) => void;
}

const BookFilter: React.FC<BookFilterProps> = ({ onFilterChange }) => {
  const [category, setCategory] = useState<string>("");
  const [condition, setCondition] = useState<string>("");
  const [priceMin, setPriceMin] = useState<string>("");
  const [priceMax, setPriceMax] = useState<string>("");
  const [transactionType, setTransactionType] = useState<string>("");
  const [filterVisible, setFilterVisible] = useState<boolean>(false); // Pour afficher/masquer le menu de filtre
  const [searchQuery, setSearchQuery] = useState<string>(""); // Pour la barre de recherche

  const handleCategoryChange = (e: React.ChangeEvent<FormControlElement>) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
    onFilterChange({ category: newCategory, condition, priceMin, priceMax, transactionType, searchQuery });
  };

  const handleConditionChange = (e: React.ChangeEvent<FormControlElement>) => {
    const newCondition = e.target.value;
    setCondition(newCondition);
    onFilterChange({ category, condition: newCondition, priceMin, priceMax, transactionType, searchQuery });
  };

  const handlePriceMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPriceMin = e.target.value;
    setPriceMin(newPriceMin);
    onFilterChange({ category, condition, priceMin: newPriceMin, priceMax, transactionType, searchQuery });
  };

  const handlePriceMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPriceMax = e.target.value;
    setPriceMax(newPriceMax);
    onFilterChange({ category, condition, priceMin, priceMax: newPriceMax, transactionType, searchQuery });
  };

  const handleTransactionTypeChange = (e: React.ChangeEvent<FormControlElement>) => {
    const newTransactionType = e.target.value;
    setTransactionType(newTransactionType);
    onFilterChange({ category, condition, priceMin, priceMax, transactionType: newTransactionType, searchQuery });
  };

  const handleSearchChange = (e: React.ChangeEvent<FormControlElement>) => {
    setSearchQuery(e.target.value);
    // Vous pouvez appeler onFilterChange ici pour filtrer selon la recherche en temps réel
    onFilterChange({ category, condition, priceMin, priceMax, transactionType, searchQuery: e.target.value });
  };

  return (
    <div>
      {/* Barre de recherche et bouton de filtre */}
      <Navbar bg="light" expand="lg" className="justify-content-center">
        <Form className="d-flex w-100 justify-content-center">
          <FormControl
            type="text"
            placeholder="Rechercher..."
            className="mr-sm-5 w-50"  // Augmente la largeur de l'input
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <Button 
            variant="outline-primary" 
            onClick={() => setFilterVisible(!filterVisible)} 
            className="ml-2"
          >
            <FontAwesomeIcon icon={faFilter} /> Filtrer
          </Button>
        </Form>
      </Navbar>
      {/* Menu rétractable de filtres */}
      {filterVisible && (
        <div className="filter-container">
          <Navbar bg="light" expand="lg" className="mb-4">
            <Nav className="flex-column">
              <Form>
                <Form.Group controlId="categorySelect">
                  <Form.Label>Catégorie</Form.Label>
                  <Form.Control as="select" value={category} onChange={handleCategoryChange}>
                    <option value="">Tous</option>
                    <option value="1">Fiction</option>
                    <option value="2">Science</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="conditionSelect">
                  <Form.Label>État</Form.Label>
                  <Form.Control as="select" value={condition} onChange={handleConditionChange}>
                    <option value="">Tous</option>
                    <option value="1">Neuf</option>
                    <option value="2">Bon état</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="priceMinInput">
                  <Form.Label>Prix minimum</Form.Label>
                  <Form.Control type="number" value={priceMin} onChange={handlePriceMinChange} />
                </Form.Group>

                <Form.Group controlId="priceMaxInput">
                  <Form.Label>Prix maximum</Form.Label>
                  <Form.Control type="number" value={priceMax} onChange={handlePriceMaxChange} />
                </Form.Group>

                <Form.Group controlId="transactionTypeSelect">
                  <Form.Label>Type de transaction</Form.Label>
                  <Form.Control as="select" value={transactionType} onChange={handleTransactionTypeChange}>
                    <option value="">Tous</option>
                    <option value={TransactionType.Purchase}>Achat</option>
                    <option value={TransactionType.Rental}>Location</option>
                    <option value={TransactionType.Sale}>Vente</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </Nav>
          </Navbar>
        </div>
      )}
    </div>
  );
};

export default BookFilter;

