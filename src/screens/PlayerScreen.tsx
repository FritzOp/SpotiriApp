import React, { useState } from 'react';
import { View, Text, Image, Pressable, ScrollView } from 'react-native';

export default function PlayerScreen() {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isLiked, setIsLiked] = useState<boolean>(true);
  const [isShuffle, setIsShuffle] = useState<boolean>(false);
  const [isRepeat, setIsRepeat] = useState<boolean>(false);

  return (
    <ScrollView 
      className="flex-1 bg-spotifyBlack" 
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between', padding: 24, paddingTop: 52, paddingBottom: 90 }}
      showsVerticalScrollIndicator={false}
    >
      {/* Header Superior del Reproductor */}
      <View className="flex-row items-center justify-between w-full mb-4">
        <Pressable className="p-2 -ml-2 active:opacity-60">
          <Text className="text-white text-xl">⌄</Text>
        </Pressable>
        <View className="items-center">
          <Text className="text-gray-400 text-[10px] tracking-widest uppercase font-bold">Reproduciendo desde playlist</Text>
          <Text className="text-white text-xs font-bold mt-0.5">Top 50 - Global 🌎</Text>
        </View>
        <Pressable className="p-2 -mr-2 active:opacity-60">
          <Text className="text-white text-lg">⋮</Text>
        </Pressable>
      </View>
      
      {/* Carátula del Álbum (Image Remota) */}
      <View className="items-center my-4">
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80' }}
          className="w-72 h-72 rounded-2xl shadow-2xl border border-gray-800"
          resizeMode="cover"
        />
      </View>

      {/* Info de la Canción y Botón Me Gusta */}
      <View className="w-full mt-2">
        <View className="flex-row justify-between items-center mb-4">
          <View className="flex-1 mr-4">
            <Text className="text-white text-2xl font-black" numberOfLines={1}>Blinding Lights</Text>
            <Text className="text-gray-400 text-base font-medium mt-0.5">The Weeknd • After Hours</Text>
          </View>
          <Pressable 
            onPress={() => setIsLiked(!isLiked)} 
            className="p-2 active:opacity-60"
          >
            <Text className={`text-2xl ${isLiked ? 'text-spotifyGreen' : 'text-gray-400'}`}>
              {isLiked ? '💚' : '🤍'}
            </Text>
          </Pressable>
        </View>

        {/* Barra de Progreso Simulada */}
        <View className="w-full bg-spotifyLightGray h-1.5 rounded-full mb-2">
          <View className="w-[45%] bg-spotifyGreen h-1.5 rounded-full" />
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-400 text-xs font-medium">01:42</Text>
          <Text className="text-gray-400 text-xs font-medium">03:20</Text>
        </View>
      </View>

      {/* Controles de Reproducción Interactivos */}
      <View className="flex-row items-center justify-between w-full my-4 px-2">
        {/* Shuffle */}
        <Pressable 
          onPress={() => setIsShuffle(!isShuffle)} 
          className="p-2 active:opacity-60"
        >
          <Text className={`text-xl ${isShuffle ? 'text-spotifyGreen' : 'text-gray-400'}`}>🔀</Text>
        </Pressable>

        {/* Prev */}
        <Pressable className="p-2 active:opacity-60">
          <Text className="text-white text-2xl">⏮</Text>
        </Pressable>

        {/* Play/Pause Central con respuesta de estado */}
        <Pressable 
          onPress={() => setIsPlaying(!isPlaying)}
          className="bg-white w-16 h-16 rounded-full items-center justify-center active:opacity-80 active:scale-95 shadow-lg"
        >
          <Text className="text-black text-2xl font-black">
            {isPlaying ? '⏸' : '▶'}
          </Text>
        </Pressable>

        {/* Next */}
        <Pressable className="p-2 active:opacity-60">
          <Text className="text-white text-2xl">⏭</Text>
        </Pressable>

        {/* Repeat */}
        <Pressable 
          onPress={() => setIsRepeat(!isRepeat)} 
          className="p-2 active:opacity-60"
        >
          <Text className={`text-xl ${isRepeat ? 'text-spotifyGreen' : 'text-gray-400'}`}>🔁</Text>
        </Pressable>
      </View>

      {/* Pie de Conectividad y Acciones */}
      <View className="flex-row justify-between items-center w-full px-2 pt-2 border-t border-gray-900">
        <Pressable className="flex-row items-center active:opacity-70">
          <Text className="text-spotifyGreen text-sm mr-2">📱</Text>
          <Text className="text-spotifyGreen text-xs font-bold">Dispositivo: Spotiri-Audio (Bluetooth)</Text>
        </Pressable>
        <Pressable className="p-2 active:opacity-60">
          <Text className="text-gray-400 text-base">📤</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}