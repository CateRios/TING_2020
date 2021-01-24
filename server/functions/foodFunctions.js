import { foodCollection } from "../../firebase";

let getStarters = async function (){
    let allStarters = [];
    await foodCollection.where("category", "==", "starter").get()
        .then(results => {
            results.forEach(result => {
                allStarters.push(result.data())
            });
        }).catch(err => {
            console.log('Error getting documents', err);
        });
    return allStarters;
}

let getMain = async function (){
    let allMain = [];
    await foodCollection.where("category", "==", "main dish").get()
        .then(results => {
            results.forEach(result => {
                allMain.push(result.data())
            });
        }).catch(err => {
            console.log('Error getting documents', err);
        });
    return allMain;
}

let getSeconds = async function (){
    let allSeconds = [];
    await foodCollection.where("category", "==", "second course").get()
        .then(results => {
            results.forEach(result => {
                allSeconds.push(result.data())
            });
        }).catch(err => {
            console.log('Error getting documents', err);
        });
    return allSeconds;
}

let getDesserts = async function (){
    let allDesserts = [];
    await foodCollection.where("category", "==", "dessert").get()
        .then(results => {
            results.forEach(result => {
                allDesserts.push(result.data())
            });
        }).catch(err => {
            console.log('Error getting documents', err);
        });
    return allDesserts;
}

export  {
    getStarters,
    getMain,
    getSeconds,
    getDesserts
}