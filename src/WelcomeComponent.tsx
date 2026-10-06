type WelcomeComponentProps = {
  onStart: () => void;
};

function WelcomeComponent({ onStart }: WelcomeComponentProps) {
  return (
    <div className="welcome-container">
      <h1>Welcome to Front END Quiz</h1>
      <button onClick={onStart}>Start Quiz</button>
    </div>
  );
}

export default WelcomeComponent;