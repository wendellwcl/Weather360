import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

//Components
import CustomInput from "../../common/CustomInput/CustomInput";
import MetricToggleSwitch from "../../common/MetricToggleSwitch/MetricToggleSwitch";

//Contexts
import { WeatherContext } from "../../../contexts/WeatherContext";

//Icons
import { FaSearch } from "react-icons/fa";

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
        <header className={styles["header"]}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles["form"]}>
                <CustomInput {...register("locationQuery")} label="Buscar localização..." icon={<FaSearch />} />
            </form>

            <MetricToggleSwitch />
        </header>
    );
};

export default Header;
