import React from 'react'

const InputField = ({text, handleInput, handleSubmit}) => {
    return (
        <div>
            <input type='text' value={text} onChange={(e) => handleInput(e.target.value)} />
            <button onClick={handleSubmit}>Add todo</button>
        </div>
    )
}

export default InputField