class Component {
    constructor(props) {
        if (!props && this.constructor.defaultProps) {
            this.props = this.constructor.defaultProps
        } else {
            this.props = props
        }
        
    }
    setState(newState) {
        this.state = newState
        this.render()
    }
}

class Component1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: this.props.count
        }
    }
    add() {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        console.log(this.state)
    }
}
Component1.defaultProps = {
    count: 5
}
var component1 = new Component1()
