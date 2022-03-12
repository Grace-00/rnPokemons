import React, {useState, useEffect} from 'react';
import {getPokemonsFromCurrentPage} from './services/pokemonsApi';
import {Pokemons} from './Interfaces';
import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  View,
  Text,
  Image,
} from 'react-native';

const App = () => {
  const [pokemons, setPokemons] = useState<Pokemons[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPokemonsFromCurrentPage().then(pokemons_ => {
      setPokemons(pokemons_);
      setLoading(false);
    });
  }, []);

  const renderItem = ({item}: {item: any}) => {
    return (
      <View style={styles.PokemonListContainer}>
        <Image
          source={{uri: item.sprites.front_default}}
          style={styles.pokeImage}
        />
        <Text style={styles.pokeItemText}>{item.name}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      {loading && <ActivityIndicator size="large" color="#0064e1" />}
      {!loading && (
        <FlatList
          data={pokemons}
          renderItem={renderItem}
          keyExtractor={(item: any) => {
            return item.name;
          }}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  PokemonListContainer: {
    borderStyle: 'solid',
    borderColor: '#fff',
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FAFAFA',
  },
  pokeImage: {
    height: 80,
    width: 80,
  },
  pokeItemText: {
    color: 'black',
    fontSize: 24,
  },
});

export default App;
