import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { Icon } from 'react-native-vector-icons/FontAwesome5';

import CategoriesScreen from '../screens/CategoriesScreen';
import BooksScreen from '../screens/BooksScreen';
import BooksDetailScreen from '../screens/BooksDetailScreen';
import FavScreen from '../screens/FavScreen';
import AllBooksScreen from '../screens/AllBooksScreen';

const AppNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
  },
  Books: {
    screen: BooksScreen,
  },
  BooksDetail: {
    screen: BooksDetailScreen,
  },
});

const FavStack = createDrawerNavigator({
  Favourites: {
    screen: FavScreen,
  },
  BooksDetail: {
    screen: BooksDetailScreen,
  },
  Categories: {
    screen: CategoriesScreen,
  },
});

const AllBooksStack = createStackNavigator({
  Favourites: {
    screen: AllBooksScreen,
  },
  BooksDetail: {
    screen: BooksDetailScreen,
  },
  Categories: {
    screen: CategoriesScreen,
  },
});

const TabNavigator = createBottomTabNavigator(
  {
    Categories: {
      screen: AppNavigator,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => {
          return <Icon name="book-open" size={25} color={tintColor} />;
        },
      },
    },
    Books: {
      screen: AllBooksStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => {
          return <Icon name="book" size={25} color={tintColor} />;
        },
      },
    },
    Favourites: {
      screen: FavStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => {
          return <Icon name="star" size={25} color={tintColor} />;
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'black',
      tabStyle: {
        height: 50,
        zIndex: 99,
        borderColor: 'white',
        borderTopWidth: 0,
      },
      labelStyle: {
        fontSize: 12,
        paddingTop: 2,
        paddingBottom: 3,
        fontFamily: 'halfmoon bold',
      },
    },
  },
);

const Drawer = createDrawerNavigator({
  Categories: TabNavigator,
  Books: AllBooksStack,
  Favourites: FavStack,
});
const AppContainer = createAppContainer(Drawer);

export default AppContainer;
