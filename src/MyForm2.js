import React, { Component } from 'react';

class MyForm2 extends Component {

    constructor(props) {
        super(props);

        this.inputName = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.inputName.current.value);
    }

    render() {
        const { state } = this;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Name:
                    <input type="text" name="name" ref={this.inputName} defaultValue={'abcd'} />
                    </label>
                </div>
                <div>
                    <input type="submit" value="Enviar" />
                </div>
            </form>
        )
    }
}

export default MyForm2;