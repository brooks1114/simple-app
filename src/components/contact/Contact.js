import React, { Component } from 'react'

class Contact extends Component {

    constructor(props) {
        super(props)
        this.state = {

            submitted: false,
            formData: {
                firstName: "",
                lastName: "",
                email: ""

            }
        }
    }


    handleChange = (event) => {
        //since this.setState only does a shallow merge we are going to create a new object from the related object in state
        //this will allow us to make sure we don't lose data when calling setState method
        // !!! Shallow merge means that the object would update the event target value only (i.e. email) if data on firstname existed it would be lost.
        let formData = { ...this.state.formData };
        formData[event.target.name] = event.target.value;
        this.setState({ formData })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            submitted: true
        })
    }

    resetForm = (event) => {
        this.setState({
            submitted: false,
            formData: {
                firstName: "",
                lastName: "",
                email: ""
            }
        })
    }


    render() {

        if (this.state.submitted) {
            return (
                <div>
                    Thank you, {this.state.formData.firstName} {this.state.formData.lastName}, for submitting the form <br />
                    We will send you free offers through your E-mail at {this.state.formData.email} <br />
                    <button onClick={this.resetForm}>Reset Form</button>
                </div>
            )
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>First Name:</label>
                        <input onChange={this.handleChange} type="text" name="firstName" value={this.state.formData.firstName} />
                    </div>
                    <div>
                        <label>Last name:</label>
                        <input onChange={this.handleChange} type="text" name="lastName" value={this.state.formData.lastName} />
                    </div>
                    <div>
                        <label>E-mail:</label>
                        <input onChange={this.handleChange} type="text" name="email" value={this.state.formData.email} />
                    </div>
                    <button>Submit Form</button> <br />
                    {this.state.formData.firstName}
                    <br />
                    {this.state.formData.lastName}
                    <br />
                    {this.state.formData.email}
                </form>

            </div>
        )

    }

}

export default Contact