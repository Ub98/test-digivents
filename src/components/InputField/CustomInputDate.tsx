import { Calendar } from "primereact/calendar";
import { Controller } from "react-hook-form";

const CustomInputDate = ({ inputValues }: any) => {
  return (
    <div className="input-contain">
      <div className="p-inputgroup flex-1">
        <Controller
          name={inputValues!.name}
          control={inputValues?.control}
          render={({ field }) => (
            <Calendar
              {...field}
              placeholder={inputValues?.placeholder}
              dateFormat="dd/mm/yy"
              value={field.value}
              onChange={(e) => field.onChange(e.value)}
              required={inputValues?.required}
              showIcon
            />
          )}
        />
      </div>
    </div>
  );
};

export default CustomInputDate;
