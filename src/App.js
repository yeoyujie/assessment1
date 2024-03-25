import { useState, useEffect } from "react";
import axios from "axios";
import { Tab, TabPane, Button } from "semantic-ui-react";

import AuthorForm from "./components/AuthorForm";
import AuthorList from "./components/AuthorList";
import DetailedAuthorList from "./components/DetailedAuthorList";

import "./App.css";

function App() {
  const initialAuthorNames =
    JSON.parse(localStorage.getItem("authorNames")) || [];

  const [authorNames, setAuthorNames] = useState(initialAuthorNames);

  const [apiAuthors, setApiAuthors] = useState([]);
  const [loading, setLoading] = useState(true); // For API
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Updates localStorage whenever authorNames change
  useEffect(() => {
    localStorage.setItem("authorNames", JSON.stringify(authorNames));
  }, [authorNames]);

  // Validates if the submitted name is empty/duplicate/valid and display error/success message accordingly.
  const handleAuthorSubmit = (authorName) => {
    if (authorName === "") {
      setError("Author name cannot be empty");
      setSuccess("");
    } else if (authorNames.includes(authorName)) {
      setError(`Author "${authorName}" already exists!`);
      setSuccess("");
    } else {
      setAuthorNames((prevNames) => [...prevNames, authorName]);
      setError("");
      setSuccess(`Author "${authorName}" successfully submitted!`);
    }
  };

  const handleClearAuthors = () => {
    setAuthorNames([]);
  };

  // Works for deployment only
  useEffect(() => {
    axios
      .get("/users")
      .then((response) => {
        setApiAuthors(response.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching API", error);
      });
  }, []);

  // Switch between tabs to view the authors submitted by the user and the authors fetched from the API.
  const panes = [
    {
      menuItem: "Submitted Authors",
      render: () => (
        <TabPane>
          <AuthorList authorNames={authorNames} />
          <br />
          <Button color="red" onClick={handleClearAuthors}>
            Clear Authors
          </Button>
        </TabPane>
      ),
    },
    {
      menuItem: "API Authors",
      render: () => (
        <TabPane loading={loading}>
          <DetailedAuthorList authors={apiAuthors} />
        </TabPane>
      ),
    },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ width: "50%" }}>
        <AuthorForm
          onAuthorSubmit={handleAuthorSubmit}
          error={error}
          success={success}
        />
      </div>
      <div style={{ width: "50%" }}>
        <Tab panes={panes} className="tabPadding" />
      </div>
    </div>
  );
}

export default App;
