import React from 'react'

const Userlist = () => {
  return (
    <div className='userhead'>
        <div className='userbody'>
          <h1>User List :-</h1>
          <div className='usertable'>
               <table>
                <thead>
                    <tr>
                        <td>ID</td><td>First Name</td><td>Last Name</td><td>Email</td><td>Department</td><td >Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>10</td><td>Dharani</td><td>Sankar</td><td>dharani535011@gmail.com</td><td>automobile engineering</td><td ><button>Edit</button><button>Del</button></td></tr>
                    <tr><td>10</td><td>Dharani</td><td>Sankar</td><td>dharani535011@gmail.com</td><td>automobile engineering</td><td><button>Edit</button><button>Del</button></td></tr>
                    <tr><td>10</td><td>Dharani</td><td>Sankar</td><td>dharani535011@gmail.com</td><td>automobile engineering</td><td><button>Edit</button><button>Del</button></td></tr>
                    <tr><td>10</td><td>Dharani</td><td>Sankar</td><td>dharani535011@gmail.com</td><td>automobile engineering</td><td><button>Edit</button><button>Del</button></td></tr>
                    <tr><td>10</td><td>Dharani</td><td>Sankar</td><td>dharani535011@gmail.com</td><td>automobile engineering</td><td><button>Edit</button><button>Del</button></td></tr>
                    <tr><td>10</td><td>Dharani</td><td>Sankar</td><td>dharani535011@gmail.com</td><td>automobile engineering</td><td><button>Edit</button><button>Del</button></td></tr>
                    <tr><td>10</td><td>Dharani</td><td>Sankar</td><td>dharani535011@gmail.com</td><td>automobile engineering</td><td><button>Edit</button><button>Del</button></td></tr>
                    <tr><td>10</td><td>Dharani</td><td>Sankar</td><td>dharani535011@gmail.com</td><td>automobile engineering</td><td><button>Edit</button><button>Del</button></td></tr>
                    <tr><td>10</td><td>Dharani</td><td>Sankar</td><td>dharani535011@gmail.com</td><td>automobile engineering</td><td><button>Edit</button><button>Del</button></td></tr>
                    <tr><td>10</td><td>Dharani</td><td>Sankar</td><td>dharani535011@gmail.com</td><td>automobile engineering</td><td><button>Edit</button><button>Del</button></td></tr>
                    <tr><td>10</td><td>Dharani</td><td>Sankar</td><td>dharani535011@gmail.com</td><td>automobile engineering</td><td><button>Edit</button><button>Del</button></td></tr>
                </tbody>
               </table>
          </div>
        </div>
        <div className='useradd'>
            <button>Add item</button>
        </div>

    </div>
  )
}

export default Userlist