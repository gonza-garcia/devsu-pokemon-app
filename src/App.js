/* eslint-disable */
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import PokemonController from './components/Pokemon/PokemonController/PokemonController';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import styles from './App.module.scss';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header title="Pokemon App" subtitle="A little app to manage your pokemons, you can Add, Edit, Delete and Search." />

      <main className={styles.main}>
        <PokemonController />
      </main>

      <Footer title="Made by Gonza García" />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
