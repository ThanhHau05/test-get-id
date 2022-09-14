import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
const http = require('axios')

export default function Home() {
  const [result, setResult] = useState('');
  const _handle = () => {
    var client = new XMLHttpRequest();
    client.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let text = client.responseText.match(/(?<=entity_id":").*?(?="}])/gm);
        setResult(text[0])
      }
    }
client.open('GET', 'http://cors-anywhere.herokuapp.com/https://www.facebook.com/Profile.NguyenThanhHau', true);
client.send();
    
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={_handle}>result</button>
      <h2 >{result}</h2>
</div>
  );
}