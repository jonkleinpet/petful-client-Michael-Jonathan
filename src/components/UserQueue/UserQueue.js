import React from "react";

export default function UserQueue(props) {
  const { users } = props;
  const userQueue = users.map((user, i) => {
    return (
      <div key={i}>
        {user.name}
      </div>
    )
  })
  return(
    <div className="queue">
      <h3>Queue</h3>
      {userQueue}
    </div>
  )
}
