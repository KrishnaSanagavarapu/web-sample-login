console.log('hello!');

function pasuser(form) {
  if (form.fname.value == 'JavaScript' && form.pass.value == 'Kit') {
    console.log('logged - in');
    console.log(form.fname.value, form.pass.value);
    window.location.href = 'https://www.google.com/';
  } else {
    console.log('not logged in');
  }
}
