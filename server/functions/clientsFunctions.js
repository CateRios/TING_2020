import {clientsCollection} from "../../firebase";

let setClient = async function (room_id, data){

    const client = await clientsCollection.add({
        room_id: room_id,
        firstName: data.firstName,
        secondName: data.secondName,
        phoneNumber: data.phoneNumber,
        email: data.email,
    });

    console.log('Added new client document with ID: ', client.id);

    return client.id;

}

export  {
    setClient
}