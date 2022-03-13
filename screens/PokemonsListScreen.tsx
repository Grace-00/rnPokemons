import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  View,
  Pressable,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Pokemons} from '../Interfaces';
import {getPokemonsFromCurrentPage} from '../services/pokemonsApi';

const PokemonsListScreen = props => {
  const [pokemons, setPokemons] = useState<Pokemons[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPokemonsFromCurrentPage().then(pokemons_ => {
      setPokemons(pokemons_);
      setLoading(false);
    });
  }, []);

  const goToPokemon = (id: number) => () => {
    props.navigation.navigate('pokemon', id);
  };

  const renderItem = ({item}: {item: any}) => {
    return (
      <View style={styles.pokemonListContainer}>
        <Pressable onPress={goToPokemon(item.id)}>
          <Image
            source={{uri: item.sprites?.front_default}}
            style={styles.pokeImage}
          />
        </Pressable>
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

export default PokemonsListScreen;

const styles = StyleSheet.create({
  pokemonListContainer: {
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
