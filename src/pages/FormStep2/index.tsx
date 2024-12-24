import * as C from "./styles";
import { FormActions, useForm } from "../../contexts/FormContext";
import { useEffect } from "react";
import Theme from "../../components/Theme";
import { useNavigate } from "react-router-dom";
import SelectOption from "../../components/SelectOption";
import { Link } from "react-router-dom";

export default function FormStep2() {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2,
      });
    }
  }, []);

  const handleNextStep = () => {
    if (state.name !== "") {
      navigate("/step3");
    } else {
      alert("Preencha os dados corretamente");
    }
  };

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 2/3</p>
        <h1>{state.name}, o que melhor descreve você</h1>
        <p>
          Escolha a opção que melhor condiz com seu estado atual,
          profissionalmente.
        </p>

        <hr />

        <SelectOption
          title="Sou iniciante"
          description="Comecei a programar há menos de 2 anos"
          icon="😊"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />

        <SelectOption
          title="Sou programador"
          description="Já programo há 2 anos ou mais"
          icon="🥸"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />

        <Link className="backButton" to={"/"}>Voltar</Link>
        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
}
