// nothing needs to change here. These helpers abstracted here just to keep
// lesson focused on event handling and not hacky HTML5 canvas nonsense
import './canvasHelpers.css';

let colors = []
let def = null
let idx = 0
let [sizeX, sizeY] = [95, 121]


export function init() {

  def = document.createElement("img")
  def.src = "1.png"
}

export function drawChromeBoiAtCoords(x, y, imgPNG, animation) {

  const canvas = document.querySelector("canvas") // sloppy but we haven't introduced lifecycle methods and canvas wouldn't be rendered
  const ctx = canvas.getContext("2d")
  const rect = canvas.getBoundingClientRect()
  const [cX, cY] = [rect.left, rect.top]

  let img
  if (false) {
    img = colors[idx]
    idx = (idx + 1) % 3
  } else {
    def.src = imgPNG
    def.className = "App-logo"
    console.log(def);
    img = def
  }

  ctx.drawImage(img, x - cX - 50, y - cY - 80, sizeX, sizeY)
}


export function resize(type) {
  const multiplier = (type === "+") ? 1.1 : 0.9
  sizeX *= multiplier
  sizeY *= multiplier
}
