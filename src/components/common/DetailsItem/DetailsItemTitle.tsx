//Styles
import styles from "./DetailsItemTitle.module.scss";

interface IDetailsItemTitleProps {
    icon?: React.ReactNode;
    title: string;
}

const DetailsItemTitle = ({ icon, title }: IDetailsItemTitleProps) => {
    return (
        <div className={styles["details-title"]}>
            {icon}
            <p className={styles["details-title__text"]}>{title}</p>
        </div>
    );
};

export default DetailsItemTitle;
