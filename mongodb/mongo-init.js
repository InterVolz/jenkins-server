// Connect to the MongoDB database 'pathOfExileStats'
db = db.getSiblingDB('pathOfExileStats');

// Create the 'characters' collection
db.createCollection('characters');

// Create the 'historyLog' collection
db.createCollection('historyLog');

// Define default values for new characters
const defaultCharacter = {
    atlasPoints: 121,  // Default Atlas Points
    level: 85,         // Default Level
    achievements: {
        Atziri: false,
        Shaper: false,
        Elder: false,
        Sirus: false,
        UberAtziri: false,
        UberShaper: false,
        UberElder: false,
        SuperLab: false,
        Maven: false,
        UberMaven: false,
        SearingExarch: false,
        EaterOfWorlds: false,
        MavenInviteTheFormed: false,
        MavenInviteTheTwisted: false,
        MavenInviteTheForgotten: false,
        MavenInviteTheHidden: false,
        MavenInviteTheElderslayers: false,
        MavenInviteTheFeared: false
    }
};

// Insert three characters with default values
db.characters.insertMany([
    { name: "PepperoniPaladin", ...defaultCharacter },
    { name: "PodBlaster", ...defaultCharacter },
    { name: "Zankette", ...defaultCharacter }
]);
