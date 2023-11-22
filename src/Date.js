import { useEffect, useState } from "react";
import { fetchData } from "./services";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

// import primereact
const Date = () => {
    const [start, setStart] = useState();
    const [end, setEnd] = useState();
    const [data, setData] = useState()

    const findAllDates = () => {
        fetchData().then(
            res => {
                console.log(data);
                let dates = JSON.parse(res.data)
                setData(dates) 
            }
        )
    }
    const parashot = () => {
        fetchData().then(
            res => {
                let dates = JSON.parse(res.data)
                dates = dates.map(d => {return d.className === 'parashat'})
                setData(dates)
                console.log(dates);
            }
        )
    }
    const fetchData = async () => {
        if (start !== null && end !== null && start < end) {
            let myData = await fetch(`http://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&mf=on&ss=on&lg=he&s=on&start=${start}&end=${end}`)
                .then(response => response.text())
                .then(result => (result))
                .catch(error => console.log('error', error));

            return new Promise((resolve, reject) => {
                resolve({ data: myData });
            });
        }
        else { console.log("error, try again") }
    }

    let dates =
        data && data.map((d) => {
            return (<div>
                <h4>{d.title}</h4>
                <h4>{d.description}</h4>
                <h4>{d.start}</h4>
            </div>)
        })
    useEffect(() => {
        fetchData()
    }, [start, end]);
    return (
        <>
            <h1>Enter two dates</h1>
            <br></br>
            <input placeholder="Enter start date" onBlur={(e) => setStart(e.target.value)}></input>
            <input placeholder="Enter end date" onBlur={(e) => setEnd(e.target.value)}></input>
            <button onClick={findAllDates}>find all dates</button>
            <button onClick={parashot}>parashot only</button>
            {dates}
        </>);
};
export default Date;
//http://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&mf=on&ss=on&lg=he&s=on&start=2023-06-25&end=2023-08-06