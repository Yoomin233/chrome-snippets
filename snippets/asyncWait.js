async function main() {
    console.log('start')
    await waitForSeconds(3)
    console.log('end')
}

function waitForSeconds(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), seconds * 1e3)
  })
}

main()