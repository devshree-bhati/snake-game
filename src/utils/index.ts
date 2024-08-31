export const clearBoard = (context: CanvasRenderingContext2D | null) => {
  if (context) {
    context.clearRect(0, 0, 1000, 600)
  }
}

export interface IObjectBody {
  x: number
  y: number
}

export const drawObject = (
  context: CanvasRenderingContext2D | null,
  objectBody: IObjectBody[],
  fillColor: string,
  strokeStyle = '#146356'
) => {
  if (context) {
    objectBody.forEach((object: IObjectBody) => {
      context.fillStyle = fillColor
      context.strokeStyle = strokeStyle
      context?.fillRect(object.x, object.y, 20, 20)
      context?.strokeRect(object.x, object.y, 20, 20)
    })
  }
}


// food can be near boundary
/*
function randomNumber(min: number, max: number) {
  let random = Math.random() * max
  return random - (random % 20)
}
export const generateRandomPosition = (width: number, height: number) => {
  return {
    x: randomNumber(0, width),
    y: randomNumber(0, height),
  }
}
*/

// food is not near the boundary and the food not overlapping with the snake body

function randomNumber(min: number, max: number) {
  let random = Math.floor(Math.random() * (max - min + 1) + min)
  return random - (random % 20) // Adjusts to the nearest multiple of 20
}

export const generateRandomPosition = (
  width: number,
  height: number,
  snake: IObjectBody[]
) => {
  // const buffer = 40 // Buffer zone from the boundary
  const buffer = 20 // Buffer zone from the boundary

  let xPosition: number
  let yPosition: number

  // Function to check if the generated position overlaps with the snake
  const isOverlappingWithSnake = (x: number, y: number) => {
    return snake.some((segment) => segment.x === x && segment.y === y)
  }

  do {
    // Generate random positions within the canvas, considering the buffer
    // xPosition = randomNumber(buffer, width - buffer - 20)
    // yPosition = randomNumber(buffer, height - buffer - 20)
    xPosition = randomNumber(buffer, width - buffer)
    yPosition = randomNumber(buffer, height - buffer)
  } while (isOverlappingWithSnake(xPosition, yPosition))

  // Return the generated position once it's confirmed to be non-overlapping
  return {
    x: xPosition,
    y: yPosition,
  }
}



export const hasSnakeCollided = (
  snake: IObjectBody[],
  currentHeadPos: IObjectBody
) => {
  let flag = false
  snake.forEach((pos: IObjectBody, index: number) => {
    if (
      pos.x === currentHeadPos.x &&
      pos.y === currentHeadPos.y &&
      index !== 0
    ) {
      flag = true
    }
  })

  return flag
}
