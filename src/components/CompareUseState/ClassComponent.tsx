import React, { Component } from 'react'

interface IState {
    number?: number
    obj?: { a: number, b: number }
}
export default class ClassComponent extends Component<{}, IState> {

    constructor(props: any) {
        super(props)

        this.state = {
            // renderExample1
            number: 0,

            //renderExample2
            // obj: { a: 1, b: 1 },
        }
    }

    renderExample1 = () => {
        return <>
            <div className="">{`onClick={() => this.setState({ number: this.state.number + 1 })}`}</div>
            <h3>{this.state.number}</h3>
            <button onClick={() => this.setState({ number: this.state.number + 1 })}>
                Number+++
            </button>
        </>
    }

    // renderExample2 = () => {
    //     const upA = () => {
    //         const { obj } = this.state
    //         obj.a = obj.a + 1
    //         this.setState({ obj })
    //     }

    //     const upB = () => {
    //         const { obj } = this.state
    //         obj.b = obj.b + 1
    //         this.setState({ obj })
    //     }

    //     return <>
    //         <div className="">{``}</div>


    //         <pre>{`const upA = () => { 
    //         const {obj} = this.state
    //         obj.a = obj.a + 1
    //         this.setState({obj})
    //      }`}</pre>

    //         <pre>{`const upB = () => { 
    //         const {obj} = this.state
    //         obj.b = obj.b + 1
    //         this.setState({obj})
    //      }`}</pre>

    //         <h3>a: {this.state.obj.a}</h3>
    //         <h3>b: {this.state.obj.b}</h3>

    //         <button onClick={upA}>
    //             a Up
    //         </button>
    //         <button onClick={upB}>
    //             b Up
    //         </button>
    //     </>
    // }
    render() {
        return <div className="">
            <h2>Class Component</h2>
            {this.renderExample1()}
            {/* {this.renderExample2()} */}
        </div>
    }
}
