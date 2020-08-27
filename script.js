document.querySelector(".presentation__control").addEventListener("click", () => {
  document.querySelector(".presentation__control").classList.toggle("presentation__pause")
})

document.querySelector(".presentation__control").addEventListener("click", ({ target }) => {
  target.classList.toggle("presentation__pause")
})
