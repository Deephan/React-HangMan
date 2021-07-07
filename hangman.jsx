// HANGMAN
let elems = ["head", "mid", "leftArm", "rightArm", "leftLeg", "rightLeg", "wall", "floor", "ceil", "rope"]
const delta = [4, 5, 4, 4, 5, 5, 4, 4, 7, 7, 4, 5, 3, 4, 4, 5, 4, 4, 5, 5, 4, 4, 3, 4, 4, 5, 6]
const NUMBER_OF_TRIES = 5
let triviaBoard = [{
  q: "What is the Capital of Alabama?",
  a: "Montgomery"
}, {
  q: "What is the Capital of Alaska?",
  a: "Juneau"
}, {
  q: "What is the Capital of Arizona?",
  a: "Phoenix"
}, {
  q: "What is the Capital of Arkansas?",
  a: "LittleRock"
}, {
  q: "What is the Capital of California?",
  a: "Sacramento"
}, {
  q: "What is the Capital of Colorado?",
  a: "Denver"
}, {
  q: "What is the Capital of Connecticut?",
  a: "Hartford"
}, {
  q: "What is the Capital of Delaware?",
  a: "Dover"
}, {
  q: "What is the Capital of Florida?",
  a: "Tallahassee"
}, {
  q: "What is the Capital of Georgia?",
  a: "Atlanta"
}, {
  q: "What is the Capital of Hawaii?",
  a: "Honolulu"
}, {
  q: "What is the Capital of Idaho?",
  a: "Boise"
}, {
  q: "What is the Capital of Illinois?",
  a: "Springfield"
}, {
  q: "What is the Capital of Indiana?",
  a: "Indianapolis"
}, {
  q: "What is the Capital of Iowa?",
  a: "DesMoines"
}, {
  q: "What is the Capital of Kansas?",
  a: "Topeka"
}, {
  q: "What is the Capital of Kentucky?",
  a: "Frankfort"
}, {
  q: "What is the Capital of Lousiana?",
  a: "BatonRouge"
}, {
  q: "What is the Capital of Maine?",
  a: "Augusta"
}, {
  q: "What is the Capital of MaryLand?",
  a: "Annapolis"
}, {
  q: "What is the Capital of Massachusetts?",
  a: "Boston"
}, {
  q: "What is the Capital of Michigan?",
  a: "Lansing"
}, {
  q: "What is the Capital of Minnesota?",
  a: "SaintPaul"
}, {
  q: "What is the Capital of Mississippi?",
  a: "Jackson"
}, {
  q: "What is the Capital of Missouri?",
  a: "JeffersonCity"
}, {
  q: "What is the Capital of Montana?",
  a: "Helena"
}, {
  q: "What is the Capital of Nebraska?",
  a: "Lincoln"
}, {
  q: "What is the Capital of Nevada?",
  a: "CarsonCity"
}, {
  q: "What is the Capital of New Hampshire?",
  a: "Concord"
}, {
  q: "What is the Capital of New Jersey?",
  a: "Trenton"
}, {
  q: "What is the Capital of New Mexico?",
  a: "SantaFe"
}, {
  q: "What is the Capital of New York?",
  a: "Albany"
}, {
  q: "What is the Capital of North Carolina?",
  a: "Raleigh"
}, {
  q: "What is the Capital of North Dakota?",
  a: "Bismarck"
}, {
  q: "What is the Capital of Ohio?",
  a: "Columbus"
}, {
  q: "What is the Capital of Oklahoma?",
  a: "OklahomaCity"
}, {
  q: "What is the Capital of Oregon?",
  a: "Salem"
}, {
  q: "What is the Capital of Pennsylvania?",
  a: "Harrisburg"
}, {
  q: "What is the Capital of Rhode Island?",
  a: "Providence"
}, {
  q: "What is the Capital of South Carolina?",
  a: "Columbia"
}, {
  q: "What is the Capital of South Dakota?",
  a: "Pierre"
}, {
  q: "What is the Capital of Tennessee?",
  a: "Nashville"
}, {
  q: "What is the Capital of Texas?",
  a: "Austin"
}, {
  q: "What is the Capital of Utah?",
  a: "SaltLakeCity"
}, {
  q: "What is the Capital of Vermont?",
  a: "Montpelier"
}, {
  q: "What is the Capital of Virginia?",
  a: "Richmond"
}, {
  q: "What is the Capital of Washington?",
  a: "Olympia"
}, {
  q: "What is the Capital of West Virginia?",
  a: "Charleston"
}, {
  q: "What is the Capital of Wisconsin?",
  a: "Madison"
}, {
  q: "What is the Capital of Wyoming?",
  a: "Cheyenne"
}]


