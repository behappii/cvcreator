import { useState } from "react";
import "./InputForm.css"

export default function InputForm() {
    const [form, setForm] = useState({
        nickname: "",
        firstname: "",
        lastname: "",
        age: 0,
        email: "",
        description: ""
    });

    const HandleChangeInput = (e: any) => {
        const key = e.target.name;
        const newValue = e.target.value;

        setForm((prev) => ({
            ...prev,
            [key]: newValue,
        }));
    };

    const HandleMouseEnter = () => {
        console.log("hello")
            {
                <p className="avatar-change">hello</p>
            }
    }

    console.log(form);

    return (
        <div className="inputform">
            <h3>Insert your data</h3>
            <input placeholder="Nickname" name="nickname" onChange={HandleChangeInput}/>
            <input type="text" placeholder="First name" name="firstname" onChange={HandleChangeInput}/>
            <input type="text" placeholder="Last name" name="lastname" onChange={HandleChangeInput}/>
            <input type="number" placeholder="Age" name="age" onChange={HandleChangeInput}/>
            <input type="text" placeholder="Email" name="email" onChange={HandleChangeInput}/>
            <textarea placeholder="Description" name="description" onChange={HandleChangeInput}/>
            <button onClick={() => {}}>Add workplace</button>
            <h3>Your photo</h3>
            <div className="avatar">
                <img src="../pics/avatar.jpg" alt="avatar" onMouseEnter={() => {HandleMouseEnter()}}/>
            </div>
            <button style={{width: "100%"}}>Generate PDF</button>
        </div>
    );
}
