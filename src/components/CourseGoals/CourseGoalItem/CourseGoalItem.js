import React from "react";
import styled from "styled-components";

const ListItems = styled.li`
  margin: 1rem 0;
  background: #8b005d;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  color: white;
  padding: 1rem 2rem;
  cursor: pointer;
`;

const CourseGoalItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return <ListItems onClick={deleteHandler}>{props.children}</ListItems>;
};

export default CourseGoalItem;
