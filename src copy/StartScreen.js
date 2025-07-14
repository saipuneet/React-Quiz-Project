function StartScreen({ questions, dispatch }) {
  const onClick = () => dispatch({ type: "start" });
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{questions} question to test your React mastery</h3>
      <button className="btn btn-ui" onClick={onClick}>
        Let Start
      </button>
    </div>
  );
}

export default StartScreen;
