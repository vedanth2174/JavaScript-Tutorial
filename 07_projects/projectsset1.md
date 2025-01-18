#Projects related to DOM

##project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#Solution code  

##project 1
```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});


```
##project 2
```javascript
const form = document.querySelector('form');
// const height = parseInt(document.querySelector('#height').value);
// this will give you empty value of height

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const height_in_m = height / 100;
  const height_squared = height_in_m * height_in_m;
  const BMI = weight / height_squared;
  document.querySelector('#results').innerHTML = BMI;
});

```

