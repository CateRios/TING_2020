import { roomsCollection } from "../../firebase";

let setRoom = async function (id,data){

    const room = await roomsCollection.add({
        id: id,
        name: data.name,
        peopleNumber: data.peopleNumber,
        description: data.description,
        services: data.services,
        images: data.images,
        amount: data.amount,
        include: data.include,
        occupationsDates: data.occupationsDates,
    });

    console.log('Added new room document with ID: ', room.id);

}

let getRooms = async function (){
    let allRooms = [];
    await roomsCollection.get()
        .then(results => {
            results.forEach(result => {
                allRooms.push(result.data())
            });
        }).catch(err => {
            console.log('Error getting documents', err);
        });
    return allRooms;
}

let getSelectedRoom = async function (index){
    let room = [];
    await roomsCollection.where("id", "==", index ).get()
        .then(results => {
            results.forEach(result => {
                room.push({id: result.id, data: result.data()})
            });
        }).catch(err => {
            console.log('Error getting documents', err);
        });
    return room;
}

let bookRoom = async function(room_id, dates){
    await roomsCollection.doc(room_id).update({occupationsDates: dates});
}

export  {
    setRoom,
    getRooms,
    getSelectedRoom,
    bookRoom
}