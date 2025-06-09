import React from "react";
import { useState } from "react";
import "./App";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const App = () => {
   const [modalIsOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({
    name: "",
    number: "",
  });
  const [data2, setData2] = useState({
    name: "",
    number: "",
  });

  const [editContact, setEditContact] = useState(null)
  const openModal =()=>{
     setIsOpen(true);
  }

  const closeModal=()=>{
     setIsOpen(false);
  }

  const [contact, setContact] = useState([]);
  const [error, setError] = useState({
    name: "",
    number: "",
  });
  const [counter, setCounter] = useState(1);

  const handleChange = (e) => {
    const value = e.target.value;
    const fieldName = e.target.id;
    setData({ ...data, [fieldName]: value });
  };

  const handleReset = () => {
    setData({
      name: "",
      number: "",
    });
  };
  const validateData = () => {
    const { name, number } = data;
    let status = true;
    if (!name) {
      setError((prevState) => ({ ...prevState, name: "enter the valid name" }));
      status = false;
    } else {
      setError((prevState) => ({ ...prevState, name: "" }));
    }
    if (!number) {
      setError((prevState) => ({
        ...prevState,
        number: "enter the valid number",
      }));
      status = false;
    } else {
      setError((prevState) => ({ ...prevState, number: "" }));
    }
    return status;
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (validateData()) {
      setContact((prevState) => [...prevState, { ...data, id: counter }]);
      setCounter((prevCounter) => prevCounter + 1);

      handleReset();
    }
    console.log("Button triggered");
  };

  const handleDelete = (itemToDelete) => {
    const isConfirm = window.confirm("Are you sure?");

    if (!isConfirm) {
      return;
    }
    setContact(contact.filter((item) => item !== itemToDelete));
  };

  // const handleEdit=(itemToEdit)=>{

  // }

  const handleUpdate=(e)=>{
    e.preventDefault();
    const updatedContact = contact.map((item,index)=>{
      item.id === editContact.id?{...item, ...data2}:item
    })
    setContact(updatedContact)
  }

  return (
    <div className="Contact-container">


    <div className="modal">
        <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form>
          <div className="name">
            <label htmlFor="name" type="text">
              Contact Name
            </label>
            <input
              id="name"
              type="text"
              value={data.name}
              onChange={handleChange}
            ></input>
            {error.name && <div>{error.name}</div>}
          </div>
          <div className="number">
            <label htmlFor="number" type="text">
              Contact Number
            </label>
            <input
              id="number"
              type="tel"
              value={data.number}
              onChange={handleChange}
            ></input>
            {error.number && <div>{error.number}</div>}
          </div>

          <button className="save-btn" onClick={handleUpdate}>
    
            Save
          </button>
        </form>
      </Modal>
    </div>


      <div className="input-container">
        <form>
          <div className="name">
            <label htmlFor="name" type="text">
              Contact Name
            </label>
            <input
              id="name"
              type="text"
              value={data.name}
              onChange={handleChange}
            ></input>
            {error.name && <div>{error.name}</div>}
          </div>
          <div className="number">
            <label htmlFor="number" type="text">
              Contact Number
            </label>
            <input
              id="number"
              type="tel"
              value={data.number}
              onChange={handleChange}
            ></input>
            {error.number && <div>{error.number}</div>}
          </div>

          <button className="add-btn" onClick={handleClick}>
    
            Add
          </button>
        </form>
      </div>

      <div className="data-container">
        {contact.map((item, index) => (
          <div key={index} className="card">
            <div>{item.name}</div>
            <div>{item.number}</div>
            <div className="btn11">
            <button className="delete-button" onClick={()=>handleDelete(item)}>
              Del
            </button>
            <button className="edit" onClick={openModal}>edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
