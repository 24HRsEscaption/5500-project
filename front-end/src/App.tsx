import React, {useState} from 'react'
import './App.css';

import TextInput from "./components/TextInput"

import Audio from './components/Audio';


import { Bar } from 'react-chartjs-2';
// load the options file externally for better readability of the component.
// In the chartOptions object, make sure to add "dragData: true" etc.
import 'chartjs-plugin-dragdata'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart, registerables } from 'chart.js';
import 'bootstrap/dist/css/bootstrap.min.css';

Chart.register(...registerables);
Chart.register(ChartDataLabels);




class App extends React.Component<any, any>{
  constructor(props: any) {
    super(props);
    this.state = {
      speed: [1],
      pitch: [1],
      energy: [1],
      src: '',
    }
  }
  onReset() {
    console.log(this.state);
    this.setState({
      speed: [1],
      pitch: [1],
      energy: [1]
    });
  }

  async getPhones(text: string) {
    const response = await fetch("http://127.0.0.1:5000/get_phones", {
      method: "POST",
      body: JSON.stringify({
        text: text,
      }),
    });
    this.setState({
      phonemes: await response.json(),
    });
  }

  async onGenerate(text: string) {
    const response = await fetch(
      'http://localhost:5000/get_audio',
      {
        method: 'POST',
        body: JSON.stringify(
          {
            energy: this.state.energy[0],
            pitch: this.state.pitch[0],
            duration: 2 - this.state.speed[0],
            text: text
          }
        )
      }
    );
    this.setState({
      src: URL.createObjectURL(await response.blob())
    });
  }

  labels = ['Duration'];
  data = {
  labels: this.labels,
  datasets: [
    {
      label: 't',
      data: [20],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: '#3e95cd',
    },
    {
      label: 'e',
      data: [30],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: '#8e5ea2',
    },
    {
      label: 's',
      data: [15],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: '#3cba9f',
    },
    {
      label: 't',
      data: [35],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: '#e8c3b9',
    },
  ],
};

  
  labelsPitch = ['Pitch'];
  dataPitch = {
    labels: ["t", "e", "s", "t"],
    datasets: [
      {
        label: "Pitch",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
        data: [3,5,7,4]
      }
    ]
  };

  labelsEnergy = ['Energy'];
  dataEnergy = {
    labels: ["t", "e", "s", "t"],
    datasets: [
      {
        label: "Energy",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
        data: [6,4,8,5]
      }
    ]
  };

  render(){
    return (
      <div className="container">
        <div className="row text-center mt-5">
          <h1>
            FastPitch: Parallel Text-to-speech with Pitch Prediction
          </h1>
        </div>
        <br></br>
        <TextInput
          handleReset={this.onReset.bind(this)}
          onGenerate={this.onGenerate.bind(this)}
        />
        <Audio
          audioName="Audio"
          onClick={() => {}}
          src={this.state.src}
        ></Audio>
        <br></br>
        <div
          style={{
            height: "300px",
            width: "80%",
            display: "flex",
            padding: "20px",
            margin: "0 auto"
          }}
        >
          <div style={{ marginTop: "130px" }}>
            <label>
              <b>Duration</b>
            </label>
          </div>
          <Bar
            data={this.data}
            options={{
              indexAxis: "y" as const,
              maintainAspectRatio: false,
              scales: {
                x: {
                  stacked: true,
                  max: 100,
                  min: 0,
                },
                y: {
                  stacked: true,
                  max: 100,
                  min: 0,
                  display: false
                },
              },
              plugins: {
                // @ts-ignore
                dragData: {
                  round: 1,
                  showTooltip: true,
                  onDragStart: function (e: any) {
                    // console.log(e)
                  },
                  onDrag: function (
                    e: any,
                    datasetIndex: any,
                    index: any,
                    value: number
                  ) {
                    e.target.style.cursor = "grabbing";
                    if (value < 0) return false;
                  },
                  onDragEnd: function (
                    e: any,
                    datasetIndex: any,
                    index: any,
                    value: any
                  ) {
                    e.target.style.cursor = "default";
                  },
                },
                datalabels: {
                  //@ts-ignore
                  font: function (context) {
                    var w = context.chart.width;
                    return {
                      size: w < 512 ? 12 : 14,
                      weight: "bold",
                    };
                  },
                  //@ts-ignore
                  formatter: function (value, context) {
                    // @ts-ignore
                    return context.chart.data.datasets[context.datasetIndex]
                      .label;
                  },
                },
              },
            }}
          />
        </div>
        <div
          style={{
            height: "300px",
            width: "80%",
            display: "flex",
            padding: "20px",
            margin: "0 auto"
          }}
        >
          <div style={{ marginTop: "130px", padding: "20px" }}>
            <label>
              <b>Pitch</b>
            </label>
          </div>
          <Bar
            data={this.dataPitch}
            options={{
              indexAxis: "x" as const,
              maintainAspectRatio: false,
              plugins: {
                // @ts-ignore
                dragData: {
                  round: 1,
                  showTooltip: true,
                  // @ts-ignore
                  onDragStart: function (e) {
                  },
                  // @ts-ignore
                  onDrag: function (e, datasetIndex, index, value) {
                    e.target.style.cursor = "grabbing";
                  },
                  // @ts-ignore
                  onDragEnd: function (e, datasetIndex, index, value) {
                    e.target.style.cursor = "default";
                  },
                },
              },
              scales: {
                y: {
                  max: 10,
                  min: 1,
                },
              },
            }}
          />
        </div>
        <div
          style={{
            height: "300px",
            width: "80%",
            display: "flex",
            padding: "20px",
            margin: "0 auto"
          }}
        >
          <div style={{ marginTop: "130px", padding: "20px" }}>
            <label>
              <b>Energy</b>
            </label>
          </div>
          <Bar
            data={this.dataEnergy}
            options={{
              indexAxis: "x" as const,
              maintainAspectRatio: false,
              plugins: {
                // @ts-ignore
                dragData: {
                  round: 1,
                  showTooltip: true,
                  // @ts-ignore
                  onDragStart: function (e) {
                  },
                  // @ts-ignore
                  onDrag: function (e, datasetIndex, index, value) {
                    e.target.style.cursor = "grabbing";
                  },
                  // @ts-ignore
                  onDragEnd: function (e, datasetIndex, index, value) {
                    e.target.style.cursor = "default";
                  },
                },
              },
              scales: {
                y: {
                  max: 10,
                  min: 1,
                },
              },
            }}
          />
        </div>
      </div>
    );   
  } 
}

export default App;
