{
  /* 
    // pseudo collection
    // users collection
{
    "_id": Object("user_id_1"),
    "name": "John Doe",
    "email" "johndoe@example.com"
}

// gas collection
{
    "_id": Object("cynlinder_id_1"),
    "userId": Object("user_id_1"),
    "type" "Propane",
    "capacity": "20L"
} */
}

//main is actually to retrieve users associated with each cynlinder

const userId = Object("user_id_1");

//create a query to retrieve the  user and their gas cylinders
db.users.aggregate([
  {
    //match the user with the cylinder
    $match: { _id: userId },
  },
  // using lookup to join the cylinders and  the users  base on the userId
  {
    $lookup: {
      from: "gascylinders",
      localField: "_id",
      foreignField: "userId",
      as: "cylinders",
    },
  },
]);
