"use client";
import React, { useState, useEffect } from "react";
import styles from "../styles/Store.module.css";

export default function SearchBar() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function fetchProducts() {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setProducts(data);
        }
        fetchProducts();
    }, []);

    const filtered = products.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <input
                className={styles.searchInput}
                type="text"
                placeholder="Search products…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <table className={styles.productTable}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody>
                    {filtered.map((p) => (
                        <tr key={p.id}>
                            <td>{p.title}</td>
                            <td>
                                <img src={p.image} width="50" height="50" alt={p.title} />
                            </td>
                            <td>${p.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
