import moment from 'moment';
import {   useEffect, useState } from 'react';
import  axios  from 'axios';
import './App.css'
import Title from './components/Title';
import ImageProfile from './components/ImageProfile';

const enpoint = 'https://sheetdb.io/api/v1/rjnu11gpps65s';

const  App = () => {

  const [hide, setHide] = useState(false);
  const [data, setdata] = useState([]);

  const callAPi = async () =>{
    return axios.get(enpoint).then((response) => {
      const data = response.data
      setdata(data)
    })
  }
  console.log(data)

  useEffect( () =>{
    callAPi()
  }, [])
  
  return (
    <>
      <div className="main">
        <div className="leftPort">
          <ImageProfile images="src/assets/432677838_748008660878563_7541377625379769848_n.jpg" />

          <Title title="นางสาวปวีณา เหตุทอง">
            <p>FullStack</p>
          </Title>


          <Title title="Contract">
            <p>{moment("2045/01/14").format("DD/MM/YYYY")}</p>

            <p style={{ display: hide ? 'none' : 'block' }}>tel: 096-025-9314</p>
            <button onClick={() => setHide(!hide)}>{hide ? 'show' : 'hide'}</button>
            <p>Email: ruspaweena14@gmail.com</p>
          </Title>

        </div>

      


        <div className="rightPort">

          <Title title="workExpreience">
            <p>ที่ว่าการอำเภอตะโหมด จังหวัดพัทลุง กลุ่มงานบริหารการปกครอง</p>
          </Title>

          <Title title="skill">
              <p>การใช้โปรเเกรม</p>
            <ul>
              <li>micresoft office</li>
              <li>canva</li>
              <li>blender</li>
              <li>maya</li>
              <li>photoshop</li>
            </ul>
          </Title>

          <Title title="eduction">
            <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ  GPA3.82</p>
            <p>มหาลัยราชภัฏสวนสุนันทา</p>
          </Title>


        </div>
      </div>

      <div className="tables">
        <h2>ข้อมูลคนในห้อง</h2>
          {data.map((record) => 
          <div key={record.code}>

               {record.code}
              {record.name}
           </div>
           )}
      </div>
    </>
  )
}


export default App