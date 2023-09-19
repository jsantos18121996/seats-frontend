
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from "react-data-table-component";

const data = [
    {
        "plantaId": "T01-1-1",
        "terrainCode": "T01",
        "periodCode": "2022-1",
        "fechaAnalisis": "2022-02-10",
        "agricultor": "Juan Pablo",
        "resultadoCode": "A"        
    },
    {
        "plantaId": "T01-1-1",
        "terrainCode": "T01",
        "periodCode": "2022-2",
        "fechaAnalisis": "2022-09-10",
        "agricultor": "Pedro Quispe",
        "resultadoCode": "A"       
    },
    {
        "plantaId": "T01-1-1",
        "terrainCode": "T01",
        "periodCode": "2023-1",
        "fechaAnalisis": "2023-02-12",
        "agricultor": "Alex Lora",
        "resultadoCode": "A"      
    }
]

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

export default function TreeDatatable() {
    return <DataTable data={data} columns={columns} />
}