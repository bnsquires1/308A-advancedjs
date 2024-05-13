// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.mjs";

function getUserData(id) {
    const dbs = {
        db1: db1,
        db2: db2,
        db3: db3,
    };

    // console.log(dbs["db1"](id));

    let result = {};
    result.id = id;

try {
let waiting = await central(id);
console.log(waiting);
console.log(dbs[waiting](id));
let db = await dbs[waiting](id);
// console.log(db);
result.username = db.username;
result.website = db.website;
result.company = db.company;
console.log(result);
}
};

// getUserData(8);

function getUserData2 (id) {
    const dbs = {
        db1; db1,
        db2: db2,
        db3: db3,
    };
    central(id)
        .then((data) => {
        console.log(data);
        dbs[data](id)
        .then((db) => {
            console.log(db);
        })
    })
}

    Promise.any([central(id)])
    .then((x) => {
        console.log(x);
    })
    .catch ((err) => {
        console.error(err);
    });
    Promise.resolve()


    // try{
    // let waiting = await dbs.db1(id);
    // console.log(waiting);
    // }catch{
    // }
    console.log(dbs.db1(id));
    // Promise.any([dbs.db1(id), dbs.db2(id), dbs.db3(id)])
    //   .then((x) => {
    //     console.log(x);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    Promise.resolve(dbs.db1(id))
        .then((x) => {
            console.log(x);
        })
        .catch((err) => {
            console.log(err);
        });

    // {
    //     id: number,
    //         name: string,
    //             username: string,
    //                 email: string,
    //                     address: {
    //         street: string,
    //             suite: string,
    //                 city: string,
    //                     zipcode: string,
    //                         geo: {
    //             lat: string,
    //                 lng: string
    //         }
    //     },
    //     phone: string,
    //         website: string,
    //             company: {
    //         name: string,
    //             catchPhrase: string,
    //                 bs: string
    //     }
    // }

    console.log("its working");
