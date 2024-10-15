import React, { useState } from "react";

function TextutilsForm(props) {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const toUpCase = () => {
    let newText = text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("Text Converted to UpperCase", "success");
  };
  const toLowerCase = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Text Converted to LowerCase", "success");
  };
  const toCapitalizer = () => {
    props.showAlert("Text Converted to Capitalizer", "success");
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if (i === 0 || text[i - 1] === " ") {
        newText += text[i].toUpperCase();
      } else {
        newText += text[i].toLowerCase();
      }
    }
    setText(newText);
  };

  const toAlternate = () => {
    props.showAlert("Text Converted to Alternate", "success");
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] === text[i].toUpperCase()) {
        newText += text[i].toLowerCase();
      } else {
        newText += text[i].toUpperCase();
      }
    }
    setText(newText);
  };
  const clearSpace = () => {
    props.showAlert("Clear Extra space", "success");
    let newText = text.split(/\s +/);
    setText(newText.join(" "));
  };
  const copyText = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(text);
        props.showAlert("Text copied", "success");
      } catch (error) {
        props.showAlert("Clipboard access denied or unsupported", "error");
      }
    } else {
      props.showAlert("Clipboard API unsupported", "error");
    }
  };

  const clearText = () => {
    props.showAlert("Text Clear", "success");
    let newText = "";
    setText(newText);
  };
  return (
    <>
      <div className="container my-5">
        <div className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label fs-4 fw-bold"
          >
            Try Textutils - Convert Uppercase to Lowercase, Lowercase to
            Uppercase, Capitalize and Alternate Text, Copy and Clear Text,
            Remove Extra Spacing, Word and Character Counter
          </label>
          <textarea
            className={`form-control  text-${
              props.mode === "light" ? "dark" : "light"
              
            }`}
            style={{
              background: `${
                props.mode === "light" ? "#eee" : "rgb(0,92,100)"
              }`,
            }}
            placeholder="Enter here your summary"
            value={text}
            id="exampleFormControlTextarea1"
            rows="8"
            onChange={onChange}
          ></textarea>
        </div>
        <div className="container d-flex flex-wrap gap-2 my-3">
          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-outline-primary shadow-sm"
            onClick={toUpCase}
          >
            Convert to Uppercase
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-outline-secondary shadow-sm"
            onClick={toLowerCase}
          >
            Convert to Lowercase
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-outline-dark shadow-sm"
            onClick={toCapitalizer}
          >
            Convert to Capitalizer
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-outline-info shadow-sm"
            onClick={toAlternate}
          >
            Convert to Alternate
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-outline-warning shadow-sm"
            onClick={clearSpace}
          >
            Clear Extra Space
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-outline-success shadow-sm"
            onClick={copyText}
          >
            Copy Text
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-outline-danger shadow-sm"
            onClick={clearText}
          >
            Clear Text
          </button>
        </div>
        <div className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          <h1>Your Text Summary</h1>
          <p>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            Words and {text.replace(/\s/g, "").length} Characters
          </p>
          <p>
            {text.replace(/\s/g, "").length * 0.008} per minute Read Characters
          </p>
          <p>   
            {text
              .trim()
              .split(/\s+/)
              .filter((word) => {
                return word !== "";
              }).length * 0.008}{" "}
            per minutes Read Words
          </p>
          <h1>Preview</h1>
          <p>{text.length === 0 ? "Nothing preview here" : text}</p>
        </div>
      </div>
    </>
  );
}

export default TextutilsForm;
