import { usersCollection } from "../../firebase";

let getUser = async function (index){
    let user = [];
    await usersCollection.where("id", "==", index ).get()
        .then(results => {
            results.forEach(result => {
                user.push(result.data())
            });
        }).catch(err => {
            console.log('Error getting documents', err);
        });
    return user;
}

export  {
    getUser
}