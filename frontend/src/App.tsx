import { useState } from "react";
import './App.css';
import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";
import { CompanySearch } from "./Types/company";
import { searchCompanies } from "./Api/Api";

function App() {
	const [search, setSearch] = useState<string>("");
	const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
	const [serverError, setServerError] = useState<string>("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value);

	const onClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		const result = await searchCompanies(search);

		if (typeof result === "string") {
			setServerError(result);
		} else if (Array.isArray(result.data)) {
			setSearchResult(result.data);
		}
	};

	return (
		<div className="App">
			<Search search={search} handleChange={handleChange} onClick={onClick} />
			{serverError && <h1>{ serverError }</h1>}
			<CardList searchResults={searchResult} />
		</div>
	);
}

export default App;
