import React, { useState } from 'react'
import Student from './models/student';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import DetailsModel from './DetailsModel';

const studentsInfo = [
  new Student(1,'Rosita','1981-05-03','Sweden','Visland'),
  new Student(2,'Natalia','1985-06-03','Sweden','Malmö'),
  new Student(3,'Basel','1991-09-03','Sweden','Alvesta')
]

const DataTable: React.FC = () => {

  const [student,setStudent] = useState<Student | null>(null);

  const showDetailsHandler = function(id:number){

    const currentStudent = studentsInfo.find(s => s.id === id) || null;
    setStudent(currentStudent);
  }



  return (
    <>
      {student && <DetailsModel student={student} onHide={() => setStudent(null)} />}
      <table className='table table-striped container'>
        <TableHeader />
        <tbody>
        {studentsInfo.map(student => 
          <TableRow key={student.id} student={student} onShowDetails={showDetailsHandler} />
          )}

        </tbody>
      </table>
    </>
  )
}

export default DataTable