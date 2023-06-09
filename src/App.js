import './App.scss';
import testImg from './assets/image.png'
import chartImg from './assets/chart.png'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['','','',''];

export const data = {
  labels,
  datasets: [
    {
      label: 'CPU',
      data: [0,40,38,40],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'RAM',
      data: [0,3,5,0],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

function App() {
  const chartData = {
    labels: "123",
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };
  return (
    <div className="App">
      <div className='row one'>
        <div className='col'>
          <img src={testImg} />
        </div>
        <div className='col chart'>
          <div className='title'>
            Memory/CPU
          </div>
          <div className='content'>
            {/* <img src={chartImg} /> */}
            <Line options={options} data={data} />
          </div>
        </div>
        <div className='col volumes'>
          <div className='title'>
            Volumes
          </div>
          <div className='content'>
            <span>
              C:\
            </span>
            <div className='bar'>
              <span className='progress-bar'></span>
            </div>
          </div>
        </div>
      </div>
      <div className='row two'>
        <div className='col agent'>
        <div className='title'>
            Agent Procedures
            <span>
              +
            </span>
          </div>
          <div className='content'>
            <div className='agent-row'>
              <span>Send Message if Logged On</span>
              <span>*</span>
            </div>
            <div className='agent-row'>
              <span>Send Message if Logged On</span>
              <span>*</span>
            </div>
            <div className='agent-row'>
              <span>Send Message if Logged On</span>
              <span>*</span>
            </div>
            <div className='agent-row'>
              <span>Send Message if Logged On</span>
              <span>*</span>
            </div>
            <div className='agent-row'>
              <span>Send Message if Logged On</span>
              <span>*</span>
            </div>
          </div>
          <div className='bottom'>
            <input type='checkbox'>
            </input>
            <span>
              Ask Before Executing
            </span>
          </div>
        </div>
        <div className='col process'>
          <div className='title'>
            Top 5 Processes
            <span>
              CPU
            </span>
          </div>
          <div className='content'>
            <div className='process-row'>
              <span>PID</span>
              <span>Process Name</span>
              <span>CPU%</span>
              <span>Memory</span>
              <span>user</span>
            </div>
            <div className='process-row'>
              <span>1736</span>
              <span>winvnc4.exe</span>
              <span>0.0%</span>
              <span>1.59MB</span>
              <span>BULITIN\Administrators</span>
            </div>
            <div className='process-row'>
              <span>1736</span>
              <span>winvnc4.exe</span>
              <span>0.0%</span>
              <span>1.59MB</span>
              <span>BULITIN\Administrators</span>
            </div>
            <div className='process-row'>
              <span>1736</span>
              <span>winvnc4.exe</span>
              <span>0.0%</span>
              <span>1.59MB</span>
              <span>BULITIN\Administrators</span>
            </div>
            <div className='process-row'>
              <span>1736</span>
              <span>winvnc4.exe</span>
              <span>0.0%</span>
              <span>1.59MB</span>
              <span>BULITIN\Administrators</span>
            </div>
          </div>
        </div>
      </div>
      <div className='row three'>
      <div className='col user-info'>
        <div className='title'>
            User Info
          </div>
          <div className='content'>
            <div className='process-row'>
              <span>Current User</span>
            </div>
            <div className='process-row'>
              <span>Current User</span>
            </div>
            <div className='process-row'>
              <span>Current User</span>
            </div>
          </div>
        </div>
        <div className='col events'>
          <div className='title'>
            Last 5 System Events
          </div>
          <div className='content'>
            <div className='events-row'>
              <span>Info</span>
              <span>2016-04-15T23:16:20:000Z</span>
              <span>Application Experience running</span>
            </div>
            <div className='events-row'>
              <span>Info</span>
              <span>2016-04-15T23:16:20:000Z</span>
              <span>Application Experience running</span>
            </div>
            <div className='events-row'>
              <span>Info</span>
              <span>2016-04-15T23:16:20:000Z</span>
              <span>Application Experience running</span>
            </div>
            <div className='events-row'>
              <span>Info</span>
              <span>2016-04-15T23:16:20:000Z</span>
              <span>Application Experience running</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
