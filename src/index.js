import json from './data.json';
import renderHeader from './header';
import renderRow from './row';

const { data } = json;

const root = document.getElementById('root');

const columns = ['country', 'price', 'date', 'duration'];

var renderBody = function(data, columns) {
  return '<tbody>'+ 
    data.map(function(rowData){
      return renderRow(rowData, columns);
    }).join('') + '</tbody>'
}

var renderTable = function(data, columns){
  root.innerHTML = '<table>' 
    + renderHeader(columns)
    + renderBody(data, columns)
    +'</table>';
};

renderTable(data, columns);

document.addEventListener('click', ({ target: { dataset: { sort: key } } }) => {
  if (!key) return;

  var newData = [...data].sort(function(item1, item2){
    if (item1[key] === item2[key]) {
      return 0;
    }
    return item1[key] > item2[key] ? 1 : -1;
  });

  renderTable(newData, columns);
});











