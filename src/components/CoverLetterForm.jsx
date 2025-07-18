import { useState } from "react";
import { generateText } from "../services/gemini";

export default function CoverLetterForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    companyAddress: "",
    hiringManagerName: "",
    hiringManagerTitle: "",
    jobPosition: "",
    platform: "",
    specificInterest: "",
    skills: "",
    accomplishments: "",
    contact: "",
    portfolio: "",
    github: "",
    linkedin: "",
    extraNote: "",
  });
  const [result, setResult] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleGenerate = async () => {
    const prompt = `
Write a formal, professional cover letter for a Software Engineer application:

Applicant's Name: ${form.name}
Company: ${form.company}
Company Address: ${form.companyAddress || "Not provided"}
Hiring Manager: ${form.hiringManagerName || "Hiring Manager"}
Hiring Manager Title: ${form.hiringManagerTitle || "Not provided"}
Position Applied For: ${form.jobPosition}
Platform Where Job Was Found: ${form.platform}

Mention genuine interest in the company, specifically highlighting: ${
      form.specificInterest
    }

Highlight the following skills: ${form.skills}

Include key accomplishments related to the job: ${form.accomplishments}

Include contact info: ${form.contact}

Mention portfolio, GitHub, and LinkedIn URLs if provided:
Portfolio: ${form.portfolio || "N/A"}
GitHub: ${form.github || "N/A"}
LinkedIn: ${form.linkedin || "N/A"}

Add this additional note if any: ${form.extraNote || "None"}

Write with a polite, professional tone, structured in clear paragraphs:
- Introduction stating interest and source of the job posting
- Why the applicant is a good fit (skills + accomplishments)
- Enthusiasm and motivation to join the company
- Closing with thanks and invitation for interview

Make sure to format it as a formal letter including a greeting (Dear ...), body paragraphs, and a closing signature with the applicant's name.
`;

    const text = await generateText(prompt);
    setResult(text);
  };

  return (
    <div className="container" style={{ maxWidth: 600, margin: "auto" }}>
      <h2 style={{ color: "black" }}>Generate Cover Letter</h2>

      <input
        name="name"
        placeholder="Your Full Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="company"
        placeholder="Company Name"
        value={form.company}
        onChange={handleChange}
      />
      <input
        name="companyAddress"
        placeholder="Company Address (optional)"
        value={form.companyAddress}
        onChange={handleChange}
      />
      <input
        name="hiringManagerName"
        placeholder="Hiring Manager Name (optional)"
        value={form.hiringManagerName}
        onChange={handleChange}
      />
      <input
        name="hiringManagerTitle"
        placeholder="Hiring Manager Title (optional)"
        value={form.hiringManagerTitle}
        onChange={handleChange}
      />
      <input
        name="jobPosition"
        placeholder="Position You Are Applying For"
        value={form.jobPosition}
        onChange={handleChange}
      />
      <input
        name="platform"
        placeholder="Where You Found the Job Posting (e.g. LinkedIn)"
        value={form.platform}
        onChange={handleChange}
      />
      <textarea
        name="specificInterest"
        placeholder="What interests you about the company or position?"
        value={form.specificInterest}
        onChange={handleChange}
      />
      <textarea
        name="skills"
        placeholder="Your relevant skills (comma separated)"
        value={form.skills}
        onChange={handleChange}
      />
      <textarea
        name="accomplishments"
        placeholder="Key accomplishments or projects related to the job"
        value={form.accomplishments}
        onChange={handleChange}
      />
      <input
        name="contact"
        placeholder="Your Contact Info (email / phone)"
        value={form.contact}
        onChange={handleChange}
      />
      <input
        name="portfolio"
        placeholder="Portfolio URL (optional)"
        value={form.portfolio}
        onChange={handleChange}
      />
      <input
        name="github"
        placeholder="GitHub URL (optional)"
        value={form.github}
        onChange={handleChange}
      />
      <input
        name="linkedin"
        placeholder="LinkedIn URL (optional)"
        value={form.linkedin}
        onChange={handleChange}
      />
      <textarea
        name="extraNote"
        placeholder="Additional notes (optional)"
        value={form.extraNote}
        onChange={handleChange}
      />

      <button onClick={handleGenerate} style={{ marginTop: 10 }}>
        Generate Letter
      </button>

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
        {result}
      </pre>
    </div>
  );
}
