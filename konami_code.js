const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function

  let arr = []

  document.body.addEventListener('keydown', testCode)

  function testCode(e) {
    let num = parseInt(e.which || e.detail)
    arr.push(num)
    if (arr.length > code.length) {
      arr.shift()
    }
    let test = checkEquality(arr, code)
    if (test === true) {
      alert("Konami!")
    }
    // console.log(arr)
    // console.log(test)
  }

  function checkEquality(arr, code) {
    if (arr.length !== code.length) {
      return false
    }
    for (let i = 0; i < arr.length; i++) {
        // debugger;
       if (arr[i] !== code[i]) {
           return false
      }
    }
    return true
  }

}
