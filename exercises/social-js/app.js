var vanFam = [
    {
        firstName: "Brenan",
        lastName: "Thompson",
        age: 28,
        rig: [
            {
                rigName: "Blue",
                rigMake: "Volkswagen",
                rigModel: ["T3",
                    {
                        subModel: {
                            'Campmobile', 'Westfalia', 'Westy', 'Weekender'
                                },
                            }
                          ],
                rigYear: '1987',
                running: function () {
                    if (rigMake = "Volkswagen") {
                        console.log(this.rigName + " probably isn't running."),
                            else {
                                console.log("Sweet ride!"),
                            }
                    }
                }
            }
                ],
        trips: [
            {
                name: "Zion NP",
                states: "Utah",
                memories: "Popped a wheelie!",
                passengers: 3,
                milesTraveled: 500,
                rating: 9,
            },
            {
                name: "Descend On Bend",
                states: ["Utah", "Idaho", "Oregon"],
                memories: "Tons of mud.",
                passengers: 3,
                milesTraveled: 800,
                rating: 8.5,
            },
        ]
    },
    {
        firstName: "Dave",
        lastName: "Nielsen",
        age: 27,
        rig: [
            {
                rigName: "Farout!",
                rigMake: "Toyota",
                rigModel: "Van",
                subModel: "4x4",
                rigYear: '1987',
                running: function () {
                    if (rigMake = "Volkswagen") {
                        console.log(this.rigName + " probably isn't running."),
                            else {
                                console.log("Sweet ride!"),
                            },
                    }
                }
            },
                ],
    }

]