import { useNavigate } from "react-router-dom";
import Theme from "../../components/Theme";
import * as C from "./styles";
import { FormActions, useForm } from "../../contexts/FormContext";
import { ChangeEvent, useEffect } from "react";
import { Link } from "react-router-dom";

export default function FormStep3() {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3,
      });
    }
  }, []);

  const handleNextStep = () => {
    if (state.email !== "" && state.github !== "") {
      navigate("/step4");
    } else {
      alert("Preencha os dados");
    }
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: event.target.value,
    });
  };

  const handleGithubChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGitHub,
      payload: event.target.value,
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 3/3</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha com seus contatos para conseguirmos entrar em contato.</p>

        <hr />

        <label htmlFor="">
          Qual seu e-mail?
          <input
            type="email"
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label htmlFor="">
          Qual seu GitHub?
          <input
            type="url"
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>

        <Link className="backButton" to={"/step2"}>
          Voltar
        </Link>

        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
}
