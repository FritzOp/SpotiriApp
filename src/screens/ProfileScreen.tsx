import React, { useState } from 'react';
import { View, Text, Image, Pressable, ScrollView } from 'react-native';

const userPlaylists = [
  { id: 'p1', title: 'Coding & Focus (Synthwave)', songs: '48 canciones', cover: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&q=80' },
  { id: 'p2', title: 'Gym Energy Hype', songs: '32 canciones', cover: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&q=80' },
  { id: 'p3', title: 'Café & Lo-Fi Beats', songs: '85 canciones', cover: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=300&q=80' },
];

const topArtists = [
  { id: 'a1', name: 'The Weeknd', image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=200&q=80' },
  { id: 'a2', name: 'Daft Punk', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=200&q=80' },
  { id: 'a3', name: 'Coldplay', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&q=80' },
  { id: 'a4', name: 'Arctic Monkeys', image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=200&q=80' },
];

export default function ProfileScreen() {
  const [likes, setLikes] = useState<number>(142);
  const [isFollowing, setIsFollowing] = useState<boolean>(false);

  return (
    <ScrollView 
      className="flex-1 bg-spotifyBlack" 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 110 }}
    >
      {/* Banner Superior Panorámico (Image Remota) */}
      <View className="relative w-full h-44 bg-zinc-900">
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1000&q=80' }}
          className="w-full h-full opacity-80"
          resizeMode="cover"
        />
        <View className="absolute inset-0 bg-gradient-to-t from-spotifyBlack via-black/40 to-transparent" />
      </View>

      {/* Cabecera del Perfil con Avatar y Datos */}
      <View className="px-5 -mt-16 items-center">
        {/* Avatar Circular con Borde Spotify */}
        <Image
          source={{ uri: 'https://i.pinimg.com/736x/1e/35/71/1e35711ac298f19836b8c08ad80b42d8.jpg' }}
          className="w-28 h-28 rounded-full border-4 border-spotifyGreen bg-spotifyLightGray shadow-xl"
        />

        <Text className="text-white text-2xl font-black mt-3">Edgar Junior</Text>
        <Text className="text-spotifyGreen text-sm font-semibold mt-0.5">
          Systems Engineering Student • Uniguajira
        </Text>
        
        <Text className="text-gray-400 text-center text-xs mt-2 px-6 leading-5">
          Apasionado por el desarrollo móvil multiplataforma, React Native y la arquitectura de software moderna. Creando réplicas limpias con NativeWind.
        </Text>

        {/* Fila de Estadísticas con Flexbox */}
        <View className="flex-row justify-around w-full mt-5 py-3 bg-spotifyDarkGray rounded-2xl border border-gray-800">
          <View className="items-center">
            <Text className="text-white text-lg font-black">248</Text>
            <Text className="text-gray-400 text-[11px] uppercase font-semibold">Seguidores</Text>
          </View>
          <View className="w-[1px] bg-gray-800" />
          <View className="items-center">
            <Text className="text-white text-lg font-black">192</Text>
            <Text className="text-gray-400 text-[11px] uppercase font-semibold">Siguiendo</Text>
          </View>
          <View className="w-[1px] bg-gray-800" />
          <View className="items-center">
            <Text className="text-white text-lg font-black">14</Text>
            <Text className="text-gray-400 text-[11px] uppercase font-semibold">Playlists</Text>
          </View>
        </View>

        {/* Botones de Acción Interactivos (Pressable) */}
        <View className="flex-row items-center gap-3 w-full mt-4">
          {/* Botón Seguir */}
          <Pressable 
            onPress={() => setIsFollowing(!isFollowing)}
            className={`flex-1 py-3 rounded-full items-center active:opacity-80 active:scale-95 ${
              isFollowing ? 'bg-transparent border border-gray-600' : 'bg-spotifyGreen'
            }`}
          >
            <Text className={`font-bold text-sm ${isFollowing ? 'text-white' : 'text-black'}`}>
              {isFollowing ? '✓ Siguiendo' : '+ Seguir'}
            </Text>
          </Pressable>

          {/* Botón Contador de Likes con respuesta táctil */}
          <Pressable 
            onPress={() => setLikes(likes + 1)}
            className="flex-1 bg-spotifyLightGray py-3 rounded-full items-center active:opacity-80 active:scale-95 border border-gray-700"
          >
            <Text className="text-white font-bold text-sm">
              ❤️ Likes: <Text className="text-spotifyGreen">{likes}</Text>
            </Text>
          </Pressable>
        </View>
      </View>

      {/* Artistas Más Escuchados (Fila Horizontal) */}
      <View className="mt-8 px-5">
        <Text className="text-white text-lg font-bold mb-3">Artistas más escuchados</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
          {topArtists.map((artist) => (
            <Pressable key={artist.id} className="items-center mr-4 active:opacity-75">
              <Image 
                source={{ uri: artist.image }} 
                className="w-20 h-20 rounded-full border border-gray-700 mb-2" 
              />
              <Text className="text-white text-xs font-semibold text-center w-20" numberOfLines={1}>
                {artist.name}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      {/* Playlists Públicas del Usuario */}
      <View className="mt-7 px-5">
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-white text-lg font-bold">Playlists Públicas</Text>
          <Text className="text-spotifyGreen text-xs font-semibold">Ver todas</Text>
        </View>

        {userPlaylists.map((pl) => (
          <Pressable
            key={pl.id}
            className="flex-row items-center bg-spotifyDarkGray p-3 rounded-xl mb-2.5 active:opacity-70 border border-gray-800/60"
          >
            <Image source={{ uri: pl.cover }} className="w-14 h-14 rounded-lg mr-3" />
            <View className="flex-1">
              <Text className="text-white font-bold text-base" numberOfLines={1}>{pl.title}</Text>
              <Text className="text-gray-400 text-xs mt-0.5">{pl.songs}</Text>
            </View>
            <Text className="text-gray-500 text-lg mr-1">›</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}