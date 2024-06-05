import { useEffect } from "react";
import { DataTable, FiltersContainner, Header, SelectFilters } from "./styles";

function App() {
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    fetch(`https://fiap-3sis-gs-20241.azurewebsites.net`)
      .then((response) => response.json())
      .then((data) => {
        const apiData = data.data;
        console.log(apiData);
      });
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
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          {/* {data.length > 0 && data.map( (item) => (
            <tbody>
              <tr>
                <td>{item.}</td>
                <td>{item.}</td>
                <td>{item.}</td>
                <td>{item.}</td>
              </tr>
            </tbody>
          ))     
          } */}
        </table>
      </DataTable>
    </>
  );
}

export default App;
