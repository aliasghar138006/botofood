import Banner from "../modules/Banner";
import Instruction from "../modules/Instruction";
import Introduce from "../modules/Introduce";
import Items from "../modules/Items";
import Logos from "../modules/Logos";
import Menu from "../modules/Menu";
import Restriction from "../modules/Restriction";
import styles from "./MainPage.module.css"
function MainPage() {
    return (
        <div className={styles.container}>
            <Banner />
            <Items />
            <Introduce />
            <Logos />
            <Instruction />
            <Menu />
            <Restriction />
        </div>
    );
}

export default MainPage;