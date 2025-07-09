import React from 'react';
import { Line } from 'react-chartjs-2'; // Chart component
import { useTable } from 'react-table'; // Table component
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ReportsAnalyticsPage = () => {
  // Data for chart with reduced placements
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Number of Placements',
        data: [30, 45, 40, 65, 55, 80], // Adjusted to fewer placements
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4, // Smooth the line to show more natural fluctuations
      },
    ],
  };

  // Dummy data for table with 10 real companies
  const tableData = React.useMemo(
    () => [
      { company: 'Google', studentsPlaced: 30, date: '2024-03-25' },
      { company: 'Microsoft', studentsPlaced: 20, date: '2024-04-10' },
      { company: 'Amazon', studentsPlaced: 40, date: '2024-05-15' },
      { company: 'Apple', studentsPlaced: 35, date: '2024-06-01' },
      { company: 'Facebook', studentsPlaced: 30, date: '2024-07-20' },
      { company: 'IBM', studentsPlaced: 45, date: '2024-08-18' },
      { company: 'Adobe', studentsPlaced: 25, date: '2024-09-02' },
      { company: 'Deloitte', studentsPlaced: 50, date: '2024-09-15' },
      { company: 'Capgemini', studentsPlaced: 40, date: '2024-10-10' },
      { company: 'Accenture', studentsPlaced: 60, date: '2024-10-25' },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: 'Company', accessor: 'company' },
      { Header: 'Students Placed', accessor: 'studentsPlaced' },
      { Header: 'Date', accessor: 'date' },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data: tableData });

  return (
    <div className="bg-gray-50 w-full">
      {/* Header Section */}
    

      {/* Main Content */}
      <div className="pt-20 px-8">
        <h1 className="text-4xl font-extrabold text-blue-950 text-center mb-8">Reports & Analytics</h1>

        {/* Chart Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-950">Placement Statistics</h2>
          <div className="w-full max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg">
            <Line data={data} />
          </div>
        </div>

        {/* Table Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-950">Placement Details</h2>
          <div className="overflow-x-auto bg-white p-6 rounded-xl shadow-lg">
            <table {...getTableProps()} className="min-w-full table-auto">
              <thead>
                {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()} className="border-b">
                    {headerGroup.headers.map(column => (
                      <th {...column.getHeaderProps()} className="py-2 px-4 text-left font-semibold text-gray-700">{column.render('Header')}</th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()} className="border-b hover:bg-gray-100">
                      {row.cells.map(cell => (
                        <td {...cell.getCellProps()} className="py-2 px-4 text-gray-700">{cell.render('Cell')}</td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsAnalyticsPage;
