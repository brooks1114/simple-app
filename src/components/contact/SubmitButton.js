import React from 'react'

const SubmitButton = (props) => {

    return (
        <button onClick={props.formData.changeState} disabled={props.submitButtonDisabled}>Submit Form</button>
    )
}

// const UpdateButtonStatus = (formData) => {
//     (!(formData.firstName === "") && !(formData.lastName === "") && !(formData.email === ""))
//         ? this.setState({ submitButtonDisabled: false })
//         : this.setState({ submitButtonDisabled: true })
// }

export default SubmitButton

