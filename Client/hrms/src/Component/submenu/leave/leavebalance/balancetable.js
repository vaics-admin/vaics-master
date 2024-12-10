import './balancetable.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Balancetable = ({ onChangeLeavType }) => {
  const { name } = useParams();

  // State for leave data
  const [leaveData, setLeaveData] = useState([
    {
      leaveType: "Earned Leave",
      credited: 0,
      availed: 0,
      carried: 0,
      balance: 0,
      approvalpending: 0,
      button: {
        text: "Earned Leave",
        value: "earnedLeave",
      },
    },
    {
      leaveType: "Restricted Holiday",
      credited: 0,
      availed: 0,
      balance: 0,
      approvalpending: 0,
      button: {
        text: "Restricted Holiday",
        value: "restrictedHoliday",
      },
    },
    {
      leaveType: "Loss of Pay",
      credited: 0,
      availed: 0,
      balance: 0,
      approvalpending: 0,
      button: {
        text: "Loss of Pay",
        value: "lossOfPay",
      },
    },
  ]);

  useEffect(() => {
    const fetchLeaveBalance = async () => {
      const id = localStorage.getItem("employee_id")
      console.log(id)
      try {
        const response = await fetch('http://192.168.20.6:5000/get-leave-balance', {
          method : 'POST',
          headers : {
            'Content-Type' : "application/json"
          },
          
          body : JSON.stringify({employee_id : id })
        });
        const result = await response.json();
        console.log(result);

        // Map API data to leaveData
        const updatedLeaveData = leaveData.map((leave) => {
          if (leave.leaveType === "Earned Leave") {
            return {
              ...leave,
              credited: parseInt(result[0]?.el_credited || leave.credited, 10),
              availed: parseInt(result[0]?.el_used || leave.availed, 10),
              carried: parseInt(result[0]?.el_carried || leave.carried, 10),
              balance: parseInt(result[0]?.el_balance || leave.balance, 10),
            };
          } else if (leave.leaveType === "Restricted Holiday") {
            return {
              ...leave,
              credited: parseInt(result[0]?.rh_credited || leave.credited, 10),
              availed: parseInt(result[0]?.rh_used || leave.availed, 10),
              balance: parseInt(result[0]?.rh_balance || leave.balance, 10),
            };
          } else if (leave.leaveType === "Loss of Pay") {
            return {
              ...leave,
              availed: parseInt(result[0]?.loss_of_pay_used || leave.availed, 10),
            };
          }
          return leave;
        });

        setLeaveData(updatedLeaveData);
      } catch (error) {
        console.error("Error fetching leave data:", error);
      }
    };

    fetchLeaveBalance();
  }, []);

  return (
    <div className="leave-content-container">
      <div className="leave-balance-table-container">
        <table className="leave-balance-table">
          <thead>
            <tr>
              <th>LEAVE TYPE</th>
              <th>CREDITED</th>
              <th>AVAILED</th>
              <th>CARRIED</th>
              <th>BALANCE</th>
              <th>APPROVAL PENDING</th>
              {name !== "View-Leave" && <th>APPLY</th>}
            </tr>
          </thead>
          <tbody>
            {leaveData.map((row, index) => (
              <tr key={index}>
                <td>{row.leaveType}</td>
                <td>{row.credited}</td>
                <td>{row.availed}</td>
                <td>{row.carried}</td>
                <td>{row.balance}</td>
                <td>{row.approvalpending}</td>
                {name !== "View-Leave" && (
                  <td>
                    <button
                      onClick={() => onChangeLeavType(row.button.value)}
                      className="leave-button"
                    >
                      {row.button.text}
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Balancetable;
