import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getPokemonDetail} from '../services/pokemonsApi';
import {Pokemon} from '../Interfaces';

const PokemonDetailScreen = props => {
  const [pokemon, setPokemon] = useState<Pokemon>({});
  useEffect(() => {
    getPokemonDetail(props.route.params).then(json => setPokemon(json.data));
  }, [props.route.params]);

  return (
    <View>
      <Text>{pokemon.name}</Text>
    </View>
  );
};

export default PokemonDetailScreen;

const styles = StyleSheet.create({});
