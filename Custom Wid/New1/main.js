var echarts = require('echarts');
require('echarts-gl');
 
var ROOT_PATH = 'https://echarts.apache.org/examples';
 
var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;
 
option = {
  backgroundColor: '#000',
  globe: {
    baseTexture: ROOT_PATH + '/data-gl/asset/starfield.jpg',
    shading: 'lambert',
    //environment: ROOT_PATH + '/data-gl/asset/starfield.jpg',
    atmosphere: {
      show: true
    },
    light: {
      ambient: {
        intensity: 1.5
      },
      main: {
        intensity: 0.5
      }
    }
  },
  series: []
};
 
option && myChart.setOption(option);
customElements.define('com-sap-sample-echarts-prepared', SamplePrepared)
