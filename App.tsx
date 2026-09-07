import "./global.css";
import React, { useState } from 'react';
import { View, Text, Pressable, SafeAreaView, StatusBar, Image, Platform } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import PlayerScreen from './src/screens/PlayerScreen';
import ProfileScreen from './src/screens/ProfileScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'home' | 'player' | 'profile'>('home');
  const [isMiniPlaying, setIsMiniPlaying] = useState<boolean>(true);

  return (
    <SafeAreaView className={`flex-1 bg-spotifyBlack ${Platform.OS === 'android' ? 'pt-7' : ''}`}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />

      {/* Renderizado condicional de la pantalla seleccionada */}
      <View className="flex-1 bg-spotifyBlack">
        {currentScreen === 'home' && <HomeScreen />}
        {currentScreen === 'player' && <PlayerScreen />}
        {currentScreen === 'profile' && <ProfileScreen />}
      </View>

      {/* Mini Reproductor Flotante estilo Spotify (visible en Home y Perfil) */}
      {currentScreen !== 'player' && (
        <View className="mx-2 mb-1">
          <Pressable 
            onPress={() => setCurrentScreen('player')}
            className="flex-row items-center justify-between bg-zinc-900 px-3 py-2 rounded-xl border border-zinc-800/80 active:opacity-90 shadow-md"
          >
            <View className="flex-row items-center flex-1 mr-2">
              <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=100&q=80' }} 
                className="w-10 h-10 rounded-lg mr-3"
              />
              <View className="flex-1">
                <Text className="text-white font-bold text-xs" numberOfLines={1}>
                  Blinding Lights
                </Text>
                <Text className="text-spotifyGreen text-[11px] font-medium" numberOfLines={1}>
                  The Weeknd • Reproduciendo
                </Text>
              </View>
            </View>

            <View className="flex-row items-center gap-3 pr-1">
              <Pressable 
                onPress={() => setIsMiniPlaying(!isMiniPlaying)}
                className="p-1 active:opacity-60"
              >
                <Text className="text-white text-base">
                  {isMiniPlaying ? '⏸' : '▶'}
                </Text>
              </Pressable>
              <Pressable 
                onPress={() => setCurrentScreen('player')}
                className="p-1 active:opacity-60"
              >
                <Text className="text-gray-400 text-base">⛶</Text>
              </Pressable>
            </View>
          </Pressable>
        </View>
      )}

      {/* Barra de navegación inferior estilo Spotify */}
      <View className="flex-row justify-around bg-spotifyDarkGray py-3 border-t border-gray-900 px-2">
        {/* Tab 1: Inicio */}
        <Pressable 
          onPress={() => setCurrentScreen('home')} 
          className="items-center px-4 py-1 active:opacity-60"
        >
          <Text className="text-lg">{currentScreen === 'home' ? '🏠' : '🏚️'}</Text>
          <Text className={`text-[11px] mt-0.5 ${currentScreen === 'home' ? 'text-spotifyGreen font-black' : 'text-gray-400 font-medium'}`}>
            Inicio
          </Text>
        </Pressable>

        {/* Tab 2: Reproductor */}
        <Pressable 
          onPress={() => setCurrentScreen('player')} 
          className="items-center px-4 py-1 active:opacity-60"
        >
          <Text className="text-lg">{currentScreen === 'player' ? '🎧' : '🎵'}</Text>
          <Text className={`text-[11px] mt-0.5 ${currentScreen === 'player' ? 'text-spotifyGreen font-black' : 'text-gray-400 font-medium'}`}>
            Reproductor
          </Text>
        </Pressable>

        {/* Tab 3: Perfil */}
        <Pressable 
          onPress={() => setCurrentScreen('profile')} 
          className="items-center px-4 py-1 active:opacity-60"
        >
          <Text className="text-lg">{currentScreen === 'profile' ? '👤' : '👥'}</Text>
          <Text className={`text-[11px] mt-0.5 ${currentScreen === 'profile' ? 'text-spotifyGreen font-black' : 'text-gray-400 font-medium'}`}>
            Perfil
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}