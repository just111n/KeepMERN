const mongoose = require("mongoose");
const Note = require("../../../../models/note");
const { MongoMemoryServer } = require("mongodb-memory-server");

const mongod = new MongoMemoryServer();

let uri;

beforeAll(async () => {
  await mongod.start();
  uri = await mongod.getUri();
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongod.stop();
});

describe("Integration Test for Note model and MongoDB database", () => {
  it("should save a note", async () => {
    const note = new Note({ title: "Test Title", content: "Test Content" });
    const savedNote = await note.save();

    expect(savedNote.title).toBe("Test Title");
    expect(savedNote.content).toBe("Test Content");
  });

  // Add more tests as needed...
});
