import { useEffect, useState } from "react";
import { Buttons, ButtonsDiv, DataTable, FiltersContainner, Header, SelectFilters, TData, TableBody } from "./styles";

function App() {

  const [data, setData] = useState<[]>([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    fetch(`https://fiap-3sis-gs-20241.azurewebsites.net/OceanData?pagina=${page}&qtde=20`)
      .then((response) => response.json())
      .then((data) => {
        const apiData = data;
        setData(data)
        console.log(apiData);
      });
  }

  function nextPage(){
    setPage(page+1)
    console.log(page)
  }

  function lastPage(){
    if (page < 1){
      return
    }

    setPage(page-1)
    console.log(page)
  }

  return (
    <>
      <Header>
        <a href="">Oceanic Explorer</a>
        <a href="">Home</a>
        <a href="">Ocean Conditions</a>
        <a href="">Endagered Conservation</a>
        <a href="">Projects</a>
      </Header>
      <FiltersContainner>
        <h2>Filters</h2>
        <SelectFilters>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </SelectFilters>
        <div>
          <button>Search</button>
        </div>
      </FiltersContainner>
      <DataTable>
          <thead>
            <tr>
              <th>Região</th>
              <th>pH</th>
              <th>Temperatura da Água</th>
              <th>Poluição</th>
              <th>Nome Especies</th>
              <th>Status Especies</th>
            </tr>
          </thead>
          {data.length > 0 && data.map( (item : any) => (


            <TableBody>
              <tr>
                <TData>{item.regiao}</TData>
                <TData>{item.pH}</TData>
                <TData>{item.temperaturaAgua}</TData>
                <TData>{item.nivelPoluicao}</TData>
                <TData>{item.especies.map((x : any) => x.nome + " | ")}</TData>
                <TData>{item.especies.map((x : any) => x.status + " | ")}</TData> 
              </tr>
            </TableBody>
          ))}
      </DataTable>
      <ButtonsDiv>
        <Buttons onClick={lastPage}>Voltar página</Buttons>
        <Buttons onClick={nextPage}>próxima página</Buttons>
      </ButtonsDiv>
    </>
  );
}

export default App;
