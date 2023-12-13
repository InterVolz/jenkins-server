To install MongoDB on an Ubuntu host machine for interacting with the MongoDB shell, you can follow these steps. Note that the instructions might slightly vary depending on your version of Ubuntu.

### Step 1: Import the MongoDB Public Key
MongoDB is not available in the default Ubuntu repositories. You need to import the MongoDB public GPG key using `wget`:

```bash
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
```

This command downloads and adds the GPG key for MongoDB.

### Step 2: Create a List File for MongoDB
Create a `.list` file for MongoDB in `/etc/apt/sources.list.d/`:

```bash
echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu $(lsb_release -cs)/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
```

This command adds the MongoDB repository to your system's software sources.

### Step 3: Update the Packages List
Update the local package database:

```bash
sudo apt-get update
```

### Step 4: Install MongoDB
Now, install MongoDB packages:

```bash
sudo apt-get install -y mongodb-org
```

This command installs several packages including `mongod` (the MongoDB daemon) and `mongo` (the MongoDB shell).

### Step 5: Start MongoDB
Start the MongoDB service:

```bash
sudo systemctl start mongod
```

If MongoDB does not start or you encounter issues, you can check the status of the `mongod` service for any error messages:

```bash
sudo systemctl status mongod
```

### Step 6: Enable MongoDB to Start on Boot
If you want MongoDB to start automatically when the system starts, enable it:

```bash
sudo systemctl enable mongod
```

### Step 7: Verify the Installation
To verify that MongoDB has been successfully installed, connect to the MongoDB database server using the MongoDB shell:

```bash
mongo
```

This command will connect to your MongoDB server running locally on the default port `27017`.

### Step 8: Connecting to the MongoDB Docker Container
To connect to the MongoDB instance running in your Docker container from the host machine, use the following command:

```bash
mongo --host localhost --port 27017
```

Ensure the port matches the one you used when starting your MongoDB Docker container.

### Additional Notes:
- **Version Compatibility**: Ensure that the version of MongoDB you install is compatible with the version you are running in Docker, especially if you are using specific features or syntax.
- **Security**: By default, MongoDB is not secured with a password. Consider setting up authentication for production environments.

By following these steps, you should have MongoDB installed and running on your Ubuntu host, and you will be able to interact with the MongoDB instance in your Docker container.