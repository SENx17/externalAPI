const baseURL = "https://reqres.in/api/users";

const contentList = document.querySelector("#content-list");

const getListTeams = () => {
  fetch(baseURL, { method: "get" })
    .then((response) => response.json())
    .then((resJSON) => {
      console.log(resJSON.data);
      showListData(resJSON.data);
    });
};

const showListData = (data) => {
  contentList.innerHTML = "";
  data.forEach((item) => {
    contentList.innerHTML += `
    <div class="col s12 s12 m6 l4">
        <div class="card">
            <div class="card-image">
                <img src="${item.avatar}" />
                <span class="card-title">${item.email}</span>
            </div>
            <div class="card-content">
                <div><span>First Name : ${item.first_name}</span></div>
                <div><span>Last Name  : ${item.last_name}</span></div>
            </div>
        </div>
    </div>
    `;
  });
};

document.addEventListener("DOMContentLoaded", getListTeams());
var elems = document.querySelectorAll(".sidenav");
var instances = M.Sidenav.init(elems);
