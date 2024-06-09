import { useContext, useLayoutEffect, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

//Contexts
import { WeatherContext } from "../../../contexts/WeatherContext";

//Components
import MetricToggleSwitch from "../../common/MetricToggleSwitch/MetricToggleSwitch";

//Icons
import { FaSearch } from "react-icons/fa";

//Styles
import styles from "./Header.module.scss";

type Inputs = {
    locationQuery: string;
};

const Header = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const { setQuery } = useContext(WeatherContext);

    const { register, handleSubmit, resetField } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => formSubmit(data);

    function formSubmit(data: Inputs) {
        setQuery(data.locationQuery);
        resetField("locationQuery");
    }

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
        <header className={styles.headerContainer}>
            <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
                <div className={styles.inputContainer}>
                    <input type="text" {...register("locationQuery", { required: true })} />
                    <label htmlFor="location">
                        <FaSearch /> Buscar localização
                    </label>
                </div>
            </form>

            <MetricToggleSwitch />
        </header>
    );
};

export default Header;
