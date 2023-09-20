
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from "react-data-table-component";

const columns = [
    {
        name: "Periodo",
        selector: row => row.periodCode,
        sortable: true
    },
    {
        name: "Fecha",
        selector: row => row.fechaAnalisis,
        sortable: true
    },
    {
        name: "Agricultor",
        selector: row => row.agricultor,
        sortable: true
    },
    {
        name: "Resultado",
        selector: row => row.resultadoCode === "A" ? "Sano" : (row.resultadoCode === "T" ? "Enfermo" : "No determinado"),
        sortable: true,
        conditionalCellStyles: [
            {
                when: row => row.resultadoCode === "A",
                style: {
                    color: 'green'
                },
            },
            {
                when: row => row.resultadoCode === "T",
                style: {
                    color: 'red'
                },
            },
            {
                when: row => row.resultadoCode === "ND",
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