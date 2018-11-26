import React from 'react'

class Counter extends React.Component {
    state = {
        number: 0
    }
    render() {
        return (
            <div>
                <h1>
                    {this.state.number}
                </h1>
                <button>
                    +1
                </button>
                <button>
                    -1
                </button>
                <button>
                    +5
                </button>
                <button>
                    -5
                </button>
                <button>
                    reset
                </button>
            </div>
        )
    }
}
export default Counter