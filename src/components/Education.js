import React from "react";
import { Table } from "react-bootstrap";
import "./Education.css";
function Education()
{
    return(
        <div className="mt-4" >
            <Table striped bordered hover >
                <thead>
                    <tr>
                    <th>Degree</th>
                    <th>Institution</th>
                    <th>Year</th>
                    <th>Percentage/Grade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>B.sc Computer Science</td>
                        <td>SPPU</td>
                        <td>2025</td>
                        <td>6.75</td>
                    </tr>
                    <tr>
                        <td>HSC</td>
                        <td>Dnyanjoti High School</td>
                        <td>2022</td>
                        <td>79.17%</td>
                    </tr>
                    <tr>
                        <td>SSC</td>
                        <td>Shree Samarth English Medium School</td>
                        <td>2020</td>
                        <td>79%</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
    
}
export default Education;