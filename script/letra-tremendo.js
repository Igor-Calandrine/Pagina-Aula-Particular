export default class TremerLetra {
   constructor(item) {
      this.item = document.querySelector(item)
   }

   tremendo (t) {
      this.item.classList.add("letrasTremendo")
      this.item.style.animation = `shake ${t}s linear infinite`
   }
}