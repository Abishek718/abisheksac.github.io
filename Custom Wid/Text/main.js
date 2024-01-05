var getScriptPromisify = (src) => {
  return new Promise(resolve => {
    $.getScript(src, resolve)
  })
}

(function () {
  const anitext1 = document.createElement('template')
  anitext1.innerHTML = `
      <style>
      </style>
      <div id="root" style="width: 100%; height: 50%;">
      </div>
    `
  class graphic_stroke_animation extends HTMLElement {
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
        graphic: {
            elements: [
              {
                type: 'text',
                left: 'center',
                top: 'center',
                style: {
                  text: 'Sample Superstore',
                  fontSize: 80,
                  fontWeight: 'bold',
                  lineDash: [0, 200],
                  lineDashOffset: 0,
                  fill: 'transparent',
                  stroke: '#000',
                  lineWidth: 1
                },
                keyframeAnimation: {
                  duration: 3000,
                  loop: true,
                  keyframes: [
                    {
                      percent: 0.7,
                      style: {
                        fill: 'transparent',
                        lineDashOffset: 200,
                        lineDash: [200, 0]
                      }
                    },
                    {
                      // Stop for a while.
                      percent: 0.8,
                      style: {
                        fill: 'transparent'
                      }
                    },
                    {
                      percent: 1,
                      style: {
                        fill: 'black'
                      }
                    }
                  ]
                }
              }
            ]
          }     // https://echarts.apache.org/examples/zh/index.html
      }
      chart.setOption(option)
    }
  }

  customElements.define('com-sap-sample-echarts-graphic-stroke-animation',graphic_stroke_animation)
})()
