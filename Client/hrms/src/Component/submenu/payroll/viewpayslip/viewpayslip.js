import React from "react";
import { toWords } from "number-to-words";
import "./Payslip.css";

const Payslip = () => {
  return (
    <div className="payslip-container">
      <div className="payslip-header">
        <h6 className="payslip-title">Payslip</h6>
        <span className="payslip-subtitle">Payment slip for the month of June 2021</span>
      </div>
      <div className="payslip-branch-info">
        <span>Working Branch: ROHINI</span>
      </div>
      <div className="payslip-employee-details">
        <div className="payslip-detail-row">
          <span className="payslip-label">EMP Code</span>
          <span className="payslip-value">39124</span>
        </div>
        <div className="payslip-detail-row">
          <span className="payslip-label">EMP Name</span>
          <span className="payslip-value">Ashok</span>
        </div>
        <div className="payslip-detail-row">
          <span className="payslip-label">PF No.</span>
          <span className="payslip-value">101523065714</span>
        </div>
        <div className="payslip-detail-row">
          <span className="payslip-label">NOD</span>
          <span className="payslip-value">28</span>
        </div>
        <div className="payslip-detail-row">
          <span className="payslip-label">ESI No.</span>
          <span className="payslip-value"></span>
        </div>
        <div className="payslip-detail-row">
          <span className="payslip-label">Mode of Pay</span>
          <span className="payslip-value">SBI</span>
        </div>
        <div className="payslip-detail-row">
          <span className="payslip-label">Designation</span>
          <span className="payslip-value">Marketing Staff (MK)</span>
        </div>
        <div className="payslip-detail-row">
          <span className="payslip-label">Ac No.</span>
          <span className="payslip-value">*******0701</span>
        </div>
      </div>
      <table className="payslip-table">
        <thead>
          <tr>
            <th>Earnings</th>
            <th>Amount</th>
            <th>Deductions</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Basic</td>
            <td>16250.00</td>
            <td>PF</td>
            <td>1800.00</td>
          </tr>
          <tr>
            <td>DA</td>
            <td>550.00</td>
            <td>ESI</td>
            <td>142.00</td>
          </tr>
          <tr>
            <td>HRA</td>
            <td>1650.00</td>
            <td>TDS</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>WA</td>
            <td>120.00</td>
            <td>LOP</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>CA</td>
            <td>0.00</td>
            <td>PT</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>CCA</td>
            <td>0.00</td>
            <td>SPL. Deduction</td>
            <td>500.00</td>
          </tr>
          <tr>
            <td>MA</td>
            <td>3000.00</td>
            <td>EWF</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>Sales Incentive</td>
            <td>0.00</td>
            <td>CD</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>Leave Encashment</td>
            <td>0.00</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Holiday Wages</td>
            <td>500.00</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Special Allowance</td>
            <td>100.00</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Bonus</td>
            <td>1400.00</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Individual Incentive</td>
            <td>2400.00</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Total Earning</td>
            <td>25970.00</td>
            <td>Total Deductions</td>
            <td>2442.00</td>
          </tr>
        </tbody>
      </table>
      <div className="payslip-footer">
        <div className="payslip-net-pay">
          <span className="payslip-label">Net Pay :</span>
          <span className="payslip-value">24528.00</span>
        </div>
        <div className="payslip-amount-in-words">
          <span>In Words:</span>
          <span>{toWords(Number(24528.00))}</span>
        </div>
      </div>
      {/* <div className="payslip-signature">
        <span>For Vaics</span>
        <span className="payslip-signatory">Authorised Signatory</span>
      </div> */}
    </div>
  );
};

export default Payslip;
