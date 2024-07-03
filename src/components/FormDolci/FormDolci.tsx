import CustomInputChips from "components/InputField/CustomInputChips";
import CustomInputDate from "components/InputField/CustomInputDate";
import CustomInputText from "components/InputField/CustomInputText";
import { DolciDTO } from "models/Dolci";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import "./FormDolci.scss";
import { addDolce } from "services/DolciService";
import { useNavigate } from "react-router-dom";

const FormDolci = () => {
  const navigate = useNavigate();
  const defaultFormValue: DolciDTO = {
    nome: "",
    prezzo: undefined,
    data: undefined,
    quantita: undefined,
    ingredienti: [],
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    register,
  } = useForm({
    defaultValues: defaultFormValue,
    shouldFocusError: false,
  });

  const submitForm = (data: DolciDTO) => {
    addDolce(data).then(() => {
      navigate("/");
    });
  };

  return (
    <>
      <form id="formDolci" onSubmit={handleSubmit(submitForm)}>
        <CustomInputText
          inputValues={{
            control: control,
            register: register,
            errors: errors,
            watch: watch,
            placeholder: "Nome",
            name: "nome",
            required: true,
          }}
        />
        <CustomInputText
          inputValues={{
            control: control,
            register: register,
            errors: errors,
            watch: watch,
            placeholder: "Prezzo",
            name: "prezzo",
            required: true,
            keyfilter: "num",
          }}
        />
        <CustomInputText
          inputValues={{
            control: control,
            register: register,
            errors: errors,
            watch: watch,
            placeholder: "Quantità",
            name: "quantita",
            required: true,
            keyfilter: "int",
          }}
        />
        <CustomInputDate
          inputValues={{
            control: control,
            register: register,
            errors: errors,
            watch: watch,
            placeholder: "Data",
            name: "data",
            required: true,
          }}
        />
        <CustomInputChips
          inputValues={{
            control: control,
            register: register,
            errors: errors,
            watch: watch,
            placeholder: "Ingredienti",
            name: "ingredienti",
            required: true,
          }}
        />
        <div className="btn-contain">
          <Button type="submit" label="Aggiungi" />
        </div>
      </form>
    </>
  );
};

export default FormDolci;
