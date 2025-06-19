import React from "react";

const Section = ({ children, headingText, headingLevel = 2 }) => {
  console.log("Section component start rendering...");
  const H = `h${headingLevel}`;

  return (
    <section>
      <H>{headingText}</H>
      {children}
    </section>
  );
};

export default Section;
