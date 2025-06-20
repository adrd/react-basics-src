import React, { Fragment, useState, useEffect } from "react";
import Header from "./Header";
import Section from "./Section";
import List from "./List";
import Form from "./Form";
import axios from "axios";
import "./records.scss";

const sortRecords = (records) =>
  records.sort((a, b) => {
    if (a.recordName < b.recordName) {
      return -1;
    }
    if (a.recordName > b.recordName) {
      return 1;
    }
    return 0;
  });

const Container = () => {
  console.log("Container component start rendering...");
  const [records, setRecords] = useState([]);
  const [liveText, setLiveText] = useState("");

  useEffect(() => {
    axios.get("/api/records").then(({ data }) => {
      console.log("get callback");
      console.log(data);
      setRecords(sortRecords(data));
    });
    // axios.get("/api/records").then((response) => {
    //   console.log(response);
    // });
  }, []);

  const onSubmitHandler = (entry) => {
    axios.post("/api/records", entry).then(({ data }) => {
      console.log("post callback");
      setRecords(sortRecords([...records, data]));

      setLiveText(`${entry.recordName} successfully added.`);
    });
  };

  return (
    <Fragment>
      <Header />
      <main>
        <Section headingText="Add a new favourite">
          <Form onSubmit={onSubmitHandler} />
        </Section>
        <Section headingText="Records">
          <List records={records} />
        </Section>
      </main>
      <div className="visually-hidden" aria-live="polite" aria-atomic="true">
        {liveText}
      </div>
    </Fragment>
  );
};

export default Container;
