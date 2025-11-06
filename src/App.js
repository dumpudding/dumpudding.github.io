function MyButton() {
  return (
    <button>
      Push me to do nothing!
    </button>
  );
}

// second button
function MyButton2() {
  return (
    <button>
      werp.
    </button>
  );
}

export default function MyApp() {
  return (
    // Source - https://stackoverflow.com/questions/52284288/how-to-vertically-and-horizontally-center-a-component-in-react
// Posted by asdf1234
// Retrieved 2025-11-05, License - CC BY-SA 4.0

<div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    }}>
      <h1>Under Construction! :)</h1>
      <MyButton /> 
      <MyButton2 />
      <br></br> {/* why doesnt this newline*/}
      <body>Just testing stuffs.</body>
    </div>
);
}

