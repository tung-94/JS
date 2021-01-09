let clubs = [
    {
        name: "Broway",
        points: 93,
        GD: 40,
    },
    {
        name: "Arsenal",
        points: 99,
        GD: 45,
    },
    {
        name: "Chelsea",
        points: 75,
        GD: 39,
    },
    {
        name: "Manchester United",
        points: 60,
        GD: 29,
    },
    {
        name: "Liverpool",
        points: 88,
        GD: 39,
    },
    {
        name: "West Harm",
        points: 80,
        GD: 29,
    }
]
function sortObj(objArr) {
    let resultDubNameObj = findDuplicateItem(objArr, (obj) => {
        return obj.name;
    });
    let clubsResult = [];

    for (let prop in resultDubNameObj) {
        clubsResult.push(resultDubNameObj[prop])
    }
    clubsResult.sort((objA, objB) => {
        if (objB.points == objA.points) {
            if (objB.points == objA.points && objB.GD == objA.GD) {
                let nameB = objB.name.toLowerCase();
                let nameA = objA.name.toLowerCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
            }
            return objA.GD - objB.GD;
        }
        return objB.points - objA.points;
    });
    for (let i = 0; i < clubsResult.length; ++i) {
        let index = i + 1;
        clubsResult[i].position = index;
    }
    return clubsResult;
}

console.log(sortObj(clubs));
