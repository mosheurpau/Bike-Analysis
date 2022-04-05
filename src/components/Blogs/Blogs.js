import React from "react";
import { Container } from "react-bootstrap";

const Blogs = () => {
  return (
    <Container>
      <h3 className="pt-5 text-start">What is the purpose of context API?</h3>
      <p className="text-start">
        A React app can use the React Context API to generate global variables
        that can be passed around. This is a better option than "prop drilling,"
        which entails passing props from grandma to child to parent.
      </p>
      <h3 className="pt-3 text-start">
        What is semantic tag explain with example?
      </h3>
      <p className="text-start">
        Semantic elements have meaningful names that tell the browser and the
        developer about the sort of content and clearly describe its meaning.
        Nonsemantic elements include div  and span. It says nothing about what
        it's about.   form, table, and article are examples of semantic
        elements. Its content is clearly defined.
      </p>
      <h3 className="pt-3 text-start">
        What is the difference between inline and inline-block?
      </h3>
      <p className="text-start">
        The main distinction between inline-block and display: inline is that
        inline-block allows you to specify the element's width and height. Also,
        when using display: inline, the top and bottom margins and paddings are
        ignored.
      </p>
    </Container>
  );
};

export default Blogs;
