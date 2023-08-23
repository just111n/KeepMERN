const noteService = require("../../../services/noteService");
const Note = require("../../../models/note");

// Mocking mongoose functions for isolation
jest.mock("../../../models/note");

describe("noteService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("createNote function", () => {
    it("should create and return a note", async () => {
      const mockNote = { title: "Test Title", content: "Test Content" };
      Note.create.mockResolvedValue(mockNote);

      const result = await noteService.createNote("Test Title", "Test Content");
      expect(result).toEqual(mockNote);
      expect(Note.create).toHaveBeenCalledWith(mockNote);
    });

    it("should throw an error if there is a database problem", async () => {
      Note.create.mockRejectedValue(new Error("Database Error"));

      await expect(
        noteService.createNote("Test Title", "Test Content")
      ).rejects.toThrow("Database Error");
    });
  });

  describe("readAllNotes function", () => {
    afterEach(() => {
      jest.resetAllMocks(); // Clear mock data after each test
    });

    it("should return all notes", async () => {
      // Given: A list of notes to be returned by the mocked database call
      const mockNotes = [
        { title: "Note 1", content: "Content 1" },
        { title: "Note 2", content: "Content 2" },
      ];
      Note.find.mockResolvedValue(mockNotes);

      // When: Calling the function
      const result = await noteService.readAllNotes();

      // Then: Expect the result to match the mock notes
      expect(result).toEqual(mockNotes);
    });

    it("should throw an error if reading notes fails", async () => {
      // Given: An error is thrown when trying to read notes from the database
      const mockError = new Error("Mock database error");
      Note.find.mockRejectedValue(mockError);

      // When & Then: Calling the function should throw the mock error
      await expect(noteService.readAllNotes()).rejects.toThrow(mockError);
    });
  });

  // ... Continue with similar tests for readAllNotes, updateNote, deleteNote
  
  describe("deleteNote function", () => {
    afterEach(() => {
      jest.clearAllMocks(); // Clear mock data after each test
    });

    it("should delete and return the note", async () => {
      // Given: A mock note to be returned after deletion
      const mockNote = {
        _id: "mockId1",
        title: "Test Title",
        content: "Test Content",
      };
      Note.findByIdAndDelete.mockResolvedValue(mockNote);

      // When: Calling the function
      const result = await noteService.deleteNote("mockId1");

      // Then: Expect the result to match the mock note
      expect(result).toEqual(mockNote);
      expect(Note.findByIdAndDelete).toHaveBeenCalledWith("mockId1");
    });

    it("should throw an error if there is a database problem", async () => {
      // Given: An error is thrown when trying to delete the note from the database
      const mockError = new Error("Mock database error");
      Note.findByIdAndDelete.mockRejectedValue(mockError);

      // When & Then: Calling the function should throw the mock error
      await expect(noteService.deleteNote("mockId1")).rejects.toThrow(
        mockError
      );
    });
  });
});
