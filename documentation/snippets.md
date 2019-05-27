# My snippets

## Read json file from url

    'use strict'

    const data = {

        init: function(){
            fetch('http://date.jsontest.com/')
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

## New snippet
