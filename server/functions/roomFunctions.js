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

let getSelectedRoom = async function (){
    let room = [];
    var roomsRef = roomsCollection.doc('2r3mnabsVpoT23MDjNAp');
   await roomsRef.get().then(function(doc) {
            room.push(doc.data())
    })
    return room;
}

export  {
    setRoom,
    getRooms,
    getSelectedRoom
}