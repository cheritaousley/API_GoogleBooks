const $ = require('jquery');
const sum = require('./action.js');
var html = require('fs').readFileSync('./index.html').toString();

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
// test('getting the title', () => {
//     expect(setTitle())
// }); 
$('#books').val();
$('myForm').submit();
expect($('#results').hasClass('error')).toBe(false);
expect($('#results').hasClass('error')).toBe(false);