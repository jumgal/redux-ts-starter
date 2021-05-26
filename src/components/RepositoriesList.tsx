import React, { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector'



const RepositoriesList: React.FC = () => {

    const [term, setTerm] = useState('');
    const { searchRepositories } = useActions();
    const { loading, data, error } = useTypedSelector((state) => state.repositories);






    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        searchRepositories(term)
        setTerm('')
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input value={term} onChange={e => setTerm(e.target.value)} />
                <button>Search</button>
            </form>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading ...</h3>}
            <ul>
                {!error && !loading && data.map(n => {
                    return (
                        <li key={n}>
                            {n}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


export default RepositoriesList;