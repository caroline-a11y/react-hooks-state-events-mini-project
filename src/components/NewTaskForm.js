import React from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  function handleSubmit(e) {
    e.preventDefault();
    //
  // function onTaskFormSubmit(e) {
  //   e.preventDefault();
  //   //

    onTaskFormSubmit({
      text: e.target.text.value,
      category: e.target.category.value
    });
  //   alert(e.target.text.value)

    e.target.reset()
  }
  //   // onTaskFormSubmit({
  //   //   text: e.target.text.value,
  //   //   category: e.target.category.value
  //   // });

  //   // e.target.reset()
  //}

  return (
    <form className="new-task-form" onSubmit={handleSubmit} >
    <form className="new-task-form" onSubmit={(e) => {
      onTaskFormSubmit({
        text: document.getElementById("text").value,
        category: document.getElementById("category").value
      });
    }} >
      <label>
        Details
        <input type="text" name="text" required/>
        <input id="text" type="text" name="details" required/>
      </label>
      <label>
        Category
        <select name="category">
        <select id="category" name="category">
          {
            categories.map(category=>Boolean(category==='All')? null : <option key={category}>{category}</option>)
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}
export default NewTaskForm
