import Head from "next/head";
import styles from "../styles/Home.module.css";
import Counter from "../components/Counter";
import GitHub from "../components/GitHub";
import Link from "next/link";


export default function Home() {
    return (
        <div className="{styles.container}">
            <Head>
                <title>Mya Christine Steckler</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <h1>Welcome To My NextJS Assignment</h1>

            <Counter name={"Counter 1"} mult={1} size={2}/>
            <Counter name={"Counter 2"} mult={2} size={0.5}/>

            <hr style={{ width: "80%", marginTop: "1rem" }} />

            <GitHub/>

            <hr style={{ width: "80%", marginTop: "1rem" }} />

            <p>Check out my{" "}<Link href="/store" style={{ color: "blue" }}>fake store</Link>.</p>        
            
        </div>
    );
}