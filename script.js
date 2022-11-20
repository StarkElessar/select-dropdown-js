document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', ({ target }) => {
    const dropdown = target.closest('[data-dropdown]')

    if (dropdown) {
      const dropdownSelectButton = dropdown.querySelector('[data-dropdown-button]')
      const dropdownSelectList = dropdown.querySelector('[data-dropdown-list]')
      const dropdownInput = dropdown.querySelector('input[type="hidden"]')
      
      if (target !== dropdownSelectButton ) {
        dropdownSelectButton.classList.remove('_active')
        dropdownSelectList.classList.remove('_show')
      }
  
      if (target === dropdownSelectButton) {
        dropdownSelectButton.classList.toggle('_active')
        dropdownSelectList.classList.toggle('_show')
      }
  
      if (target.hasAttribute('data-value')) {
        dropdownSelectButton.innerText = target.dataset.value
        dropdownInput.value = target.dataset.value
        dropdownSelectButton.focus()
      }

      dropdown.addEventListener('keydown', ({ key }) => {
        if (key === 'Tab' || key === 'Escape') {
          dropdownSelectButton.classList.remove('_active')
          dropdownSelectList.classList.remove('_show')
        }
      })
    }
  })
})