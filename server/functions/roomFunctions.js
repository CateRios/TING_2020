import { roomsCollection } from "../../firebase";

let setRoom = async function (data){

    const room = await roomsCollection.add({
        name: data.name,
        peopleNumber: data.peopleNumber,
        description: data.description,
        services: data.services,
        images: data.images,
        amount: data.amount,
        include: data.include,
        occupationsDates: data.occupationsDates,
        user_ids: data.user_ids
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

export  {
    setRoom,
    getRooms
}