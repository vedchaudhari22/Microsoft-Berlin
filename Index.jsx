<!DOCTYPE >
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Bluff Buster</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
    {/* Consent Modal */}
  <div id="termsModal" className="active">
    <div className="terms-box">
      <h2>🎤 Consent Required</h2>
      <p>
        By continuing, you agree to allow voice recording for gameplay and
        future projects.
      </p>
      <label>
        <input type="checkbox" id="termsCheck" /> I agree
      </label>
      <br />
      <br />
      <button id="startBtn">Continue</button>
    </div>
  </div>
  <h1 className="game-title">Bluff Buster</h1>
  <div className="join-container">
    <form id="joinForm">
      <input
        type="text"
        id="playerName"
        placeholder="Enter your name"
        required=""
      />
      <div className="avatar-picker">
        <label>
          <input type="radio" name="avatar" defaultValue="avatar1" />
          <img src="assets/characters/avatar1.png" className="avatar-option" />
        </label>
        <label>
          <input type="radio" name="avatar" defaultValue="avatar2" />
          <img src="assets/characters/avatar2.png" className="avatar-option" />
        </label>
        <label>
          <input type="radio" name="avatar" defaultValue="avatar3" />
          <img src="assets/characters/avatar3.png" className="avatar-option" />
        </label>
      </div>
      <button type="submit">Join Game</button>
    </form>
    <p id="playerCount" />
  </div>
  <div id="hostControls" className="hidden">
    <button id="startRoundBtn">Next Round ▶</button>
  </div>
  <div id="statementInput" className="hidden">
    <form id="statementForm">
      <input type="text" id="s1" placeholder="Statement 1" required="" />
      <input type="text" id="s2" placeholder="Statement 2" required="" />
      <input type="text" id="s3" placeholder="Statement 3" required="" />
      <p>Select the TRUE one:</p>
      <label>
        <input type="radio" name="truth" defaultValue={1} /> 1
      </label>
      <label>
        <input type="radio" name="truth" defaultValue={2} /> 2
      </label>
      <label>
        <input type="radio" name="truth" defaultValue={3} /> 3
      </label>
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
    <button id="recordBtn">🎤 Record Voice</button>
    <audio id="playback" controls="" style={{ display: "none" }} />
  </div>
  <div id="guessingUI" className="hidden">
    <h3>Guess which is TRUE:</h3>
    <ul id="statementsList" />
  </div>
  <div id="scoreboard" className="hidden">
    <h2>🏆 Scoreboard</h2>
    <ul id="scoreList" />
  </div>
</body>
</html>
