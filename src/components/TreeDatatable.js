
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from "react-data-table-component";

const columns = [
    {
        name: "Periodo",
        selector: row => row.periodCode,
        sortable: true
    },
    {
        name: "Terreno",
        selector: row => row.terrainCode,
        sortable: true
    },
    {
        name: "Fecha",
        selector: row => row.dateAnalysis,
        sortable: true
    },
    {
        name: "Agricultor",
        selector: row => row.farmer,
        sortable: true
    },
    {
        name: "Resultado",
        selector: row => row.status === "A" ? "Sano" : (row.status === "T" ? "Enfermo" : "No determinado"),
        sortable: true,
        conditionalCellStyles: [
            {
                when: row => row.status === "A",
                style: {
                    color: 'green'
                },
            },
            {
                when: row => row.status === "T",
                style: {
                    color: 'red'
                },
            },
            {
                when: row => row.status === "ND",
                style: {
                    color: 'blue'
                },
            }
        ]
    }
]

export default function TreeDatatable({ data }) {
    return <DataTable data={data} columns={columns} />
}