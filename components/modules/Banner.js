import Link from "next/link";
import styles from "./Banner.module.css"

function Banner() {
    return (
        <div className={styles.container}>
            <div className={styles.right}>
                <img src="images/banner.png" alt="Food" />
            </div>
            <div className={styles.left}>
                <h3>BotoFood</h3>
                <span>Food Delivery and Takeout!</span>
                <p>BotoFood is an online food ordering and delivery platform launched by Uber in 2014. Meals are delivered by couriers using cars, scooters, bikes, or on foot.</p>
                <Link href="/menu/" legacyBehavior><a rel="noreferrer">See All</a></Link>

            </div>
        </div>
    );
}

export default Banner;