import React, { useState , useEffect } from 'react';
import injectSheet from 'react-jss'
import classNames from 'classnames';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import logo from '../../logo.svg'
const PriceTable = (props) => {

    const {  classes , rowIndex } = props;
    const {navDesign , navTab , titleTextDesign } = classes;
    const [students, setMStudents] = useState([
        { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
        { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
        { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
        { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
     ]);

     const renderTableData = (
         students.map((student, index) => {
           const { id, name, age, email } = student //destructuring
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{name}</td>
                 <td>{age}</td>
                 <td>{email}</td>
              </tr>
           )
           })
     )

    const priceTable = (
        <div>
            <h1 id='title'>React Dynamic Table</h1>
            <table id='students'>
               <tbody>
                  {renderTableData}
               </tbody>
            </table>
         </div>
    )

    return <>{priceTable}</>;

};

const jssStyles = {

};

export default injectSheet(jssStyles)(PriceTable);