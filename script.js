document.addEventListener('DOMContentLoaded', () => {
  const selectBtn   = document.querySelector('.custom-dropdown__btn')
  const selectList  = document.querySelector('.select-list')
  const inputSelect = document.querySelector('.custom-dropdown__input')

  document.addEventListener('click', (event) => {
    const $this = event.target

    if ($this !== selectBtn ) {
      selectBtn.classList.remove('custom-dropdown__btn--active')
      selectList.classList.remove('select-list--show')
    }

    if ($this == selectBtn) {
      selectBtn.classList.toggle('custom-dropdown__btn--active')
      selectList.classList.toggle('select-list--show')
    }

    if ($this.hasAttribute('data-value')) {
      selectBtn.innerText = $this.innerText
      inputSelect.value   = $this.dataset.value
      selectBtn.focus()
    }
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Tab' || event.key === 'Escape') {
      selectBtn.classList.remove('custom-dropdown__btn--active')
      selectList.classList.remove('select-list--show')
    }
  })
})