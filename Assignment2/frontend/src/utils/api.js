export const fetchNotes = async () => {
  try {
    const response = await fetch("http://localhost:3030/api/notes");
    const data = await response.json();
    return data.status === 1 ? data.data : [];
  } catch (error) {
    console.error("Error fetching notes:", error);
    return [];
  }
};

export const addNoteToApi = async (title, description) => {
  const newNote = { title, description };
  try {
    const response = await fetch("http://localhost:3030/api/create-note", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote),
    });
    const data = await response.json();
    return data.status === 1 ? data.data : null;
  } catch (error) {
    console.error("Error creating note:", error);
    return null;
  }
};
export const fetchNoteDetail = async (id) => {
  try {
    const formData = new URLSearchParams();
    formData.append("id", id);

    const response = await fetch("http://localhost:3030/api/note", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    const data = await response.json();
    console.log(data.data);

    return data.status === 1 ? data.data : null;
  } catch (error) {
    console.error("Error fetching note detail:", error);
    return null;
  }
};

export const updateNoteApi = async (id, title, description) => {
  const updatedNote = { id, title, description };
  try {
    const response = await fetch("http://localhost:3030/api/update-note", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedNote),
    });
    const data = await response.json();
    console.log(data);
    return data.status === 1 ? true : false;
  } catch (error) {
    console.error("Error updating note:", error);
    return null;
  }
};

export const deleteNoteApi = async (id) => {
  const updatedNote = { id };
  try {
    const response = await fetch("http://localhost:3030/api/delete-note", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedNote),
    });
    const data = await response.json();
    console.log(data);
    return data.status === 1 ? true : false;
  } catch (error) {
    console.error("Error deleting note:", error);
    return null;
  }
};
