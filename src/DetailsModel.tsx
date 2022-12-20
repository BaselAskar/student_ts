import React from 'react'
import Student from './models/student';
import styles from './DetailsModel.module.scss';

interface Props {
  student:Student
  onHide:() => void
}


const DetailsModel: React.FC<Props> = props => {
  return (
    <>
      <div className={styles.background}></div>
          <div className={styles.model}>
          <h2 className='bg-info text-light p-3'>Student Information</h2>

          <h4 className='p-3'>{props.student.country + ' ' + props.student.city}</h4>

          <div className='d-flex gap-3 px-3 py-2'>
            <strong>Id: </strong>
            <span>{props.student.id}</span>
          </div>
          <div className='d-flex gap-3 px-3 py-2'>
            <strong>Name: </strong>
            <span>{props.student.name}</span>
          </div>

          <div className='d-flex gap-3 px-3 py-2'>
            <strong>BirthDay: </strong>
            <span>{props.student.birthDay}</span>
          </div>


          <button className='btn btn-outline-info m-3' onClick={props.onHide}>Hide</button>

        </div>
    </>
  )
}

export default DetailsModel;