import React, { Component } from 'react'
import SubmitButton from './SubmitButton'

class Contact extends Component {

    constructor(props) {
        super(props)
        this.state = {

            submitButtonDisabled: true,
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
        let formData = { ...this.state.formData };
        formData[event.target.name] = event.target.value;

        (!(formData.firstName === "") && !(formData.lastName === "") && !(formData.email === ""))
            ? this.setState({ submitButtonDisabled: false })
            : this.setState({ submitButtonDisabled: true })


        this.setState({ formData })

    };


    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            submitted: true
        })
    }

    resetForm = (event) => {
        this.setState({
            submitButtonDisabled: true,
            submitted: false,
            formData: {
                firstName: "",
                lastName: "",
                email: ""
            }
        })
    }

    changeState = () => {
        this.setState({
            formData: this.state.formData
        });
    };


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
                    <SubmitButton formData={this.state.formData} submitButtonDisabled={this.state.submitButtonDisabled} />
                    {/* <button onClick={this.changeState} disabled={this.state.submitButtonDisabled}>Submit Form</button> <br /> */}
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