import { ReactNode, forwardRef, useLayoutEffect, useRef } from "react";

//Styles
import styles from "./CustomInput.module.scss";

interface ICustomInputProps {
    label: string;
    icon?: ReactNode;
}

const CustomInput = forwardRef<HTMLInputElement, ICustomInputProps>(({ label, icon, ...props }, ref) => {
    const inputWrapperRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        inputWrapperRef.current?.querySelector("input")?.addEventListener("blur", (event) => {
            const target = event.target as HTMLInputElement;

            if (target.value != "") {
                target.nextElementSibling?.classList.add("filled");
            } else {
                target.nextElementSibling?.classList.remove("filled");
            }
        });
    }, []);

    return (
        <div className={styles["custom-input"]} ref={inputWrapperRef}>
            <input type="text" className={styles["custom-input__input"]} ref={ref} {...props} />
            <label className={styles["custom-input__label"]} htmlFor="location">
                {icon} {label}
            </label>
        </div>
    );
});

export default CustomInput;
