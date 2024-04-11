import { useContext } from "react";
import { SearchContext } from "./App";

const SearchResults = () => {
  const { isLoading, searchResults } = useContext(SearchContext);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {searchResults.length > 0 && !isLoading && (
        <ul>
          {searchResults.map((searchResult, searchResultIndex) => (
            <li key={searchResultIndex}>{searchResult}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SearchResults;
