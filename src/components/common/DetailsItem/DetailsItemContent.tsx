//Interfaces
import { IChildren } from "../../../interfaces/IChildren.interface";

//Styles
import styles from "./DetailsItemContent.module.scss";

const DetailsItemContent = ({ children }: IChildren) => {
    return <div className={styles.detailsContentContainer}>{children}</div>;
};

export default DetailsItemContent;
