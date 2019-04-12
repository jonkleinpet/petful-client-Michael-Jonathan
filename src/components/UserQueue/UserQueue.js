import React from "react";

export default function UserQueue(props) {
  const { users } = props;
  const userQueue = users.map((user, i) => {
    return (
      <li>
        {user.name}
      </li>
    )
  })

  return(
    <div className="queue">
      <h3>Queue</h3>
      <ul>{userQueue}</ul>
    </div>
  )
}
