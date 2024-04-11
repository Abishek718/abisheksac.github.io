import * as echarts from 'echarts';
import 'echarts-gl';
var getScriptPromisify = (src) => {
  return new Promise(resolve => {
    $.getScript(src, resolve)
  })
}

(function () {
  const prepared = document.createElement('template')
  prepared.innerHTML = `
      <style>
      </style>
      <div id="root" style="width: 100%; height: 100%;">
      </div>
    `
  class SamplePrepared extends HTMLElement {
    constructor () {
      super()

      this._shadowRoot = this.attachShadow({ mode: 'open' })
      this._shadowRoot.appendChild(prepared.content.cloneNode(true))

      this._root = this._shadowRoot.getElementById('root')

      this._props = {}

      this.render()
    }

    onCustomWidgetResize (width, height) {
      this.render()
    }

    async render () {
      await getScriptPromisify('https://cdn.bootcdn.net/ajax/libs/echarts/5.0.0/echarts.min.js')

      var ROOT_PATH = 'https://echarts.apache.org/examples';
 
var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;
 
option = {
  backgroundColor: '#000',
  globe: {
    baseTexture: ROOT_PATH + '/data-gl/asset/starfield.jpg',
    shading: 'lambert',
    // environment: 'https://abishek718.github.io/abisheksac.github.io/Custom%20Wid/New1/starfield.jpg',
    atmosphere: {
      show: true
    },
    light: {
      ambient: {
        intensity: 0.5
      },
      main: {
        intensity: 1.5
      }
    }
  },
  series: []
};
 
option && myChart.setOption(option);
    }
  }

  customElements.define('com-sap-sample-echarts-prepared', SamplePrepared)
})()
