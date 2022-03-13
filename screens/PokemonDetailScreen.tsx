import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getPokemonDetail} from '../services/pokemonsApi';
import {Pokemon} from '../Interfaces';

const PokemonDetailScreen = (props: {route: {params: number}}) => {
  const [pokemon, setPokemon] = useState<Pokemon>({});

  useEffect(() => {
    getPokemonDetail(props.route.params).then(json => setPokemon(json.data));
  }, [props.route.params]);

  const type = pokemon?.types
    ?.map((t: any) => {
      return t.type.name;
    })
    .join(' ');

  return (
    <>
      <View style={styles.pokemonContainer}>
        <Image
          source={{uri: pokemon.sprites?.front_default}}
          style={styles.pokeImage}
        />
        <Text style={styles.pokemonText}>{pokemon.name}</Text>
      </View>
      <View style={styles.pokemonDetailContainer}>
        <View style={styles.pokemonContainer}>
          <Text>Pokemon Type:</Text>
          <Text style={styles.pokemonText}>{type}</Text>
        </View>
      </View>
    </>
  );
};

export default PokemonDetailScreen;

const styles = StyleSheet.create({
  pokemonContainer: {
    borderStyle: 'solid',
    borderColor: '#fff',
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FAFAFA',
  },
  pokemonDetailContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  pokemonText: {
    color: 'black',
    fontSize: 24,
  },
  pokeImage: {
    height: 80,
    width: 80,
  },
});
