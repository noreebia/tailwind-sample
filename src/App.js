import logo from "./logo.svg";
import "./App.css";
import DateRangePicker from "./components/DateRangePicker";
import "react-datepicker/dist/react-datepicker.css";

// import '@themesberg/flowbite';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <div class="bg-purple-100 h-screen flex flex-col justify-center items-center"> */}
      <div class="bg-purple-100 h-screen">
        <DateRangePicker></DateRangePicker>
        <div>
          <table class="mx-auto mt-9">
            <tr>
              <th rowSpan="2">컨트랙트 이름</th>
              <th colSpan="2">입금</th>
              <th colSpan="2">출금</th>
            </tr>
            <tr>
              <th>횟수</th>
              <th>수량</th>
              <th>횟수</th>
              <th>수량</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
