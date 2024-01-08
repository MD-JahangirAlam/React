import { useEffect, useState } from "react";
import UserValueApi from "../Hooks/AuthUserValueProvaider";
import { useNavigate } from "react-router-dom";




 function About() {

  const eidtLocation = useNavigate()

  // for get user value api context
  const {userValue} = UserValueApi()

  const EditPage = id =>{
    eidtLocation(`/about/${id}`)
  }
  return (
    <main className="about-content">
        <div className="about-header">
          {userValue.length ? (
            <>
                {/* <h2>you know about us</h2>
                <p>our team discription here you know that</p>
                <button className="about-btn">our service</button> */}
                <h1>all user list</h1>
                {/* <ul className="userlist">

                  {userValue.length ? (userValue.map((allValue, index) => {
                    return <li key={index} className="user-items">{allValue.userEmail}</li>
                  })): <h1>Loding...</h1>}
                </ul> */}
                <table className="user-table">
                  <tr>
                    <th>id</th>
                    <th>email</th>
                    <th>name</th>
                    <th>edit</th>
                  </tr>
                  {
                    userValue.map((allValue, index) =>{
                      return(
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{allValue.userEmail}</td>
                          <td>{allValue.userName}</td>
                          <td>
                            <button onClick={() => EditPage(allValue._id)} className="edit-btn">edit</button>
                            <button className="delete-btn">delete</button>
                          </td>
                        </tr>
                      )
                    })
                  }
                  
                </table>

                </>

            ) : (<h1> Loding... </h1>)}
        </div>
    </main>
  )
}

export default About