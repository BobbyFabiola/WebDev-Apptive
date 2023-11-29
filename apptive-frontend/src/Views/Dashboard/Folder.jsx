// Inside Folder.jsx
import React, { useState } from "react";

const Folder = ({
    folderId,
    folderName,
  description,
  favorited,
  noOfNotes,
  createdAt,
  modifiedAt,
  onDeleteFolder,
  onEditFolder
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newFolderName, setNewFolderName] = useState("folderName")

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDeleteClick = () => {
    onDeleteFolder(folderId);
    setIsMenuOpen(false);
  };

  const handleEditClick = () => {
    // Handle edit logic for the specific folder
setIsEditing(true);
    setIsMenuOpen(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  }

  const handleSaveChanges=()=>{
    onEditFolder(folderId, newFolderName);
    setIsEditing(false);
    setIsMenuOpen(false);
  }
  return (
    <div className="dashboard-body-folders px-4 py-2 mb-2 d-flex flex-column justify-content-between align-items-start text-left">
      {isEditing ? (
        <div className="dashboard-body-left d-flex flex-column">
          <input
            type="text"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
          />
          <div>
            <button onClick={handleSaveChanges}>Save</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </div>
        </div>
      ) : (
        <div className="dashboard-body-left d-flex flex-column">
          <h4 className="text-white mt-3 mb-0">{folderName}</h4>
          <p className="text-white">{`${noOfNotes} notes`}</p>
        </div>
      )}
      <div
        className="three-dot-menu text-white"
        style={{ cursor: "pointer" }}
        onClick={handleMenuClick}
      >
        &#8226;&#8226;&#8226;
      </div>

      {isMenuOpen && !isEditing && (
        <div className="popup" style={{ position: "fixed", bottom: 0, right: 0 }}>
          <button onClick={handleDeleteClick}>Delete</button>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  );}

export default Folder;
