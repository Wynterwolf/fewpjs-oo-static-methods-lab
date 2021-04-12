class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string){
    let dirty = /[$@!#^*({]/gi
    return string.replace(dirty,'')
  }
  static titleize(string){
    //split array
    let array = string.split(' ')
    //don't capitalize these words
    // let noCap = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']
    //empty array to push into
    let newArray = []
    //use map on array
    let upCase = array.map(word => {
      if (word !== 'the' && word !== 'a' && word !== 'an' && word !== 'but' && word !== 'of' && word !== 'and' && word !== 'for' && word !== 'at' && word !== 'by' && word !== 'from'){
        newArray.push(word.charAt(0).toUpperCase() + word.slice(1))
      }
      else {
        newArray.push(word)
      }
    })
    return newArray.join(' ').charAt(0).toUpperCase() + newArray.join(' ').slice(1)
  }
}