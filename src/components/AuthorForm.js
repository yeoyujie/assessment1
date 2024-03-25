import { useRef, useState } from "react";
import styles from "./components.module.css";
import { FormField, FormButton, Form, Message } from "semantic-ui-react";

function AuthorForm({ onAuthorSubmit }) {
  const authorNameRef = useRef();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const authorName = authorNameRef.current.value;
    if (authorName === "") {
      setError("Author name cannot be empty");
      setSuccess("");
    } else {
      onAuthorSubmit(authorName);
      authorNameRef.current.value = "";
      setError("");
      setSuccess(`Author "${authorName}" successfully submitted!`);
    }
  };

  return (
    <div className={styles.container}>
      {error && <Message negative>{error}</Message>}
      {success && <Message positive>{success}</Message>}
      <Form onSubmit={handleSubmit} className={styles.wideField}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h1 style={{ marginTop: "-20px" }}>Author Form</h1>
        </div>
        <FormField>
          <input placeholder="Author Name" ref={authorNameRef} />
        </FormField>
        <FormButton fluid primary type="submit">
          Submit
        </FormButton>
      </Form>
    </div>
  );
}

export default AuthorForm;
