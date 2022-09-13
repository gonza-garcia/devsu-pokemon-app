/* eslint-disable */
import React from 'react';
import PokemonController from './components/Pokemon/PokemonController/PokemonController';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import styles from './App.module.scss';

function App() {
  return (
    <>
      <Header title="Pokemon App" subtitle="A little app to manage your pokemons, you can Add, Edit, Delete and Search." />

      <main className={styles.main}>
        <PokemonController />
      </main>

      <Footer title="Made by Gonza García" />
    </>
  );
}

export default App;
