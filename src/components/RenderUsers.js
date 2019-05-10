import React from "react";

const RenderUsers = ({ users }) => {
  console.log("these are the props", users.items);
  let f = users.items;

  let renderUsers = f.map((user,index) => {
    return (
      <div className="ui items">
        <div className="item">
          <a className="ui tiny image">
            <img src={users.items[index].owner.avatar_url} />
          </a>
          <div className="content">
            <a className="header">{users.items[index].owner.login}</a>
            <div className="description">
              <p>{users.items[index].owner.url}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <div>{renderUsers}</div>;
};

export default RenderUsers;
