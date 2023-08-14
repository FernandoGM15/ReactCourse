import Image from "next/image";
import styles from "./about-us.module.css"

const AboutUsPage = () => {
  return (
    <main className="container">
      <h2 className="heading">About us</h2>
      <div className={styles.content}>
        <Image src="/images/nosotros.jpg" width={1000} height={800} alt="About us image" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fuga minima nulla asperiores ea provident, est perspiciatis error non ut! Necessitatibus corrupti nisi delectus ad maiores quibusdam reiciendis illum officia!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias facere, magnam, obcaecati ex maiores dolore neque unde eaque dolores iusto iure, vero modi optio sequi amet ullam nulla. Possimus, eveniet!
          </p>
        </div>
      </div>
    </main>
  );
};
export default AboutUsPage;
