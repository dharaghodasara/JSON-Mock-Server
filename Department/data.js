const faker = require('faker')

let data = {
    departments : []
}

for(let i=0;i<5;i++){
    data.departments.push({
        id : i+1,
        name : faker.company.companyName(),
        location : faker.address.city()
    })
}

module.exports = data
