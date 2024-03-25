import { useRef } from "react";
import { FormField, FormButton, Form, Message } from "semantic-ui-react";
import styles from "./components.module.css";

function AuthorForm({ onAuthorSubmit, error, success }) {
  const authorNameRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const authorName = authorNameRef.current.value;
    onAuthorSubmit(authorName);
    authorNameRef.current.value = "";
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
