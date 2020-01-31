const apiProdutos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { produto: "carro", valor: 30000 },
        { produto: "bicicleta", valor: 500 },
        { produto: "moto", valor: 8000 }
      ]);
    }, 2000);
  });
};

function Title(props) {
  return <h1>{props.text}</h1>;
}

function Button(props) {
  return (
    <button
      className={`btn btn-${props.class}`}
      id={props.id}
      type={props.type}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
}

function FormGroup(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <input
        className="form-control"
        type={props.type}
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

function Table(props) {
  return (
    <table className="table" id={props.id}>
      <thead>
        <tr>
          {props.headers.map(header => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.rows.map((row, index) => (
          <tr key={index}>
            {Object.values(row).map(value => (
              <td key={value + index}>{value}</td>
            ))}
            <td>
              <Button
                class="danger"
                title="Deletar"
                id={index}
                onClick={() => props.onClickRow(index)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function FormProduto(props) {
  const [produto, setProduto] = React.useState("");
  const [valor, setValor] = React.useState(0);
  const handleProduto = event => setProduto(event.target.value);
  const handleValor = event => setValor(event.target.value);
  const handleSubmit = event => {
    event.preventDefault();
    console.log(produto, valor);
    props.onSubmit({ produto, valor });
    setProduto("");
    setValor(0);
  };
  return (
    <section className="mt-4">
      <Title text={"Insira um produto"} />
      <form id="form-produto" onSubmit={handleSubmit}>
        <FormGroup
          htmlFor="produto"
          label="Produto"
          type="text"
          name="produto"
          id="produto"
          value={produto}
          onChange={handleProduto}
        />
        <FormGroup
          htmlFor="valor"
          label="Valor"
          type="number"
          name="valor"
          id="valor"
          value={valor}
          onChange={handleValor}
        />
        <Button class="info" type="submit" title="Cadastrar" />
      </form>
    </section>
  );
}

function TableProdutos(props) {
  return (
    <section className="mt-4">
      <Title text={"Produtos cadastrados"} />
      <Button
        class="danger"
        type="submit"
        title="Deletar todos os produtos"
        id="deletar-produtos"
        onClick={props.onDeleteProdutos}
      />
      <Table
        id="produtos"
        headers={["Produto", "Valor"]}
        rows={props.produtos}
        onClickRow={props.onDeleteProduto}
      />
    </section>
  );
}

function App() {
  const [produtos, setProdutos] = React.useState([]);

  React.useEffect(() => {
    apiProdutos().then(response => setProdutos(response));
  }, []);

  const handleSubmitProduto = produto => setProdutos([...produtos, produto]);
  const handleDeleteProduto = index =>
    setProdutos(produtos.filter((_, prodIndex) => prodIndex !== index));
  const handleDeleteProdutos = () => setProdutos([]);

  return (
    <main className="container">
      <FormProduto onSubmit={handleSubmitProduto} />
      <TableProdutos
        produtos={produtos}
        onDeleteProduto={handleDeleteProduto}
        onDeleteProdutos={handleDeleteProdutos}
      />
    </main>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
