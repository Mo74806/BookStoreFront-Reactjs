import React from "react";
import classes from "./ProfilePicture.module.css";
export default function ProfilePicture(props) {
  return (
    <div
      className={`${classes["profile-picture"]}`}
      style={{
        width: (props.width || 98) + 25,
        height: (props.height || 98) + 25,
      }}
    >
      <img
        style={{ width: props.width || 98, height: props.height || 98 }}
        src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
      />
    </div>
  );
}
