const inputs = document.querySelectorAll('.input')

function addcl() {
  let parent = this.parentNode.parentNode
  parent.classList.add('focus')
}

function remcl() {
  let parent = this.parentNode.parentNode
  if (this.value == '') {
    parent.classList.remove('focus')
  }
}

function myFunction() {
  var x = document.getElementById('input')
  if (x.type === 'password') {
    x.type = 'text'
  } else {
    x.type = 'password'
  }
}
inputs.forEach((input) => {
  input.addEventListener('focus', addcl)
  input.addEventListener('blur', remcl)
})
