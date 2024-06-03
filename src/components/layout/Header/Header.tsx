import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

//Contexts
import { WeatherContext } from "../../../contexts/WeatherContext";

//Components
import MetricToggleSwitch from "../../common/MetricToggleSwitch/MetricToggleSwitch";

//Styles
import styles from "./Header.module.scss";

type Inputs = {
    locationQuery: string;
};

const Header = () => {
    const { setQuery } = useContext(WeatherContext);

    const { register, handleSubmit, resetField } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => formSubmit(data);

    function formSubmit(data: Inputs) {
        setQuery(data.locationQuery);
        resetField("locationQuery");
    }
    return (
        <header className={styles.headerContainer}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Buscar cidade" {...register("locationQuery", { required: true })} />
            </form>

            <MetricToggleSwitch />
        </header>
    );
};

export default Header;
