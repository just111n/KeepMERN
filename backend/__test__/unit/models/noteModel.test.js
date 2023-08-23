const Note = require("../../../models/note");

describe("Note Model", () => {
  it("should create a new Note", () => {
    const noteData = {
      title: "Test Title",
      content: "Test Content",
    };

    const note = new Note(noteData);

    expect(note.title).toBe("Test Title");
    expect(note.content).toBe("Test Content");
    expect(note._id).toBeDefined();
  });
});
