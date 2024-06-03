import { useContext, useLayoutEffect, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

//Contexts
import { LoadingContext } from "../../../contexts/LoadingContext";
import { WeatherContext } from "../../../contexts/WeatherContext";

//Styles
import styles from "./InitialScreen.module.scss";

//Assets
import icon from "../../../assets/svg/icon.svg";

type Inputs = {
    location: string;
};

const InitialScreen = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const { setLoading } = useContext(LoadingContext);
    const { setQuery } = useContext(WeatherContext);

    const { register, handleSubmit, setFocus } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => formSubmit(data);

    const formSubmit = (data: Inputs) => {
        setLoading(true);
        setQuery(data.location);
    };

    useLayoutEffect(() => {
        setFocus("location");
    }, []);

    useLayoutEffect(() => {
        formRef.current?.querySelectorAll("input").forEach((element) => {
            element.addEventListener("blur", (event) => {
                const target = event.target as HTMLInputElement;

                if (target.value != "") {
                    target.nextElementSibling?.classList.add("filled");
                } else {
                    target.nextElementSibling?.classList.remove("filled");
                }
            });
        });
    }, []);

    return (
        <div className={styles.initialScreen}>
            <div className={styles.formContainer}>
                <div className={styles.icon}>
                    <img src={icon} alt="icone Weather360" />
                </div>

                <h2>Pesquisar localização</h2>

                <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
                    <div className={styles.inputContainer}>
                        <input id="location" type="text" {...register("location", { required: true })} />
                        <label htmlFor="location">Localização:</label>
                    </div>

                    <button type="submit">Pesquisar</button>
                </form>
            </div>
        </div>
    );
};

export default InitialScreen;
