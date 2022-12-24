import React from 'react'
import "./JabberBox.css"
import {Button, Input } from "@material-ui/core"

function JabberBox() {
  return (
    <div className="jabberBox">
      <form>
        <div className="jabberBox__input">
          <Input placeholder="Whats happening?" type="text" />
        </div>
        <Input
          className="jabberBox_imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button className="jabberBox_jabberButton">Jabber</Button>
      </form>
    </div>
  );
}

export default JabberBox