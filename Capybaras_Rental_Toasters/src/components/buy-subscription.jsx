import React, { useState } from 'react';

function BuyPopUp() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      {showPopup && (
        <div>
          <h1>Das ist das Popup</h1>
          <button onClick={() => setShowPopup(false)}>Schließen</button>
        </div>
      )}
      <button onClick={() => setShowPopup(true)}>Öffnen</button>
    </div>
  );
}
