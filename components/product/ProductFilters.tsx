import React, { useState } from 'react';

type ProductFiltersProps = {
  onFilterChange: (filter: string) => void;
};

const ProductFilters: React.FC<ProductFiltersProps> = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(e.target.value);
    onFilterChange(e.target.value);
  };

  return (
    <div className="product-filters">
      <label htmlFor="filter">Filter by Category:</label>
      <select id="filter" value={selectedFilter} onChange={handleChange}>
        <option value="">All</option>
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
      </select>
    </div>
  );
};

export default ProductFilters;
