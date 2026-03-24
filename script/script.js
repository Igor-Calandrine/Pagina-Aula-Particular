import LetraAnimada from "./letra-animada.js";
import TremerLetra from "./letra-tremendo.js";

const nomeAnimado = new LetraAnimada("nav .nome a", 250);

async function animarNome () {
   const nomeNav = new LetraAnimada("nav .nome a", 250)
   await nomeNav.aparecendoDeslocando(1.2)

   const pontoNome = new TremerLetra("nav a .spanDecorativo")
   pontoNome.tremendo(0.8)
}

animarNome()







