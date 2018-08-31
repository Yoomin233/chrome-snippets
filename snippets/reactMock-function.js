function Component() {
//     console.log(this, props)
    this.setState = function (newState) {
        this.state = newState
        this.render()
    }
}

const component = new Component()

function Component1(props) {
    Object.setPrototypeOf(this, component)
    this.props = props || this.constructor.defaultProps
    this.state = {
        count: this.props.count
    }
    this.add = function () {
        this.setState({
            count: this.state.count + 1
        })
    }
    this.render = function () {
        console.log(this.state)
    }
}
Component1.defaultProps = {count: 4}

const component1 = new Component1()