import { Box } from '@mui/material';
import { TrashIcon } from '@heroicons/react/24/solid';

import {
  SearchContainer,
  SearchIconButton,
  SearchInput,
  CloseButton,
  Overlay,
  ResultItem,
  DeleteButton,
  NoResults,
  ResultsFooter,
} from './StyledComponents';

interface SearchItemProps {
  isOpen: boolean;
  searchBarRef: React.MutableRefObject<HTMLDivElement | null>;
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  searchTerm: string;
  combinedResults: { type: string; item: any }[];
  overlayRef: React.MutableRefObject<HTMLDivElement | null>;
  selectedIndex: number | null;
  setSearchTerm: (term: string) => void;
  handleSearch: (term: string) => void;
  handleKeyDown: (e: React.KeyboardEvent) => void;
  clearSearch: () => void;
  toggleSearch: () => void;
  deleteRecentSearches: (index: number) => void;
  resultImage: (result: { type: string; item: any }) => string;
  goToSearch: (index: number) => void;
  selectHistoryItem: (item: any) => void;
  setHistory: (item: any) => void;
}

const SearchItem: React.FC<SearchItemProps> = ({
  isOpen,
  searchBarRef,
  inputRef,
  searchTerm,
  combinedResults,
  overlayRef,
  selectedIndex,
  setSearchTerm,
  handleSearch,
  handleKeyDown,
  clearSearch,
  toggleSearch,
  deleteRecentSearches,
  resultImage,
  goToSearch,
  selectHistoryItem,
  setHistory,
}) => {
  const handleResultClick = (result: { type: string; item: any }, index: number) => {
    if (result.type === 'History') {
      selectHistoryItem(result.item);
      handleSearch(result.item);
    } else {
      const term =
        result.item.bookTitle || result.item.authorName || result.item.bookCategoName;
      setSearchTerm(term);
      setHistory((prev: any) => [...new Set([term, ...prev])]);
      goToSearch(index);
    }
  };

  return (
    <Box>
      <SearchContainer $isOpen={isOpen} ref={searchBarRef}>
        <SearchIconButton onClick={toggleSearch}>
          <span role="img" aria-label="search">
            🔍 {!isOpen && ' : ctrl + k'}
          </span>
        </SearchIconButton>

        {isOpen && (
          <>
            <SearchInput
              ref={inputRef}
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                handleSearch(e.target.value);
              }}
              onKeyDown={handleKeyDown}
              autoFocus
              placeholder="Recherche : livres / auteurs / catégories / éditeurs"
            />
            <CloseButton
              onClick={() => {
                clearSearch();
                toggleSearch();
              }}
            >
              <span role="img" aria-label="close">
                ❌
              </span>
            </CloseButton>
          </>
        )}
      </SearchContainer>

      {isOpen && (
        <Overlay ref={overlayRef}>
          {combinedResults.length > 0 ? (
            <>
              {combinedResults.map((result, index) => (
                <ResultItem
                  key={index}
                  $isSelected={index === selectedIndex}
                  onClick={() => handleResultClick(result, index)}
                >
                  <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Box display="flex">
                      <p className="mr-2">
                        <strong>{result.type}:</strong>
                      </p>
                      <p className="w-96">
                        {result.type === 'History'
                          ? result.item
                          : result.item.bookTitle ||
                            result.item.authorName ||
                            result.item.bookCategoName}
                      </p>
                    </Box>

                    {result.type === 'History' && (
                      <DeleteButton
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteRecentSearches(index);
                        }}
                      >
                        <TrashIcon className="block h-6 w-6" />
                      </DeleteButton>
                    )}
                  </Box>
                  <img src={resultImage(result)} width={30} alt="Result" />
                </ResultItem>
              ))}

              <ResultsFooter onClick={() => goToSearch(0)}>
                <span role="img" aria-label="search">
                  🔍
                </span>
                <h3>Tous les résultats pour "{searchTerm}"</h3>
                <span>
                  Cliquez <strong>ici</strong> ou appuyez sur <strong>ENTRER</strong> pour voir plus
                  de détails.
                </span>
              </ResultsFooter>
            </>
          ) : (
            <NoResults>Aucun résultat trouvé</NoResults>
          )}
        </Overlay>
      )}
    </Box>
  );
};

export default SearchItem;
