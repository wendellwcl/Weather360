//Interfaces
import { IChildren } from "../../../interfaces/IChildren.interface";

//Styles
import styles from "./DetailsItemRoot.module.scss";

const DetailsItemRoot = ({ children }: IChildren) => {
    return <div className={styles.detailsItemContainer}>{children}</div>;
};

export default DetailsItemRoot;
