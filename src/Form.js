import React from "react";

export default function TeamForm(props) {
    const { values, updates, submit } = props

    const onChange = evt => {
        
        const name = evt.target.name;
        const { value } = evt.target;

        updates(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form onSubmit={onSubmit}>
            <div>

                <label>Name
                    <input
                        name="name"
                        value={values.username}
                        placeholder="Type Your Name"
                        maxLength="30"
                        onChange={onChange}
                    />
                </label>

                <label>Email
                    <input 
                        type="email"
                        name="email"
                        value={values.email}
                        placeholder="Type An Email"
                        onChange={onChange}
                    />
                </label>

                <label>Role
                    <select value={values.role} name="role" onChange={onChange}>
                        <option value="">-- Select A Role --</option>
                        <option value="Web Developer">Web Developer</option>
                        <option value="Software Engineer">Software Engineer</option>
                        <option value="Software Developer">Software Developer</option>
                        <option value="Front End Developer">Front End Developer</option>
                        <option value="Network Engineer">Network Engineer</option>
                        <option value="Full Stack Developer">Full Stack Developer</option>
                    </select>
                </label>

                <div>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )
}