import React, { useState } from 'react';

const EmployeeSearch = () => {
    const [query, setQuery] = useState(''); // To hold the search input
    const [suggestions, setSuggestions] = useState([]); // To hold the employee name suggestions
    const [loading, setLoading] = useState(false); // To indicate loading state

    // Debounced function to fetch employee suggestions
    const fetchSuggestions = async (value) => {
        setLoading(true); // Show loading spinner or indication
        try {
            const response = await fetch(`http://localhost:5000/employees/search?q=${value}`); // Backend API
            const data = await response.json();
            setSuggestions(data); // Update suggestions state
        } catch (error) {
            console.error('Error fetching employee suggestions:', error);
            setSuggestions([]);
        } finally {
            setLoading(false); // Hide loading spinner
        }
    };

    // Debounce input to optimize API calls
    const debounce = (func, delay) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => func(...args), delay);
        };
    };

    // Handle input change
    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value); // Update input field
        if (value.length > 1) {
            debouncedFetchSuggestions(value); // Trigger fetch with debounce
        } else {
            setSuggestions([]); // Clear suggestions if input length < 3
        }
    };

    const debouncedFetchSuggestions = debounce(fetchSuggestions, 300);

    // Handle selection of an employee from suggestions
    const handleSelect = (employee) => {
        setQuery(employee.full_name); // Update input field with selected name
        setSuggestions([]); // Clear suggestions
        console.log('Selected Employee:', employee); // Use selected employee data as needed
    };

    return (
        <div style={{ position: 'relative', width: '300px' }}>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search employees..."
                style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                }}
            />
            {loading && <div style={{ position: 'absolute', top: '40px' }}>Loading...</div>}
            {suggestions.length > 0 && (
                <ul
                    style={{
                        listStyleType: 'none',
                        padding: 0,
                        margin: 0,
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        backgroundColor: 'white',
                        position: 'absolute',
                        width: '100%',
                        top: '40px',
                        zIndex: 10,
                    }}
                >
                    {suggestions.map((employee) => (
                        <li
                            key={employee.employee_id}
                            onClick={() => handleSelect(employee)}
                            style={{
                                padding: '10px',
                                cursor: 'pointer',
                                borderBottom: '1px solid #eee',
                            }}
                        >
                            {employee.full_name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default EmployeeSearch;
