const renderRow = (rowData, columns) =>
  `<tr>${
    columns.map(key =>
      `<td>${rowData[key]}</td>`).join('')
  }</tr>`; 

export default renderRow;
