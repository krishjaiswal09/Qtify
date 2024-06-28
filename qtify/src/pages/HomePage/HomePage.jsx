import React from "react";
import { useOutletContext } from "react-router-dom";
import { fetchFilters } from "../../api/api";
import Hero from "../../components/Hero/Hero";
import styles from "../HomePage/HomePage.module.css";
import Section from "../../components/Section/Section";

export default function HomePage() {
  const { data } = useOutletContext();
  const { newAlbums, topAlbums, songs } = data;

  return (
    <div>
      <Hero />
      <div className={styles.wrapper}>
        <Section title="Top Album" data={topAlbums} type="album" />
        <Section title="New Album" data={newAlbums} type="album" />
        <Section
          className={styles.wrapper}
          title="Songs"
          data={songs}
          filterSource={fetchFilters}
          type="song"
        />
      </div>
    </div>
  );
}
