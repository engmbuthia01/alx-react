import $ from 'jquery';
import _ from 'lodash';
import './body.css';

$('#root').append(`
  <main>
    <p>ALX Dashboard</p>
    <p>Dashboard data for the students</p>
    <button id="clickBtn">Click here to get started</button>
    <p id="count"></p>
  </main>
`);

let count = 0;
function updateCounter() {
    count++;
    $('#count').html(`${count} clicks on the button`);
}

$('#clickBtn').on('click', _.debounce(updateCounter, 500));
