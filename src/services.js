// const fetchData = async () => {
//     if (start !== null && end !== null && start < end) {
//         let myData = await fetch(`http://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&mf=on&ss=on&lg=he&s=on&start=${start}&end=${end}`)
//             // .then(res => res.json())
//             // .then(data => setData(data), console.log("data", data))
//             // .catch(error => console.log('error', error))
//             .then(response => response.text())
//             .then(result => (result))
//             .catch(error => console.log('error', error));

//         return new Promise((resolve, reject) => {
//             resolve({ data: myData });
//         });
//     }
//     else { console.log("error, try again") }
// }