function GridCell(props) {
  return ( < rect x = {
      props.x
    }
    y = {
      props.y
    }
    rx = "3"
    ry = "3"
    width = "20"
    height = "20"
    stroke = "LightSlateGrey"
    fill = "transparent" / > )
}

function GridCellElement(props) {
  let _color = "OrangeRed"
  if (props.letter === '_') _color = "DarkRed"
  return ( < text x = {
      props.x
    }
    y = {
      props.y
    }
    font - family = "Verdana"
    font - size = "15"
    fill = {
      _color
    } > {
      props.letter
    } < /text>)
  }

  function Grid(props) {
    let word = props.word.toUpperCase()
    let _count = word.length
    let GC_COORD_X = 40
    let GC_COORD_Y = 10
    let GCE_COORD_Y = 25
    let GRID_CELL_GAP = 30
    let START_ASCII = 65
    while (_count++ <= props.cells - 1) word = word + '_'
    return ( < svg xmlns = "http://www.w3.org/2000/svg"
      width = "1100"
      height = "100"
      viewBox = "0 0 300 50" > {
        word.split('').map((ele, index) => {
          let i = (ele === '_') ? 26 : ele.charCodeAt(0) - START_ASCII
          let GC_X = (GC_COORD_X + (GRID_CELL_GAP * index)).toString()
          let GC_Y = GC_COORD_Y.toString()
          let GCE_X = (GC_COORD_X + (GRID_CELL_GAP * index) + delta[i]).toString()
          let GCE_Y = GCE_COORD_Y.toString()
          return ( < g >
            < GridCell x = {
              GC_X
            }
            y = {
              GC_Y
            }
            /> < GridCellElement x = {
              GCE_X
            }
            y = {
              GCE_Y
            }
            letter = {
              ele
            }
            /> < /g>
          )
        })
      } < /svg>
    )
  }

  function QuestionCard(props) {
    return ( < svg xmlns = "http://www.w3.org/2000/svg"
      width = "450"
      height = "100" >
      < text x = "170"
      y = "35"
      font - family = "Trebuchet MS"
      font - size = "30"
      fill = "Teal" > {
        props.question
      } < /text> < /svg>
    )
  }

  function DebugTallyCard(props) {
    if (!props.debug)
      return ( < br / > )
    return ( < h4 >
      Unique letters: {
        Array.from(props.uniq).join(",")
      } < br / >
      Tally letters: {
        Array.from(props.tally).join(",")
      } < br / >
      Answer: {
        props.answer
      } < br / >
      < /h4>
    )
  }

  function LetterTallyCard(props) {
    document.getElementById("tries").innerHTML = "Tries: " + props.tries
    return ( < div >
      < DebugTallyCard debug = {
        props.debug
      }
      uniq = {
        props.uniq
      }
      tally = {
        props.tally
      }
      /> < /div>
    )
  }

  class HangMan extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        value: '',
        wordCount: 0,
        answer: [],
        tries: NUMBER_OF_TRIES,
        uniqueLetters: new Set(),
        tallyLetters: new Set()
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.getUniqueLetters = this.getUniqueLetters.bind(this)
    }

    componentWillMount() {
      elems.forEach(ele => {
        document.getElementById(ele).style.display = "none"
      })
    }

    componentDidUpdate(nextProps, nextState) {
      let _wordCount = this.state.wordCount
      if (_wordCount != nextState.wordCount) {
        elems.forEach(ele => {
          document.getElementById(ele).style.display = "none"
        })
      }
    }

    handleChange(event) {
      let currentText = this.state.value + event.key.toUpperCase()
      let index = this.state.wordCount
      let currentWord = triviaBoard[index].a.toUpperCase()
      let _ans = Array(currentWord.length).fill('_')
      let _uniq = this.state.uniqueLetters
      let _tally = this.state.tallyLetters
      let _tries = this.state.tries
      let _tallysize = NUMBER_OF_TRIES

      currentText.split('').forEach(ele => {
        if (!_uniq.has(ele)) {
          let part = elems[_tally.size]
          _tally.add(ele)
          document.getElementById(part).style.display = "block"
        }
        let _count = _ans.length
        while (_count-- >= 0) {
          if (currentWord.charAt(_count) == ele) _ans[_count] = ele
        }
      })

      _tallysize = _tallysize - _tally.size
      this.setState({
        value: currentText,
        tallyLetters: _tally,
        tries: _tallysize,
        answer: _ans
      });

      if (_tallysize === 0) {
        alert("Used up all the tries..")
        let _wordCount = this.state.wordCount
        this.setState({
          value: '',
          tries: NUMBER_OF_TRIES,
          wordCount: (_wordCount + 1) % triviaBoard.length,
          uniqueLetters: new Set(),
          tallyLetters: new Set()
        });
        currentWord = triviaBoard[this.state.wordCount].a.toUpperCase()
        _ans = Array(currentWord.length).fill('_')
        this.setState({
          answer: _ans
        })
      }
    }

    handleSubmit(event) {
      let _wordCount = this.state.wordCount
      let currentAnswer = this.state.answer.join('')
      let currentWord = triviaBoard[_wordCount].a.toUpperCase()
      let _ans = Array(currentWord.length).fill('_')
      let _tally = this.state.tallyLetters
      let _tallysize = NUMBER_OF_TRIES

      if (currentAnswer !== currentWord) {
        alert("Wrong Answer.. Try again");
        _tallysize = _tallysize - _tally.size
      } else {
        alert("Correct Answer.. Next Question")
        this.setState({
          wordCount: (_wordCount + 1) % triviaBoard.length,
          tallyLetters: new Set(),
          uniqueLetters: new Set()
        });
        if (_wordCount == triviaBoard.length - 1) {
          alert("Game Over")
          this.setState({
            wordCount: 0
          })
        }
      }
      currentWord = triviaBoard[this.state.wordCount].a.toUpperCase()
      _ans = Array(currentWord.length).fill('_')

      this.setState({
        tries: _tallysize,
        answer: _ans,
        value: ''
      });
    }

    getUniqueLetters(word) {
      let uniq = this.state.uniqueLetters
      word.split('').forEach(ele => uniq.add(ele.toUpperCase()))
      this.setState({
        uniqueLetters: uniq
      })
    }

    componentWillUpdate() {
      document.onkeypress = (e) => {
        e = e || window.event;
        var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
        if ((charCode == 13) || (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
          if (charCode === 13) this.handleSubmit(e)
          else this.handleChange(e)
        }
      }
    }

    render() {
      let index = (this.state.wordCount) % triviaBoard.length
      let _uniq = this.state.uniqueLetters
      if (_uniq.size === 0) this.getUniqueLetters(triviaBoard[index].a)
      let _debug = false
      return ( < form onSubmit = {
          this.handleSubmit
        } >
        < QuestionCard question = {
          triviaBoard[index].q
        }
        /> < Grid word = {
          this.state.answer.join('')
        }
        cells = {
          triviaBoard[index].a.length
        }
        /> < LetterTallyCard debug = {
          _debug
        }
        uniq = {
          this.state.uniqueLetters
        }
        tally = {
          this.state.tallyLetters
        }
        tries = {
          this.state.tries
        }
        answer = {
          this.state.answer
        }
        />  < /form>
      )
    }
  }

  ReactDOM.render( < HangMan / > ,
    document.getElementById('example')
  );
