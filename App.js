import './App.css';

function App() {
  return (
    <div className="App">
      <div className="body_container"><br></br>
         <table className="table_container">
          <thead>
            <tr>
              <th>Event Id</th>
              <th>Event Title</th>
              <th>Event Location</th>
              <th>Date/Time</th>
              <th>Option</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Event#03</td>
              <td>Birthday of Rahul</td>
              <td>Pune</td>
              <td>22/07/2023<br></br>04:50pm</td>
              <td><button>UPDATE</button><button>UPDATE</button></td>

            </tr>
            <tr>
            <td>Event#04</td>
              <td>Wedding</td>
              <td>Mumbai</td>
              <td>25/07/2023<br></br>02:25pm</td>
              <td><button>UPDATE</button><button>UPDATE</button></td>

            </tr>
            <tr>
            <td>Event#03</td>
              <td>Birthday of Rahul</td>
              <td>Pune</td>
              <td>22/07/2023<br></br>04:50pm</td>
              <td><button>UPDATE</button><button>UPDATE</button></td>

            </tr>
            <tr>
            <td>Event#04</td>
              <td>Wedding</td>
              <td>Mumbai</td>
              <td>25/07/2023<br></br>02:25pm</td>
              <td><button>UPDATE</button><button>UPDATE</button></td>

            </tr>

          </tbody>
         </table>
      </div>
    </div>
  );
}

export default App;