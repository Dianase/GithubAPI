'use strict';



function generateHeader() {
  return `<h1>Github Repos</h1>
  <h3>Cool site for looking up repositories</h3>`;
}

function renderHeader() {
  const content = generateHeader();
  $('main').html(content);
}

function generateForm() {
  return `<form>
    <fieldset>
    <label for="search-repos">Search for repos by User</label><input type="text" name="search-repos" id="search-repos" required >
    <button type="submit">Search</button>
    </fieldset> 
  </form>`
}

function renderForm() {
  const content = generateForm();
  $('#root').append(content);
}

function handleSearch() {
  $('main').on('submit', function () {
    let userName = $('#search-repos').val();
    console.log(userName);
    let url = `https://api.github.com/users/${userName}/repos`;
    fetch(url).then(response => response.json()).then(repos => renderRepos(repos));
  })
}

function renderRepos(repos) {
  
  let html = [];
  for (let i = 0; i < repos.length; i++) {
    html.push(`<h3>${repos[i].name}</h3>
    <a href="${repos[i].url}"></a>`);
    $('#root').append(html);
  }
}

$(function () {
  renderHeader();
  renderForm();
  handleSearch();
})


