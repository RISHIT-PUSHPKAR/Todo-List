// import styles from "./HeaderSection.module.css";
import { v4 as uuidv4 } from "uuid";

const HeaderSection = ({
  editTodo,
  setEditTodo,
  setChangeBtnText,
  changeBtnText,
  input,
  setInput,
  todoList,
  setTodoList,
}) => {
  const inputHandler = (e) => setInput(e.target.value);
  console.log(editTodo);
  const submitHandler = (event) => {
    event.preventDefault();
    if (changeBtnText === false) {
      setTodoList((preTodo) => {
        return [
          {
            id: uuidv4(),
            title: input,
            checked: false,
            edit: setEditTodo(false),
          },
          ...preTodo,
        ];
      });
    } else {
      setTodoList(
        todoList.map((obj) => {
          if (obj.id === editTodo) {
            return { ...obj, title: input, edit: setEditTodo(true) };
          }
          return obj;
        })
      );
    }

    setInput("");
    setChangeBtnText(false);
  };

  return (
    <nav>
      <div className="container p-5 ">
        <div className="row flex-lg-row flex-column align-items-center">
          <div className="col col-3">
            <h1 className="display-2 fw-medium pb-3">todo</h1>
          </div>

          <form
            onSubmit={submitHandler}
            className="col d-flex justify-content-center justify-content-lg-start"
          >
            <input
              className="form-control fs-2 w-50 border-1 border-primary"
              type="text"
              placeholder=" Enter Your Todos..."
              value={input}
              onChange={inputHandler}
              required
            />
            <button
              type="submit"
              className="btn btn-primary btn-lg px-5 py-auto ms-5 fs-2"
            >
              {changeBtnText ? "Save" : "Add"}
            </button>
          </form>
        </div>
      </div>
    </nav>

    // <nav className="navbar p-5">
    //   <div className="container">
    //     <div className="navbar-brand">
    //       <h1 className="display-1 fw-medium">todo</h1>
    //     </div>
    //     <ul className="navbar-nav w-100">
    //       <li className="nav-item " style={{ width: "100%" }}>
    //         <form onSubmit={submitHandler} className=" hstack">
    //           {/* <div className="input-group "> */}
    //           <input
    //             className="form-control form-control-lg me-5 "
    //             type="text"
    //             placeholder="Enter Your Todos..."
    //             value={input}
    //             onChange={inputHandler}
    //             required
    //           />
    //           <button type="submit" className="btn btn-primary btn-lg">
    //             {changeBtnText ? "Save" : "Add"}
    //           </button>
    //           {/* </div> */}
    //         </form>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
};

export default HeaderSection;
