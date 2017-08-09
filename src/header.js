var renderHeader = columns =>
  `<thead><tr>${
    columns.map(col =>
      `<th data-sort="${col}">${col}</th>`
    ).join('')
  }</tr></thead>`;

export default renderHeader;