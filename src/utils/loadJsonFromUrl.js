'use strict'
// Lire un un fichier json à partir d'une url
// Utilisation de la méthode fetch ( attention utiliser un polyfill )
// Afficher les données

const data = {
    url : 'http://date.jsontest.com/',

    init: function(){
        fetch( this.url )
        .then( response => response.json() )
        .then( json => { template.createPage(json); } )
        .catch( ex => { console.log('parsing failed', ex)})
    },

    createPage: function(json){
        let data = json
        // document.querySelector('#titre').innerHTML = `${data.date} ${data.time}`
        console.log(data.time, data.date)
    }
}

export default data;