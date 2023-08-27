import React, {useState, useContext} from 'react';

const SearchContext = React.createContext({
    searchQuery: ''
});
const SearchUpdateContext = React.createContext();

const SearchProvider = (props) => {
    const [searchQuery, setSearchQuery] = useState('');

    const updateSearchQuery = (newQuery) => {
        setSearchQuery(prev => newQuery);
    };
    
    return (
        <SearchContext.Provider value={{
            searchQuery: searchQuery
        }}>
            <SearchUpdateContext.Provider value={updateSearchQuery}>
                {props.children}
            </SearchUpdateContext.Provider>
        </SearchContext.Provider>
    )
};

export default SearchProvider;

export const useSearchQuery = () => {
    return useContext(SearchContext);
}

export const useSearchQueryUpdate = () => {
    return useContext(SearchUpdateContext);
}