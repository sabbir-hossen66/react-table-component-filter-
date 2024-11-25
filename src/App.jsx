import DataTable from "react-data-table-component"
import { data } from "./assets/data"
import { useState } from "react"

function App() {

  const columns = [
    {
      name: 'Age',
      selector: row => row.age,
      sortable: true

    },
    {
      name: 'City',
      selector: row => row.city
    },
    {
      name: 'Name',
      selector: row => row.name
    }
  ]

  const [record, setRecord] = useState(data)

  const handleChange = (e) => {
    let query = e.target.value.toLowerCase();
    const newRecords = data.filter(item => item.age > query || item.name.toLowerCase().includes(query))
    setRecord(newRecords)
  }

  return (
    <>
      <h2>hello react</h2>
      <input className="border" type="number || text" placeholder="search here" onChange={handleChange} />
      <DataTable columns={columns} data={record} pagination></DataTable>
    </>
  )
}

export default App
