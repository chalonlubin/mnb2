import Head from "next/head";
import Layout from "../components/Layout";
import { TextField, Button } from "@mui/material";
import Map from "../components/Map";
import "mapbox-gl/dist/mapbox-gl.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>MNB</title>
        <meta name="description" content="Book sharing based on proximity" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className="container">
          <div className="hero">
            <h1>Welcome to My Neighbor's Bookshelf </h1>
            <h2>Share your book collection, locally!</h2>
          </div>

          <div className="interaction-container">
            <div className="book-container">
              <label htmlFor="book-zip" name="book">
                Find books in your area
              </label>
              <TextField
                id="outlined-basic"
                label="Address or Zip-code"
                variant="outlined"
              />
              <Button variant="contained">Search</Button>
              <label htmlFor="book-input" name="outlined-basic">
                Search for a book near you
              </label>
              <TextField
                id="outlined-basic"
                label="Book Title"
                variant="outlined"
              />
              <Button variant="contained">Search</Button>
            </div>
            <div>
              <Map />
            </div>
          </div>

          <div>Book Information Here when selected</div>
        </main>
      </Layout>
    </>
  );
}
