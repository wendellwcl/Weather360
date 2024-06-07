//Styles
import styles from "./DetailsItemTitle.module.scss";

interface DetailsItemTitleProps {
    icon?: React.ReactNode;
    title: string;
}

const DetailsItemTitle = ({ icon, title }: DetailsItemTitleProps) => {
    return (
        <div className={styles.detailsTitle}>
            {icon}
            <p>{title}</p>
        </div>
    );
};

export default DetailsItemTitle;
