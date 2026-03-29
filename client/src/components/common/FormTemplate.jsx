import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Select, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";

const FormTemplate = ({ formControls, formData, setFormData, onSubmit, buttonText }) => {
  const renderInputsByComponentType = (control) => {
    let element = null;
    const value = formData[control.name] || "";

    switch (control.componentType) {
      case "input":
        element = (
          <Input
            id={control.name}
            name={control.name}
            type={control.type}
            placeholder={control.placeholder}
          />
        );
        break;

      case "select":
        element = (
          <Select>
            <SelectTrigger className={`w-full`}>
              <SelectValue placeholder={control.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {control.options && control.options.length > 0
                ? control.options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );
        break;

      case "textarea":
        element = (
          <Textarea
            id={control.name}
            name={control.name}
            placeholder={control.placeholder}
          ></Textarea>
        );
        break;

      default:
        element = (
          <Input
            id={control.name}
            name={control.name}
            type={control.type}
            placeholder={control.placeholder}
          />
        );
    }
    return element;
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {formControls.map((control) => (
          <div className="grid w-full gap-1.5" key={control.name}>
            <Label htmlFor={control.name}>{control.label}</Label>
            {renderInputsByComponentType(control)}
          </div>
        ))}
      </div>
      <Button type="submit" className='mt-2 w-full'>{buttonText || "Submit"}</Button>
    </form>
  );
};

export default FormTemplate;
