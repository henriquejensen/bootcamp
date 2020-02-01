const PRIMARY_COLOR = "primary";
const SECONDARY_COLOR = "secondary";

function Alert(props) {
  return (
    <div className={`alert alert-${props.color}`} role="alert">
      {props.message}
    </div>
  );
}

function Button(props) {
  return (
    <button type="button" className={`btn btn-${props.color}`}>
      {props.title}
    </button>
  );
}

function App() {
  return (
    <div>
      <Alert message="Secondary" color={SECONDARY_COLOR} />
      <Alert message="Primary" color={PRIMARY_COLOR} />
      <Button title="Click me" color={SECONDARY_COLOR} />
      <Card />
      <Form />
      <Nav />
      <ListGroup />
      <Spinner />
      <Table />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
