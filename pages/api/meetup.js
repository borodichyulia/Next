const client = await MongoClient.connect(
  'mongodb+srv://yulia:4pO3uauWuY1lqcCt@cluster0.8zass.mongodb.net/?retryWrites=true&w=majority'
);
const db = client.db();

const meetupsCollection = db.collection('meetups');
