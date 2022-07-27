"use strict";

// create new task
var lists = document.querySelectorAll('.list');

function addTask() {
  var btn = document.querySelector('.addTask');
  var addBtn = document.querySelector('.add');
  var cancelBtn = document.querySelector('.cancel');
  var form = document.querySelector('.form');
  var textarea = document.querySelector('.textarea');
  var value;
  btn.addEventListener('click', function () {
    btn.style.display = 'none';
    form.style.display = 'block';
  });
  textarea.addEventListener('input', function (e) {
    value = e.target.value;

    if (value && textarea.value) {
      addBtn.style.display = 'block';
    } else {
      addBtn.style.display = 'none';
    }
  });
  cancelBtn.addEventListener('click', function () {
    textarea.value = '';
    value = '';
    form.style.display = 'none';
    btn.style.display = 'block';
  });
  addBtn.addEventListener('click', function () {
    if (value) {
      var newItem = document.createElement('div');
      newItem.classList.add('list__item');
      newItem.textContent = value;
      lists[0].append(newItem);
    }

    textarea.value = '';
    value = '';
    form.style.display = 'none';
    btn.style.display = 'block';
  });
}

function changeTitle() {
  var titles = document.querySelectorAll('.title');
  titles.forEach(function (title) {
    title.addEventListener('click', function (e) {
      return e.target.textContent = '';
    });
  });
}

function delTask() {}

addTask();
delTask();
changeTitle();