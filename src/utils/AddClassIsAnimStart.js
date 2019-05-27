'use strict'

//isAnimR
// Ajoute une classe CSS .isAnimStart sur les éléments voulus
// Enleve et rajoute une classe CSS  .isAnimEnd quand l'éléments apparait dans la vue
// utiliser comme ceci : AddClassIsAnimStart([elements])

class AddClassIsAnimStart{
  
  constructor(elements){
    this.options = {threshold: [0.2, 0.55]}
    this.observer = ''
    this.elements = elements
  }
  
  anime(){
    this.observer = new IntersectionObserver(this.action, this.options);
    for (let element of this.elements) {
      this.prepare(element)
      this.observer.observe(element);
    }
  }

  prepare (item){
      item.classList.add("isAnimStart")
  }

  action (items){
    items.forEach((item) => {
      if (item.intersectionRatio > 0.2){ 
        item.target.classList.remove("isAnimStart")
        item.target.classList.add("isAnimEnd")
      }
    })
  }
}

export default AddClassIsAnimStart
