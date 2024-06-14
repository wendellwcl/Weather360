import { useContext, useLayoutEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

//Assets
import icon from "../../../assets/svg/icon.svg";

//Components
import CustomInput from "../../common/CustomInput/CustomInput";

//Contexts
import { LoadingContext } from "../../../contexts/LoadingContext";
import { WeatherContext } from "../../../contexts/WeatherContext";

//Styles
import styles from "./InitialScreen.module.scss";

type Inputs = {
    location: string;
};

const InitialScreen = () => {
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

    return (
        <div className={styles["initial-screen"]}>
            <div className={styles["c-form"]}>
                <div className={styles["c-form__icon"]}>
                    <img src={icon} alt="icone Weather360" />
                </div>

                <h2 className={styles["c-form__title"]}>Pesquisar localização</h2>

                <form onSubmit={handleSubmit(onSubmit)} className={styles["form"]}>
                    <CustomInput label="Localização:" {...register("location")} />
                    <button type="submit" className={styles["form__btn"]}>
                        Pesquisar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default InitialScreen;
