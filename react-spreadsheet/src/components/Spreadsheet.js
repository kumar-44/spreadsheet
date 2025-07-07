import React from 'react';
import './Spreadsheet.css';

const data = [
  {
    request: "Social media campaign for product launch",
    submitted: "A, B",
    status: "In-process",
    submitter: "Aisha Patel",
    url: "www.aishapatel.com",
    assigned: "Sophie Choudhury",
    priority: "Medium",
    dueDate: "20-11-2024",
    value: "6,200,000",
  },
  {
    request: "Business kit for company redesign",
    submitted: "C",
    status: "Need to start",
    submitter: "Irfan Khan",
    url: "www.irfankhan.com",
    assigned: "Tejas Pandey",
    priority: "High",
    dueDate: "30-10-2024",
    value: "3,500,000",
  },
  // Add more rows if needed
];

const Spreadsheet = () => {
  return (
    <div className="spreadsheet">
      <table>
        <thead>
          <tr>
            <th>Request</th>
            <th>Submitted</th>
            <th>Status</th>
            <th>Submitter</th>
            <th>URL</th>
            <th>Assigned</th>
            <th>Priority</th>
            <th>Due Date</th>
            <th>Est. Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              <td>{row.request}</td>
              <td>{row.submitted}</td>
              <td><span className={`status ${row.status.toLowerCase().replace(/ /g, "-")}`}>{row.status}</span></td>
              <td>{row.submitter}</td>
              <td><a href={`https://${row.url}`} target="_blank" rel="noreferrer">{row.url}</a></td>
              <td>{row.assigned}</td>
              <td><span className={`priority ${row.priority.toLowerCase()}`}>{row.priority}</span></td>
              <td>{row.dueDate}</td>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Spreadsheet;
