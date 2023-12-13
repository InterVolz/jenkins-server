To install MongoDB on an Ubuntu host machine for interacting with the MongoDB shell, you can follow these steps. Note that the instructions might slightly vary depending on your version of Ubuntu.

### Step 1: Import the MongoDB 

mongodb.com

test connecting to docker running mongodb

mongosh --host localhost --port 27017

> note that mongo should not be running locally or will have port conflicts
>

### Verify Data

```sh
show dbs
use pathOfExileStats
db.playerStats.find().pretty()
```

### Wipe DB - careful...

```sh
sudo rm -rf /var/lib/mongodb-data/*
```