const pop = document.querySelector('#pop')

document.querySelector('.emojis').addEventListener('mousemove', (e) => {
  let offset = (e.clientX - e.currentTarget.getBoundingClientRect().left) / 2
  
  if (offset <= 40) offset = 40
  if (offset >= 260) offset = 260
  
  pop.setAttribute('cx', offset)
})
