import { dbService, storageService } from "fbase";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Lweet = ({ lweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newLweet, setNewLweet] = useState(lweetObj.text);

  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this lweet?");

    if (ok) {
      await dbService.doc(`lweets/${lweetObj.id}`).delete();
      if (lweetObj.attachmentUrl !== "") {
        await storageService.refFromURL(lweetObj.attachmentUrl).delete();
      }
    }
  };

  const toggleEditing = () => setEditing((prev) => !prev);

  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`lweets/${lweetObj.id}`).update({
      text: newLweet,
    });
    setEditing(false);
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewLweet(value);
  };

  return (
    <div className="lweet">
      {editing ? (
        <>
          <form onSubmit={onSubmit} className="container lweetEidt">
            <input
              type="text"
              placeholder="Edit your lweet"
              value={newLweet}
              required
              autoFocus
              onChange={onChange}
            />
            <input type="submit" value="Update Lweet" className="formBtn" />
          </form>
          <span onClick={toggleEditing} className="formBtn cancelBtn">
            Cancel
          </span>
        </>
      ) : (
        <>
          <h4>{lweetObj.text}</h4>
          {lweetObj.attachmentUrl && (
            <img src={lweetObj.attachmentUrl} alt="" />
          )}
          {isOwner && (
            <div className="lweet__actions">
              <span onClick={onDeleteClick}>
                <FontAwesomeIcon icon={faTrash} />
              </span>
              <span onClick={toggleEditing}>
                <FontAwesomeIcon icon={faPencilAlt} />
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Lweet;
