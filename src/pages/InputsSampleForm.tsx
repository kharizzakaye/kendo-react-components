import * as React from "react";
import * as ReactDOM from "react-dom";
import { Field, Form, FormElement } from "@progress/kendo-react-form";
import { FormInput } from "../components/Inputs/Input";
import { Button } from "@progress/kendo-react-buttons";

export default function InputsSampleForm(){
    
    const max = 20;
    const handleSubmit = (dataItem: any) => {
        alert(JSON.stringify(dataItem, null, 2));
    }

    return(
      <Form
        initialValues={{
            username: ""
        }}
        onSubmit={handleSubmit}
        render={(formRenderProps) => (
            <FormElement>
                <Field
                    id={"username"}
                    name={"username"}
                    label={"Username:"}
                    max={max}
                    value={formRenderProps.valueGetter("username")}
                    hint={"Hint: Enter your text here"}
                    component={FormInput}
                    //validator={inputValidator}
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