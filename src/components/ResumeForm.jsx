import { useState } from "react";
import { generateText } from "../services/gemini";

export default function ResumeForm() {
  const [form, setForm] = useState({
    name: "",
    skills: "",
    experience: "",
    grade: "",
    nationality: "",
    languages: "",
    portfolio: "",
    github: "",
    linkedin: "",
    contacts: "",
    objectives: "",
    // photo: null,
  });
  const [generated, setGenerated] = useState("");

  // Handle text inputs and file input separately
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value, // if file input, save file; else save text
    }));
  };

  const handleGenerate = async () => {
    // Prepare prompt string
    const prompt = `  
  Generate a modern, professional resume in well-structured text (not HTML, not JSON).
Format it as if it were written in a text editor or Word doc, including sections: 
Name, Nationality, Grade/Qualification, Languages, Skills, Experience, Portfolio, GitHub, LinkedIn, Contacts, Objectives.
Make it clean, well-organized, and written in natural language.
    Name: ${form.name}
    Nationality: ${form.nationality}
    Grade: ${form.grade}
    Languages: ${form.languages}
    Skills: ${form.skills}
    Experience: ${form.experience}
    Portfolio: ${form.portfolio}
    GitHub: ${form.github}
    LinkedIn: ${form.linkedin}
    Contacts: ${form.contacts}
    Objectives: ${form.objectives}
    Make it clean, modern, and minimal HTML.`;

    const text = await generateText(prompt);
    setGenerated(text);
  };

  return (
    <div className="container">
      <h2>Generate Resume</h2>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input
        name="nationality"
        placeholder="Nationality"
        onChange={handleChange}
      />
      <input
        name="grade"
        placeholder="Grade / Qualification"
        onChange={handleChange}
      />
      <input
        name="languages"
        placeholder="Languages (comma separated)"
        onChange={handleChange}
      />
      <input
        name="skills"
        placeholder="Skills (comma separated)"
        onChange={handleChange}
      />
      <textarea
        name="experience"
        placeholder="Experience"
        onChange={handleChange}
      />
      <input
        name="portfolio"
        placeholder="Portfolio URL (optional)"
        onChange={handleChange}
      />
      <input
        name="github"
        placeholder="GitHub URL (optional)"
        onChange={handleChange}
      />
      <input
        name="linkedin"
        placeholder="LinkedIn URL (optional)"
        onChange={handleChange}
      />
      <input
        name="contacts"
        placeholder="Contacts (phone/email)"
        onChange={handleChange}
      />
      <textarea
        name="objectives"
        placeholder="Other objectives / summary"
        onChange={handleChange}
      />

      <button onClick={handleGenerate}>Generate Resume</button>
      {/* <pre style={{ whiteSpace: "pre-wrap" }}>{generated}</pre> */}
      <pre
        style={{
          marginTop: 20,
          whiteSpace: "pre-wrap",
          backgroundColor: "#f0f0f0",
          padding: 15,
          borderRadius: 4,
          color: "#222",
          maxHeight: 400,
          overflowY: "auto",
        }}
      >
        {generated}
      </pre>
    </div>
  );
}
