export default class LetraAnimada {
   constructor(item, intervalo) {
      this.item = document.querySelector(item)
      this.intervalo = intervalo
   }
   
   aparecendo (t) {
      let texto = this.item.textContent
      console.log(texto)
      this.item.textContent = ""

      let i=0
      let intervalo = setInterval(() => {
         const span = document.createElement("span")
         
         if (texto[i] == ".") 
            span.classList.add("spanDecorativo")
         
         this.item.appendChild(span)
         span.textContent = texto[i]
         span.classList.add("letrasAparecendo")
         span.style.animation = `letrasAparecendo ${t}s ease`
         i++

         if (i >= texto.length){
            clearInterval(intervalo)
            resolve()
         }
         
      },this.intervalo)
   }

   aparecendoDeslocando (t) {
      return new Promise((resolve) => {

         let texto = this.item.textContent
         this.item.textContent = ""

         let i=0
         let intervalo = setInterval(() => {
            const span = document.createElement("span")
            
            if (texto[i] == ".") 
               span.classList.add("spanDecorativo")
            
            this.item.appendChild(span)
            span.textContent = texto[i]
            span.classList.add("letrasAparecendo")
            span.classList.add("letrasDeslocando")
            span.style.animation = `letrasAparecendo ${t}s ease, letrasDeslocando ${t}s ease`
            i++

            if (i >= texto.length){
               clearInterval(intervalo)
               resolve()
            }
            
         },this.intervalo)
      })
   }
}