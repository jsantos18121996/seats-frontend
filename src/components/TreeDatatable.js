
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from "react-data-table-component";

const columns = [
    {
      name: "Periodo",
      selector:  "periodCode",
      sortable: true 
    },
    {
        name: "Fecha",
        selector:  "fechaAnalisis",
        sortable: true 
    },
    {
        name: "Agricultor",
        selector: "agricultor",
        sortable: true 
    },
    {
        name: "Resultado",
        selector: "resultadoCode",
        sortable: true 
    }
]

export default function TreeDatatable({data}) {
    return <DataTable data={data} columns={columns} />
}