import * as React from "react";
import * as ReactDOM from "react-dom";
import { Field, Form, FormElement } from "@progress/kendo-react-form";
import { FormInput } from "../components/Inputs/Input";
import { Button } from "@progress/kendo-react-buttons";
import { inputValidator } from "../components/validators/Validators";

export default function InputsSampleForm(){
    
    const max = 20;
    const handleSubmit = (dataItem: any) => {
        alert(JSON.stringify(dataItem, null, 2));

        // if(dataItem.username === "123")
        // {
        //     alert("Username = 123");
        // }
        // else
        // {
        //     alert("Username != 123");
        // }
    }

    return(
      <Form
        initialValues={{
            username: "",
            password: ""
        }}
        onSubmit={handleSubmit}
        render={(formRenderProps) => (
            <FormElement style={{ width: 250, position: "absolute" }}>

                {/* Normal input field */}
                <Field
                    id={"username"}
                    name={"username"}
                    label={"Username:"}
                    max={max}
                    value={formRenderProps.valueGetter("username")}
                    hint={"Hint: Enter your text here"}
                    component={FormInput}
                    validator={inputValidator}
                />

                {/* Password Field */}
                <Field
                    id={"password"}
                    name={"password"}
                    type={"password"}
                    label={"Password:"}
                    max={max}
                    value={formRenderProps.valueGetter("password")}
                    hint={"Hint: Enter your password here"}
                    component={FormInput}
                    validator={inputValidator}
                />
                <div className="k-form-buttons k-justify-content-end">
                    <Button
                        primary={true}
                        type={"submit"}
                        disabled={!formRenderProps.allowSubmit}
                    >
                        Send
                    </Button>
                </div>
            </FormElement>
        )}
      />
    );
}