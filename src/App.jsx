import { useEffect, useState, createContext } from "react";

import InputField from "./InputField";
import SearchResults from "./SearchResults";

const SearchContext = createContext(null);

const App = () => {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSearchResults([
        Math.random(),
        Math.random(),
        Math.random(),
        Math.random(),
      ]);
    }, 1000);
  }, [query]);

  return (
    <div>
      <SearchContext.Provider
        value={{ query, setQuery, isLoading, searchResults }}
      >
        <InputField />
        <SearchResults />
      </SearchContext.Provider>
    </div>
  );
};

export default App;

export { SearchContext };
