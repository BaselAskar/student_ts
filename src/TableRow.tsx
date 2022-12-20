import React from 'react';
import Student from './models/student';

interface Props {
  student: Student,
  onShowDetails:(id:number) => void
}


const TableRow: React.FC<Props> = props => {
  return (
    <tr>
      <td>{props.student.id}</td>
      <td>{props.student.age}</td>
      <td><button className='btn btn-primary' onClick={props.onShowDetails.bind(this,props.student.id)}>Details</button> </td>
    </tr>
  );
}

export default TableRow;