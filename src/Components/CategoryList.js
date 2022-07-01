import React, { useEffect, useState} from "react"
import axios from 'axios';
import Table from '../Components/Table';
import EmployeeService from '../services/DCandidateservices';
import '../CSS/appglobal.css';
import ReactPaginate from 'react-paginate';
import { Input } from "reactstrap";

export default function Categorylist()
 {

    const PER_PAGE =5;
    const [currentPage, setcurrentPage]= useState(0);
    const [business, setBusiness]= useState([]);
    const [filteredData, setFilteredData]= useState([]);
    const [message, setMessage] = useState('');
    const [filterString, setfilterString] = useState('');

    useEffect(() =>  {
    fetchData();
},[]);

function fetchData(){
  setMessage('');
    EmployeeService.getCandidates()
    .then((response) => {
        setBusiness(response.data);
    })
    .catch((error) => {
      if (error.response.statusText == 'Unauthorized' & 
      error.response.status== "401" ){
       setMessage('You are not authorised to view data.');
      }
      else
      {
        setMessage('Someting wrong-getCandudates api');
      }
    });
}

function searchData() {
  console.log(filterString);
  if(filterString != null && filterString != '')
  {
    setBusiness(business.filter(data => data.fullName === filterString));
  }
   else
   {
    setfilterString('');
    fetchData();
   }
}

function handlePageClick({selected: selectedPage}){
 setcurrentPage(selectedPage);
}

const offset = currentPage * PER_PAGE;

const currentPageData = business
        .slice(offset, offset + PER_PAGE)
        .map(function(object, i){
            return <Table obj={object} key={i} />;
        });

const pageCount = Math.ceil(business.length / PER_PAGE);

    function tabRow() {
        return business.map(function(object, i){
            return <Table obj={object} key={i} />;
        });
      }

        return (
          <div>
            <h4 align="center">Candidate List</h4>
              <div>
                <span>Filter by Name</span>
                 <input type='text' name="fullName" onChange={(e) => setfilterString(e.target.value)} value={filterString} placeholder="Search full name" />
                 <button onClick={searchData}>
                  <span>Search</span>
                </button>
              </div>
            <table className="table table-striped" style={{ marginTop: 10 }}>
              <thead>
                <tr>
                <th>Candidate Id</th>
                  <th>Full Name</th>
                  <th>Mobile</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Blood Group</th>
                  <th>Address</th>
                  <th colSpan="4">Action</th>
                </tr>
              </thead>
              <tbody>
              {currentPageData}
              </tbody>
            </table>
            <ReactPaginate
              previousLabel={"← Previous"}
              nextLabel={"Next →"}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              previousLinkClassName={"pagination__link"}
              nextLinkClassName={"pagination__link"}
              disabledClassName={"pagination__link--disabled"}
              activeClassName={"pagination__link--active"}
           />
           <span>{message}</span>
          </div>
        );
 }

