const choreography = [
  // [frameIndex, duration]
  [0, 1000],
  [1, 1000],
  [0, 1000],
  [1, 1000],
  [0, 1000],
  [1, 1000],
  [0, 1000],
  [2, 1000],
  [3, 500],
  [2, 200],
  [3, 300],
  [2, 200],
  [3, 500],
  [2, 300],
  [0, 1000],
  [2, 1000],
  [3, 500],
  [2, 200],
  [3, 300],
  [2, 200],
  [3, 500],
  [2, 300],
  [0, 1000],
]

function generateFileNameForFrameIndex(frameIndex) {
  return `singing-fish-${frameIndex + 1}.png`
}

function generateFilePathForFrameIndex(frameIndex) {
  return `images/${generateFileNameForFrameIndex(frameIndex)}`
}

async function main() {
  const $frame = document.getElementById('frame')
  while (true) {
    for (const [frameIndex, duration] of choreography) {
      $frame.src = generateFilePathForFrameIndex(frameIndex)
      await wait(duration)
    }
  }
}

function wait(duration) {
  return new Promise(resolve => setTimeout(resolve, duration))
}

main()
