import Card from './Card'
import { useEffect, useState } from 'react';
import axios from 'axios';
import atatus from 'atatus-nodejs/start'



function App() {
  const [response, setResponse] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json')
      .then(function (res) {
        var data = res.data;
        setResponse(data.map(el => el))
      })

atatus.startMonitor({
    licenseKey: "lic_apm_bcc28f9e4d3c43c0a695ae69ddf93955",
    appName: "stack11",
    analytics: true,
    captureBody: 'all'
  });
  }, []);

  useEffect(() => {
    setData(response);
  }, [response])

  function filter(value) {
    if (value === "") {
      setData(response);
    }
    else {
      setData(response.filter(el => {
        var str = el.name.toLowerCase();
        return str.startsWith(value.toLowerCase());
      }))
    }
  }


  return (
    <div className="app">
      <div className="container app-header">
        <form>
          <div className="form-group mt-3">
            <input type="text" placeholder="Search names" class="form-control" onChange={(e) => filter(e.target.value)} />
          </div>
        </form>
      </div>

      <div className="container bg-light">
        <div className="row">
          {data.map(el => <Card data={el} />)}
        </div>
      </div>

    </div>
  );
}

export default App;
