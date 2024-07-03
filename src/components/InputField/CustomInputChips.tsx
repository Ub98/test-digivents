import { Controller } from "react-hook-form";
import "./Input.scss";
import { Chips } from "primereact/chips";

const CustomInputChips = ({ inputValues }: any) => {
  return (
    <div className="input-contain">
      <div className="p-inputgroup flex-1">
        <Controller
          name={inputValues!.name}
          control={inputValues?.control}
          render={({ field }) => (
            <Chips
              id={inputValues!.name}
              {...field}
              placeholder={inputValues!.placeholder}
              keyfilter={inputValues?.keyfilter}
              separator=","
            />
          )}
        />
      </div>
    </div>
  );
};

export default CustomInputChips;
