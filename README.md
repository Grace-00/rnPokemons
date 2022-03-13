# rnPokemons

## Work in Progress

<img width="405" alt="Homepage" src="https://user-images.githubusercontent.com/30959973/158058614-74d6c74d-d6da-42df-8802-3000d4efd5c2.png">
<img width="403" alt="DetailScreen" src="https://user-images.githubusercontent.com/30959973/158058616-8eefaa90-7b5a-4300-87d9-b90994b0ab80.png">


## Project objective

Create two screens using React Native and Typescript + any API or other technologies you like.

### Project idea

The user can see:
- a list of Pokemons in the Homepage
- a Pokemon Detail page after clicking on a Pokemon image in the Homepage

API used: https://pokeapi.co/docs/v2 <br/> 
To see all endpoints available: https://pokeapi.co/docs/v2#resource-listspagination-section

Endpoint used: https://pokeapi.co/api/v2/pokemon

## To start the project

Use the following:

- npx react-native start to start Metro from your terminal project folder
open another terminal from your project folder and run:
- npx react-native run-ios to start the iOS simulator (project working on iPhone 13 iOS 15.2 - NOT working on Android)

## Activity Log

03/03/22 Time estimates: 4h+ <br/> 
Mac softare update + Xcode and RN installation following: https://reactnative.dev/docs/environment-setup. <br/> 
Error encountered was related to: https://stackoverflow.com/questions/58984666/reverting-to-nvm-default-version <br/> 
Non-blocking simulator error: "Unable to boot device in current state: Booted" <br/> 

04/03/22 Time estimates: 2h <br/> 
API PokemonsList (Interfaces) + FlatList component 

05/03/22 Time estimates: 4h <br/>
Navigation routing (https://reactnavigation.org/docs/getting-started) + React Native vector icons (https://github.com/oblador/react-native-vector-icons) <br/>
Something wasn't working correctly since I installed the navigator... so after many attempts at trying to figure out what went wrong, I restarted the project 💁‍♀️

12/03/22 Time estimates: 4h <br/>
Created different branches depending on the feature I was adding.
Navigator is finally working! NOT to use with SafeAreaView.

13/03/22 Time estimates: 2h <br/>
Added DetailScreen component.

# <b>TO DO:</b> <br/>
- adding pagination component 
- defining Props types + avoid 'any' AT ALL COSTS 🤦‍♀️
