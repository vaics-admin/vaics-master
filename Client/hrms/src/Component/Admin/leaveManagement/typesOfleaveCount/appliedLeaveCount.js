import './appliedleaveCount.css';
import { IoMdRefresh } from "react-icons/io";

const AppliedLeaveCounts = (props) => {
    const { leaveDetails, setFilterValue } = props;

    // Function to count occurrences of each leave type
    const leaveTypeCollector = () => {
        const leaveTypeCounts = {}; // Use an object for counting leave types
        leaveDetails.forEach(each => {
            if (each.leave_type) { // Ensure leave_type is not null or undefined
                leaveTypeCounts[each.leave_type] = (leaveTypeCounts[each.leave_type] || 0) + 1;
            }
        });
        return leaveTypeCounts;
    };

    const leaveTypeCounts = leaveTypeCollector();

    return (
        <div className="leaveCount-container">
            <h1>Information</h1>
            <ul className="list_of_count">
                {Object.entries(leaveTypeCounts).map(([type, count], index) => (
                    <li key={index} className="request-list-item">
                        <button onClick={() => setFilterValue(type)} className='request-filter-button'>
                            {type} ({count})
                        </button>
                    </li>
                ))}
                <button className='filter-reset-button' onClick={() => setFilterValue("")}> <IoMdRefresh /> Rest </button>
            </ul>
        </div>
    );
};

export default AppliedLeaveCounts;
