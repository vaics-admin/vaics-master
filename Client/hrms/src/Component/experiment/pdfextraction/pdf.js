import React, { useState } from "react";
import pdfToText from "react-pdftotext";

function PDFParserReact() {
  const [extractedText, setExtractedText] = useState("");
  const [error, setError] = useState(null);

  const formatText = (text) => {
    // Split the text into sections based on headings
    const lines = text.split("\n");
    let formattedText = "";

    // Define the sections and parse accordingly
    lines.forEach((line) => {
      if (line.includes("Meeting/ Project Name:")) {
        formattedText += `<strong>Meeting/ Project Name:</strong> ${line.split(":")[1].trim()}<br />`;
      } 
       if (line.includes("Date of Meeting:")) {
        formattedText += `<strong>Date of Meeting:</strong> ${line.split(":")[1].trim()}<br />`;
      } 
       if (line.includes("Time:")) {
        formattedText += `<strong>Time:</strong> ${line.split(":")[1].trim()}<br />`;
      }
       if (line.includes("Meeting Facilitator:")) {
        formattedText += `<strong>Meeting Facilitator:</strong> ${line.split(":")[1].trim()}<br />`;
      }
       if (line.includes("Location:")) {
        formattedText += `<strong>Location:</strong> ${line.split(":")[1].trim()}<br />`;
      }
       if (line.includes("Attendees")) {
        formattedText += `<strong>Attendees:</strong><br />`;
      } 
       if (line.includes("Action Items")) {
        formattedText += `<strong>Action Items:</strong><br />`;
      } 
       if (line.includes("Next Meeting")) {
        formattedText += `<strong>Next Meeting:</strong><br />`;
      } 
      else {
        formattedText += `${line}<br />`;
      }
    });
    
    return formattedText;
  };

  const extractText = (event) => {
    const file = event.target.files[0];
    if (file) {
      pdfToText(file)
        .then((text) => {
          const formatted = formatText(text);
          setExtractedText(formatted);
          setError(null);
        })
        .catch((err) => {
          setError("Failed to extract text from the PDF.");
          console.error(err);
        });
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>PDF Text Extractor</h1>
      <input
        type="file"
        accept="application/pdf"
        onChange={extractText}
        style={{ marginBottom: "20px" }}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      {extractedText && (
        <div
          dangerouslySetInnerHTML={{ __html: extractedText }}
          style={{ whiteSpace: "pre-wrap" }}
        />
      )}
    </div>
  );
}

export default PDFParserReact;
