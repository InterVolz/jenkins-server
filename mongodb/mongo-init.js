// Connect to the MongoDB database 'pathOfExileStats'
db = db.getSiblingDB('pathOfExileStats');

// Create the 'playerStats' collection
db.createCollection('playerStats');

// Insert a test user into the 'playerStats' collection
db.playerStats.insertOne({
    "name": "Test Player",
    "atlasPoints": 122, // Assuming atlas points start from 121
    "level": 86, // Assuming levels start from 85
    "achievements": {
        "Atziri": false,
        "Shaper": true,
        "Elder": false,
        "Sirus": false,
        "Uber Atziri": false,
        "Uber Shaper": true,
        "Uber Elder": false,
        "Super Lab": false,
        "Maven": false,
        "Uber Maven": false,
        "Searing Exarch": false,
        "Eater of Worlds": true,
        "Maven Invite: The Formed": true,
        "Maven Invite: The Twisted": true,
        "Maven Invite: The Forgotten": true,
        "Maven Invite: The Hidden": true,
        "Maven Invite: The Elderslayers": true,
        "Maven Invite: The Feared": true,
    },
    "editHistory": [] // Empty array to track the history of edits
});
