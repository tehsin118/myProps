import React from "react";
import "./message.scss";
const AdminMessage = () => {
  return (
    <div>
      <section className="admin-message">
        <div className="admin-message-content">
          <div className="row">
            <div className="col-6 left">
              <h1>Admin message</h1>
            </div>
            <div className="col-6 right"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminMessage;
