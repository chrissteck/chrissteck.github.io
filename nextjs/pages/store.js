import Head from "next/head";
import styles from "../styles/Store.module.css";
import SearchBar from "../components/SearchBar";

export default function Store() {
    return (
        <>

        <div className="{styles.fakestore}">

            <Head>
                <h1>Fake Store</h1>
            </Head>

            <h1>Fake Store</h1>
            <p>Welcome to the Fake Store</p>
            <p>Find a variety of products!</p>
            <SearchBar />

        </div>
        
        
        </>
    );
};