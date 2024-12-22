import { useState } from "react"

export default function InputValues() {
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

    console.log(form);

    return (
        <div>
            <input type="text" placeholder="Nickname" name="nickname" onChange={HandleChangeInput}/>
            <input type="text" placeholder="First name" name="firstname" onChange={HandleChangeInput}/>
            <input type="text" placeholder="Last name" name="lastname" onChange={HandleChangeInput}/>
            <input type="number" placeholder="Age" name="age" onChange={HandleChangeInput}/>
            <input type="text" placeholder="Email" name="email" onChange={HandleChangeInput}/>
            <input type="text" placeholder="Description" name="description" onChange={HandleChangeInput}/>

        </div>
    );
}
