




import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Userlist = () => {
  const [openpopup, setopenpopup] = useState(false)
  const [edit, setedit] = useState(false)
  const [users, setusers] = useState([])
  const [currentEditId, setCurrentEditId] = useState(null)
  const [addusers, setaddusers] = useState({
    firstname: "",
    lastname: "",
    email: "",
    department: "",
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        const formattedUsers = res.data.map((user) => ({
          id: user.id,
          firstname: user.name.split(" ")[0],
          lastname: user.name.split(" ")[1] || "",
          email: user.email,
          department: "CSS", 
        }))
        setusers(formattedUsers)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  const handleAddUserChange = (e) => {
    const { placeholder, value } = e.target
    const field = placeholder.toLowerCase().replace(" ", "")
    setaddusers({ ...addusers, [field]: value })
  }

  const handleedit = (id) => {
    const user = users.find((u) => u.id === id)
    if (user) {
      setaddusers({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        department: user.department,
      })
      setCurrentEditId(id)
      setedit(true)
      setopenpopup(true)
    }
  }

  const handleSave = () => {
    if (edit) {
      
      const updatedUsers = users.map((user) =>
        user.id === currentEditId
          ? { ...user, ...addusers }
          : user
      )
      setusers(updatedUsers)
    } else {
     
      const newUser = {
        id: users.length + 1, 
        ...addusers,
      }
      setusers([...users, newUser])
    }
    resetPopup()
  }

  const handleDelete = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id)
    setusers(filteredUsers)
  }

  const resetPopup = () => {
    setaddusers({
      firstname: "",
      lastname: "",
      email: "",
      department: "",
    })
    setopenpopup(false)
    setedit(false)
    setCurrentEditId(null)
  }

  return (
    <div className="userhead">
      <div className="userbody">
        <h1>User List :-</h1>
        <div className="usertable">
          <table>
            <thead>
              <tr>
                <td>ID</td>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Email</td>
                <td>Department</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.department}</td>
                  <td>
                    <button onClick={() => handleedit(user.id)}>Edit</button>
                    <button onClick={() => handleDelete(user.id)}>Del</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="useradd">
        <button
          onClick={() => {
            setopenpopup(true)
            setedit(false)
          }}
        >
          Add item
        </button>
      </div>
      {openpopup && (
        <div className="useraddandupdate">
          <div className="userdetials">
            <div className="userinput">
              <input
                type="text"
                placeholder="First Name"
                value={addusers.firstname}
                onChange={handleAddUserChange}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={addusers.lastname}
                onChange={handleAddUserChange}
              />
              <input
                type="text"
                placeholder="Email"
                value={addusers.email}
                onChange={handleAddUserChange}
              />
              <input
                type="text"
                placeholder="Department"
                value={addusers.department}
                onChange={handleAddUserChange}
              />
            </div>
            <div className="userbutton">
              <button onClick={resetPopup}>Cancel</button>
              <button onClick={handleSave}>{edit ? "Edit" : "Add"}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Userlist
