import { dbService, storageService } from "fbase";
import React, { useState } from "react";

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
    <div>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Edit your lweet"
              value={newLweet}
              required
              onChange={onChange}
            />
            <input type="submit" value="Update Lweet" />
          </form>
          <button onClick={toggleEditing}>Cancel</button>
        </>
      ) : (
        <>
          <h4>{lweetObj.text}</h4>
          {lweetObj.attachmentUrl && (
            <img
              src={lweetObj.attachmentUrl}
              width="50px"
              height="50px"
              alt=""
            />
          )}
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>Delete Nweet</button>
              <button onClick={toggleEditing}>Edit Nweet</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Lweet;
