const apiMock = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { produto: "Carro", valor: 30000 },
        { produto: "Moto", valor: 10000 }
      ]);
    }, 2000);
  });
};

function Title(props) {
  return <h1>{props.title}</h1>;
}

function Container(props) {
  return <div className="container">{props.children}</div>;
}

function Button(props) {
  return (
    <button onClick={props.onClick} type={props.type} className="btn btn-info">
      {props.title}
    </button>
  );
}

function Input(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        type={props.type}
        className="form-control"
      />
    </div>
  );
}

function Form(props) {
  return (
    <form onSubmit={props.onSubmit}>
      {props.inputs.map((input, index) => {
        return (
          <Input
            key={index}
            name={input.name}
            value={input.value}
            onChange={input.onChange}
            type={input.type}
            label={input.label}
          />
        );
      })}
      <Button type="submit" title="Cadastrar" />
    </form>
  );
}

function Table(props) {
  return (
    <span>
      <Button title="Deletar produtos" onClick={props.onClickDeleteAll} />
      <table className="table">
        <thead>
          <tr>
            {props.head.map((item, index) => {
              return <th key={index}>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {props.rows.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.produto}</td>
                <td>{item.valor}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </span>
  );
}

function App() {
  const [produto, setProduto] = React.useState("");
  const [valor, setValor] = React.useState(0);
  const [produtos, setProdutos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const handleProduto = onChangeEvent => setProduto(onChangeEvent.target.value);
  const handleValor = event => setValor(event.target.value);
  const handleSubmit = event => {
    event.preventDefault(); //não recarrega a página
    console.log("valores", produto, valor);
    const newProduto = {
      produto: produto,
      valor: valor
    };
    // setProdutos([...produtos, newProduto])
    const newProdutos = produtos.concat(newProduto);
    setProdutos(newProdutos);
  };
  const handleClickDeleteAll = () => {
    setProdutos([]);
  };

  React.useEffect(() => {
    async function getApi() {
      const response = await apiMock();
      setProdutos(response);
      setLoading(false);
    }
    getApi();
  }, []);

  React.useEffect(() => {
    if (produtos.length > 5) {
      alert("Limitado de produtos alcançado");
    }
  }, [produtos]);

  const inputs = [
    {
      label: "Produto",
      type: "text",
      value: produto,
      name: "produto",
      onChange: handleProduto
    },
    {
      label: "Valor",
      type: "number",
      value: valor,
      name: "valor",
      onChange: handleValor
    }
  ];
  const head = ["Produto", "Valor"];
  return (
    <Container>
      <section>
        <Title title="Insira um produto" />
        <Form inputs={inputs} onSubmit={handleSubmit} />
      </section>
      <section>
        <Title title="Produtos cadastrados" />
        <p>{loading ? "Loading..." : ""}</p>
        <Table
          head={head}
          rows={produtos}
          onClickDeleteAll={handleClickDeleteAll}
        />
      </section>
    </Container>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
