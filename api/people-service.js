const fs = require('fs');

module.exports = class PeopleService {
    constructor() {
        this.peoples = JSON.parse(fs.readFileSync(__dirname + '/people.json', 'utf8'));
    }

    updatePeople(id, people) {
        let update = false;
        this.peoples.filter(function (a) {
            if (a.id === parseInt(id))
            {
                for (var keys in people) {
                    a[keys] = people[keys];
                    console.log(a);
                    update = true;
                }
            }   
        })
        return update;
    }
    
    
    getPeople() {
        return this.peoples;
    }
}
