import React from 'react'

class Counter extends React.Component {
    state = JSON.parse(localStorage.getItem('state-counter'))
        || { number: 0 }



    componentDidUpdate() {
        this.saveInLocalStorage()
    }

    saveInLocalStorage = () => localStorage.setItem('state - counter',
        JSON.stringify(this.state)

    )





    incHandler = () => this.setState({ number: this.state.number + 1 })
    decHandler = () => this.setState({ number: this.state.number - 1 })
    incFiveHandler = () => this.setState({ number: this.state.number + 5 })
    decFiveHandler = () => this.setState({ number: this.state.number - 5 })
    resetCounter = () => this.setState({ number: this.props.startNumber || 0 })
    render() {
        return (
            <div>
                <h1>
                    {this.state.number}
                </h1>
                <button
                    onClick={this.incHandler}>
                    +1
                </button>
                <button
                    onClick={this.decHandler}>
                    -1
                </button>
                <button onClick={this.incFiveHandler}>
                    +5
                </button>
                <button onClick={this.decFiveHandler}>
                    -5
                </button>
                <button onClick={this.resetCounter}>
                    reset
                </button>
            </div>
        )
    }
}
export default Counter