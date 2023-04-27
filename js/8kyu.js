function hero(bullets, dragons) {
    let num = bullets / 2;
    if (num < dragons) {
        return false
    } else return true

}

function doubleInteger(i) {

    return i * 2;
}

function removeEveryOther(arr) {
    for (let i = 1; i < arr.length; i++) {
      arr.splice(i, 1);
    }
    return arr;
  }