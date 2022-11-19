import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Highlighter from "react-highlight-words";
import { handleHighlight } from "./actionTypes";

const ParaGraph = () => {
  const dispatch = useDispatch();
  const personData = useSelector((state) => state.reducer.personData);
  const highlight = useSelector((state) => state.reducer.highlight);
  const string = `Elinor Lee, a gangster’s moll living in the Harlem section of New York City, 
  has signed up-and-coming boxer Benny Blue to a 10-year contract. 
  Lee and a pair of corrupt fight promoter scheme to build up Blue as a potential champion, 
  with the goal of betting against him when they force him to take a dive in a champion fight. 
  Lee conspires to hire Fredi, an old friend of Blue and an escaped convict hiding from the law, 
  to be his sweetheart and to control him for Lee and her partners.`;
  const handleSelect = () => {
    if (highlight.person) {
      const text = window.getSelection().toString();
      dispatch({
        type: "PERSON",
        payload: {
          personData: text === "" ? null : text,
          person: text === "" ? null : "person",
        },
      });
    }
    if (highlight.org) {
      const text = window.getSelection().toString();
      dispatch({
        type: "ORG",
        payload: {
          orgData: text === "" ? null : text,
          org: text === "" ? null : "org",
        },
      });
    }
  };
  return (
    <div className=" border border-dark">
      <div className="d-flex p-2" style={{ backgroundColor: "blue" }}>
        <button
          className="btn btn-light mx-3 px-4 text-dark border border-light"
          id="person"
          onClick={(e) => {
            dispatch(handleHighlight(e.target.id));
          }}
        >
          PERSON
        </button>
        <button
          className="btn btn-light   mx-3 px-3 text-dark border border-light"
          id="org"
          onClick={(e) => {
            dispatch(handleHighlight(e.target.id));
          }}
        >
          ORG
        </button>
      </div>
      <div className="p-3 m-3">
        <Highlighter
          onMouseUp={handleSelect}
          highlightClassName="YourHighlightClass"
          searchWords={personData.personText}
          autoEscape={true}
          textToHighlight={string}
        />
      </div>
    </div>
  );
};

export default ParaGraph;
