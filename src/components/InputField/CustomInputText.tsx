import { InputText } from "primereact/inputtext";
import { Controller } from "react-hook-form";
import "./Input.scss";

const CustomInputText = ({ inputValues }: any) => {
  return (
    <div className="input-contain">
      <div className="p-inputgroup flex-1">
        <Controller
          name={inputValues!.name}
          control={inputValues?.control}
          render={({ field }) => (
            <InputText
              id={inputValues!.name}
              {...field}
              placeholder={inputValues!.placeholder}
              keyfilter={inputValues?.keyfilter}
              required={inputValues?.required}
            />
          )}
        />
      </div>
    </div>
  );
};

export default CustomInputText;
