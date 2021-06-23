import React from 'react'

const Userinputs = () => {
    return (
        <form>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" />
            </div>

            <div>
                <label htmlFor="age">Age</label>
                <input type="number" name="age" id="age" />
            </div>

            <button type="submit">AddUser</button>
        </form>
    )
}

export default Userinputs
