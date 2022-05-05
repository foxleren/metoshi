//let $ = window.$

let switcherOption1 = document.querySelector('.switcher-option-item-button-1')
let switcherOption2 = document.querySelector('.switcher-option-item-button-2')
let switcherOption3 = document.querySelector('.switcher-option-item-button-3')
let listOfTokens = document.querySelector('.tokens_list')

$('.switcher-option-item-button-1').addEventListener('click', function () {
  switcherOption1.classList.toggle('selected')
  switcherOption2.classList.remove('selected')
  switcherOption3.classList.remove('selected')

  let buttons = document.querySelectorAll('.token_item_buy .button')
  buttons.forEach((el) => {
    el.innerHTML = '30.000 $METO'
    el.className = 'button show_popup'
  })

  let quantityStatusArray = document.querySelectorAll('.token-quantity')
  quantityStatusArray.forEach((el) => (el.className = 'token-quantity'))

  let listOfEmptyTokens = document.querySelectorAll('.empty_token_item')
  listOfEmptyTokens.forEach((el) => listOfTokens.removeChild(el))

  for (let i = 0; i < 2; i++) {
    listOfTokens.removeChild(listOfTokens.lastChild)
  }
})

switcherOption2.addEventListener('click', function () {
  switcherOption2.classList.toggle('selected')
  switcherOption1.classList.remove('selected')
  switcherOption3.classList.remove('selected')

  while (listOfTokens.children.length != 10) {
    if (listOfTokens.children.length === 5) {
      listOfTokens.innerHTML = listOfTokens.innerHTML + extraToken1 + extraToken2
    } else {
      listOfTokens.innerHTML = listOfTokens.innerHTML + emptyToken
    }
  }

  let quantityStatusArray = document.querySelectorAll('.token-quantity')
  quantityStatusArray.forEach((el) => el.classList.add('isVisible'))

  document.querySelectorAll('.token-quantity').forEach(el => (el.innerHTML = '12'))

  let buttons = document.querySelectorAll('.token_item_buy .button')
  for (let i = 0; i < buttons.length; i++) {
    if (i == 1) {
      buttons[i].classList = 'button show_popup isOpening'
      buttons[i].innerHTML = 'Opening'
    } else {
      buttons[i].innerHTML = 'Open box'
    }
  }
})

switcherOption3.addEventListener('click', function () {
  switcherOption3.classList.toggle('selected')
  switcherOption1.classList.remove('selected')
  switcherOption2.classList.remove('selected')

  while (listOfTokens.children.length != 10) {
    if (listOfTokens.children.length === 5) {
      listOfTokens.innerHTML = listOfTokens.innerHTML + extraToken1 + extraToken2
    } else {
      listOfTokens.innerHTML = listOfTokens.innerHTML + emptyToken
    }
  }

  let quantityStatusArray = document.querySelectorAll('.token-quantity')
  quantityStatusArray.forEach((el) => (el.className = 'token-quantity'))

  let buttons = document.querySelectorAll('.token_item_buy .button')
  for (let i = 0; i < buttons.length; i++) {
    if (i == 1) {
      buttons[i].classList = 'button show_popup isOpening'
      buttons[i].innerHTML = 'Opening'
    } else {
      buttons[i].innerHTML = 'Open box'
    }
  }
})

let emptyToken =
  '<div class="empty_token_item"> <img class="empty_token_icon" src="static/images/locker.svg"></img> </div>'
let extraToken1 = '<div class="token_item"><div class="token_item_image"><img src="static/images/3.png" /></div><div class="token_item_name">Lumberjack\'s chest</div><div class="token_item_desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.</div><div class="token-quantity">12</div><div class="token_item_buy"><div class="button show_popup">30.000 $METO</div><p class="token_item_amount">Available: -</p></div></div>'
let extraToken2 = '<div class="token_item"><div class="token_item_image"><img src="static/images/1.png" /></div><div class="token_item_name">Builder\'s chest</div><div class="token_item_desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.</div><div class="token-quantity">12</div><div class="token_item_buy"><div class="button show_popup">30.000 $METO</div><p class="token_item_amount">Available: -</p></div></div>'