import { catalog } from './catalog.js';

const century = 20;
const search = 'История';

let listLanguage = []
catalog.forEach((elem,i) => 
    {if(listLanguage.includes(elem.language) === false) {
    listLanguage.push(elem.language)
}})
console.log(listLanguage)

let listYear = []
catalog.forEach((elem,i) => 
    {if(elem.year>1901 && elem.year<2000){
        listYear.push(elem.title)
    }})
console.log(listYear)

let listAandT = []
catalog.forEach((elem,i) => 
    {if(elem.author.includes(search) || elem.title.includes(search)){
        listAandT.push([elem.author, elem.title])
    }})
console.log(listAandT)