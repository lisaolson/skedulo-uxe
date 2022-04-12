const User1 = {
  id: 1,
  firstName: 'Andy',
  lastName: 'Johnson',
  preferredName: '',
  pronouns: '',
  role: '',
  phone: '',
  birthday: '',
  }

const User2 = {
  id: 2,
  firstName: 'Andy',
  lastName: 'Johnson',
  preferredName: '',
  pronouns: '',
  role: '',
  phone: '',
  birthday: '',
  }

const User3 = {
  id: 3,
  firstName: 'Andy',
  lastName: 'Johnson',
  preferredName: '',
  pronouns: '',
  role: '',
  phone: '',
  birthday: '',
  }

const User4 = {
  id: 4,
  firstName: 'Andy',
  lastName: 'Johnson',
  preferredName: '',
  pronouns: '',
  role: '',
  phone: '',
  birthday: '',
}

const User5 = {
  id: 5,
  firstName: 'Andy',
  lastName: 'Johnson',
  preferredName: '',
  pronouns: '',
  role: '',
  phone: '',
  birthday: '',
}

const formId = "userForm";
const url = location.href;
const formIdentifier = `${url} ${formId}`;
const submitBtn = document.getElementById("submitBtn");
let userForm = document.getElementById("userForm");
let formElements = userForm.elements;

const getFormData = () => {
  let data = { [formIdentifier]: {} };
  for (const element of formElements) {
    if (element.name.length > 0) {
      data[element.name] = element.value;
    }
  }
  return data;
};

submitBtn.onclick = event => {
  event.preventDefault();
  data = getFormData();
  localStorage.firstName = JSON.stringify(data.firstName);
  localStorage.lastName = JSON.stringify(data.lastName);
  localStorage.preferredName = JSON.stringify(data.preferredName);
  localStorage.pronouns = JSON.stringify(data.pronouns);
  localStorage.role = JSON.stringify(data.role);
  localStorage.phone = JSON.stringify(data.phone);
  localStorage.birthday = JSON.stringify(data.birthday);
  userForm.reset();
  window.location.href = "index.html";
};

const userFirstName = localStorage.getItem('firstName');
console.log('user first', userFirstName);
var tag = document.createElement("p");
var text = document.createTextNode(userFirstName);
tag.appendChild(text);
var element = document.getElementById("newUser");
element.appendChild(tag);



