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

      const chart = echarts.init(this._root)
      const option = {
        backgroundColor: '#000',
        globe: {
          baseTexture: 'https://i2.wp.com/files.123freevectors.com/wp-content/original/160799-green-and-black-texture-background.jpg?w=500&q=95',
          shading: 'lambert',
         // environment: ROOT_PATH + '/data-gl/asset/starfield.jpg',
          atmosphere: {
            show: true
          },
          light: {
            ambient: {
              intensity: 1.5
            },
            main: {
              intensity: 1.9
            }
          }
        },
        series: []
      };
      chart.setOption(option)
    }
  }

  customElements.define('com-sap-sample-echarts-prepared', SamplePrepared)
})()