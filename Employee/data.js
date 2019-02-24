const faker = require('faker')

let data = {
    employees : []
}

const gender = ["male","female"]

for(let i=0;i<50;i++){
    data.employees.push({
        id : i+1,
        name : faker.name.findName(),
        email : faker.internet.email(),
        avatar : faker.image.avatar(),
        gender : faker.random.arrayElement(gender),
        address : {
            city : faker.address.city(),
            country : faker.address.country()
        },
        jobTitle : faker.name.jobTitle,
        age : faker.random.number({min:25,max:50}),
        departmentID : faker.random.number({min:1, max:5}),
        hireDate : faker.date.past()
    })
}

module.exports = data
