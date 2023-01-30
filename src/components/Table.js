function Table({ columns, data }){

  return(
    <table className='table table-bordered rounded overflow-hidden align-middle'>
      <thead>
        <tr>
          {columns.map((column, i)=> <TableHeadItem title={column.title} key={i}/>)}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => <TableRow rowData={row} columns={columns} key={i}/>)}
      </tbody>
    </table>
  )
} export default Table;

const TableHeadItem = ({title}) => <th className='table-light' scope='col'>{title}</th>

const TableRow = ({rowData, columns}) => {
  return(
    <tr className='text-align-center'>
      {columns.map((column, i) => {
        let cellData = rowData[`${column.dataIndex}`];
        cellData = column.render ? column.render(column.dataIndex ? cellData: rowData) : cellData;

        return <td key={i}>{cellData}</td>
      })}
    </tr>
  )
}