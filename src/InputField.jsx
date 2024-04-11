import { useContext } from "react";
import { SearchContext } from "./App";

const InputField = () => {
  const { query, setQuery } = useContext(SearchContext);

  return (
    <input
      value={query}
      onChange={(event) => {
        setQuery(event.target.value);
      }}
    />
  );
};

export default InputField;
