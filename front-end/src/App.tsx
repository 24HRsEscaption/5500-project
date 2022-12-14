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
import completeMap from './colorSchemePhones';
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
      phones: [],
      dataPitch: {
        labels: [],
        datasets: [
          {
            label: "Pitch",
            backgroundColor: [],
            data: []
          }
        ]
      },
      dataEnergy: {
        labels: [],
        datasets: [
          {
            label: "Energy",
            backgroundColor: [],
            data: []
          }
        ]
      },
      dataDuration: {
        labels: ['Duration'],
        datasets: []
      }
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
    let phones = await response.json();
    const dataPitch = this.state.dataPitch;
    const dataEnergy = this.state.dataEnergy;
    const dataDuration = this.state.dataDuration;

    const defaultValues = phones.map((phone: any) => 1);
    const bgColors = phones.map(
      // @ts-ignore
      (phone: any) => completeMap[phone.replace(/[0-9]/g, '')] || '#555'
    );

    dataPitch.labels = phones;
    dataPitch.datasets[0].data = [...defaultValues];
    dataPitch.datasets[0].backgroundColor = bgColors;

    dataEnergy.labels = phones;
    dataEnergy.datasets[0].data = [...defaultValues];
    dataEnergy.datasets[0].backgroundColor = bgColors;

    dataDuration.datasets = phones.map((phone: any, index: number) => ({
      label: phone,
      data: [1],
      backgroundColor: bgColors[index],
    }));

    this.setState({
      phones: phones,
      dataPitch: dataPitch,
      dataEnergy: dataEnergy,
    });
  }

  async onGenerate(text: string) {
    console.log(this.state.dataPitch.datasets[0].data);
    const response = await fetch(
      'http://localhost:5000/get_audio',
      {
        method: 'POST',
        body: JSON.stringify(
          {
            energy: `[${this.state.dataEnergy.datasets[0].data.toString()}]`,
            pitch: `[${this.state.dataPitch.datasets[0].data.toString()}]`,
            duration: `[${this.state.dataDuration.datasets.map(
              (dataset: any) => dataset.data[0]
            )}]`,
            text: text
          }
        )
      }
    );
    this.setState({
      src: URL.createObjectURL(await response.blob())
    });
  }

  updatePitch = (index: number, value: number) => {
    const dataPitch = this.state.dataPitch;
    dataPitch.datasets[0].data[index] = value;
    this.setState({
      dataPitch: dataPitch,
    });
  }

  updateEnergy = (index: number, value: number) => {
    const dataEnergy = this.state.dataEnergy;
    dataEnergy.datasets[0].data[index] = value;
    console.log(dataEnergy.datasets[0].data);
    console.log(this.state.dataPitch.datasets[0].data);
    this.setState({
      dataEnergy: dataEnergy,
    });
  }

  updateDuration = (datasetIndex:number, index: number, value: number) => {
    const dataDuration = this.state.dataDuration;
    dataDuration.datasets[datasetIndex].data[index] = value;
    this.setState({
      dataDuration: dataDuration,
    });
  }

  render(){
    return (
      <div className="container">
        <div className="row text-center mt-5">
          <h1>
            FastSpeech2: Parallel Text-to-speech with Pitch Prediction
          </h1>
        </div>
        <br></br>
        <TextInput
          handleReset={this.onReset.bind(this)}
          onGenerate={this.onGenerate.bind(this)}
          onChange={this.getPhones.bind(this)}
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
            data={this.state.dataDuration}
            options={{
              indexAxis: "y" as const,
              maintainAspectRatio: false,
              scales: {
                x: {
                  stacked: true,
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
                  onDragEnd: (
                    e: any,
                    datasetIndex: any,
                    index: any,
                    value: any
                  ) => {
                    e.target.style.cursor = "default";
                    this.updateDuration(datasetIndex, index, value);
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
        {
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
            data={this.state.dataPitch}
            redraw={true}
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
                  onDragEnd: (e, datasetIndex, index, value) => {
                    e.target.style.cursor = "default";
                    this.updatePitch(index, value);
                  },
                },
              },
              scales: {
                y: {
                  max: 3,
                  min: 0,
                },
              },
            }}
          />
        </div>
  }
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
            data={this.state.dataEnergy}
            redraw={true}
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
                  onDragEnd: (e, datasetIndex, index, value) => {
                    e.target.style.cursor = "default";
                    this.updateEnergy(index, value);
                  },
                },
              },
              scales: {
                y: {
                  max: 3,
                  min: 0,
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
