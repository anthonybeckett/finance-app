import { SyntheticEvent, useState } from "react";
import "./App.css";
import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";
import { CompanySearch } from "./Types/company";
import { searchCompanies } from "./Api/Api";
import ListPortfolio from "./Components/Portfolio/ListPortfolio/ListPortfolio";

function App() {
    const [search, setSearch] = useState<string>("");
	const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
    const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
    const [serverError, setServerError] = useState<string>("");

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setSearch(event.target.value);

    const onSearchSubmit = async (
        event: SyntheticEvent
    ) => {
		event.preventDefault();

		if (search.length < 3) {
			return;
		}

        const result = await searchCompanies(search);

        if (typeof result === "string") {
            setServerError(result);
        } else if (Array.isArray(result.data)) {
            setSearchResult(result.data);
        }
    };

    const onPortfolioCreate = (event: any) => {
        event.preventDefault();

		const exists = portfolioValues.find(value => value === event.target[0].value);

		if (! exists) {
			const updatedPortfolio = [...portfolioValues, event.target[0].value];

			setPortfolioValues(updatedPortfolio);
		}
    };

	const onPortfolioDelete = (e: any) => {
		e.preventDefault();

		const removed = portfolioValues.filter(value => value !== e.target[0].value);

		setPortfolioValues(removed);
	}

    return (
        <div className="App">
            <Search
                search={search}
                handleSearchChange={handleSearchChange}
                onSearchSubmit={onSearchSubmit}
            />

			<ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete} />

            {serverError && <h1>{serverError}</h1>}

            <CardList
                searchResults={searchResult}
                onPortfolioCreate={onPortfolioCreate}
            />
        </div>
    );
}

export default App;
