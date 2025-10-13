// STRETCH
const cars = [
{
vin:'111111111111',
make:"toyota",
model:'prius',
mileage: 215000,
title:'clean',
transmission:'manual'
},
{
vin:'111111111111',
make:"toyota",
model:'prius',
mileage: 215000,
title:'clean',
transmission:'salvage'
},
{
vin:'111111111111',
make:"Toyota",
model:'prius',
mileage: 15000,
title:'clean',
},
]

// exports.seed = function(knex) {
//     return knex('cars')
//     .truncate().then(() => {
//         return knex('cars').insert(cars);
// } ) ;
// };

exports.seed =async function (knex) {
    await knex('cars'.).truncate()
    await knex('cars').insert(cars)
}