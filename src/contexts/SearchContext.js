import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext({
  searchData: {}
});

export  function SearchProvider({children}){

  const [searchData, setSearchData] = useState({sprites: {front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"}});
  console.log("RUAN", searchData);
  return(
    <SearchContext.Provider value={{
      searchData, setSearchData
    }}>
       <>
            {children}
        </>
    </SearchContext.Provider>
  );
};

export function useSearchContext(){
  const context = useContext(SearchContext);
  const {searchData, setSearchData} = context;
  return {searchData, setSearchData};
}


