import styles from "./page.module.css";
import { RepositoryInfo } from "./Github";

export default function Home() {
  return (
    <main className={styles.main}>
      <RepositoryInfo owner="facebook" name="react" />
      <RepositoryInfo owner="facebook" name="react-native" />
      <RepositoryInfo owner="facebook" name="zstd" />
      <RepositoryInfo owner="facebook" name="hhvm" />
    </main>
  );
}
