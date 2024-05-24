import Elem from "./Elem.js";

export default class JatekTer {
  #korSzamlalo = 0; //páros esetén x jön, páratlannál o
  #lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  constructor() {
    this.#megjelenit();

    $(window).on("lepes", (event)=>{
        console.log(event.detail)
        let id=event.detail;
        this.#lep(id)
      })
  }

  // feliratkozik a lépés nevű eseményre
  
  #lep(id){
    if(this.#korSzamlalo%2==0){
        this.#lista[id]="x";
    }else{
        this.#lista[id]="o";
    }
    this.#korSzamlalo++;
    this.#megjelenit();
  }
  #megjelenit() {
    const szuloElem = $(".jatekter");
    szuloElem.empty();
    this.#lista.forEach((ertek,index) => {
      const elem = new Elem(index, ertek, szuloElem);
    });
  }
}
