import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Image, Pressable } from 'react-native';

interface SongItem {
  id: string;
  title: string;
  artist: string;
  category: 'music' | 'podcast';
  coverUrl: string;
  plays: string;
}

const initialSongs: SongItem[] = [
  {
    id: '1',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    category: 'music',
    coverUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&q=80',
    plays: '3.8M',
  },
  {
    id: '2',
    title: 'Starboy (Remix)',
    artist: 'Daft Punk & The Weeknd',
    category: 'music',
    coverUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80',
    plays: '2.1M',
  },
  {
    id: '3',
    title: 'The Joe Rogan Experience',
    artist: 'Joe Rogan • Episodio #2140',
    category: 'podcast',
    coverUrl: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&q=80',
    plays: '1.4M',
  },
  {
    id: '4',
    title: 'Midnight City',
    artist: 'M83 • Hurry Up, We\'re Dreaming',
    category: 'music',
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80',
    plays: '4.9M',
  },
  {
    id: '5',
    title: 'Tech Lead Daily',
    artist: 'Silicon Valley Insider',
    category: 'podcast',
    coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80',
    plays: '850K',
  },
  {
    id: '6',
    title: 'Something About Us',
    artist: 'Daft Punk • Discovery',
    category: 'music',
    coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80',
    plays: '1.9M',
  },
];

const quickPlaylists = [
  { id: 'q1', name: 'Éxitos España', cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=200&q=80' },
  { id: 'q2', name: 'Lo-Fi Chill & Code', cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&q=80' },
  { id: 'q3', name: 'Top 50 Global', cover: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=200&q=80' },
  { id: 'q4', name: 'Rock Clásico', cover: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=200&q=80' },
  { id: 'q5', name: 'Electronic Vibes', cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&q=80' },
  { id: 'q6', name: 'Daily Mix 1', cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200&q=80' },
];

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'music' | 'podcast'>('all');
  const [nowPlayingId, setNowPlayingId] = useState<string>('1');

  // Filtrado reactivo mediante TextInput y Categoría
  const filteredSongs = initialSongs.filter((song) => {
    const matchesSearch =
      song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || song.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <ScrollView 
      className="flex-1 bg-spotifyBlack" 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      {/* Header Superior con Saludo y Avatar */}
      <View className="flex-row justify-between items-center px-4 pt-12 pb-3">
        <View>
          <Text className="text-gray-400 text-xs uppercase tracking-widest font-semibold">Bienvenido de nuevo</Text>
          <Text className="text-white text-2xl font-black">Buenas tardes 🎵</Text>
        </View>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80' }}
          className="w-10 h-10 rounded-full border-2 border-spotifyGreen"
        />
      </View>

      {/* Barra de Búsqueda interactiva con TextInput */}
      <View className="px-4 mb-4">
        <View className="flex-row items-center bg-spotifyDarkGray px-3 py-2.5 rounded-xl border border-gray-800">
          <Text className="text-gray-400 text-lg mr-2">🔍</Text>
          <TextInput
            placeholder="¿Qué quieres escuchar hoy?"
            placeholderTextColor="#888888"
            value={searchQuery}
            onChangeText={setSearchQuery}
            className="flex-1 text-white text-base py-0"
          />
          {searchQuery.length > 0 && (
            <Pressable 
              onPress={() => setSearchQuery('')}
              className="p-1 rounded-full bg-gray-700 active:opacity-60"
            >
              <Text className="text-xs text-gray-300 font-bold px-1">✕</Text>
            </Pressable>
          )}
        </View>
      </View>

      {/* Chips de Categorías con Pressable interactivo */}
      <View className="flex-row px-4 mb-5 gap-2">
        <Pressable
          onPress={() => setSelectedCategory('all')}
          className={`px-4 py-1.5 rounded-full active:opacity-75 ${
            selectedCategory === 'all' ? 'bg-spotifyGreen' : 'bg-spotifyLightGray'
          }`}
        >
          <Text className={`font-semibold text-sm ${selectedCategory === 'all' ? 'text-black font-bold' : 'text-white'}`}>
            Todo
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setSelectedCategory('music')}
          className={`px-4 py-1.5 rounded-full active:opacity-75 ${
            selectedCategory === 'music' ? 'bg-spotifyGreen' : 'bg-spotifyLightGray'
          }`}
        >
          <Text className={`font-semibold text-sm ${selectedCategory === 'music' ? 'text-black font-bold' : 'text-white'}`}>
            Música
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setSelectedCategory('podcast')}
          className={`px-4 py-1.5 rounded-full active:opacity-75 ${
            selectedCategory === 'podcast' ? 'bg-spotifyGreen' : 'bg-spotifyLightGray'
          }`}
        >
          <Text className={`font-semibold text-sm ${selectedCategory === 'podcast' ? 'text-black font-bold' : 'text-white'}`}>
            Podcasts
          </Text>
        </Pressable>
      </View>

      {/* Grilla 2x3 de Acceso Rápido */}
      <View className="px-4 mb-6">
        <Text className="text-white text-lg font-bold mb-3">Escuchado Recientemente</Text>
        <View className="flex-row flex-wrap justify-between">
          {quickPlaylists.map((item) => (
            <Pressable
              key={item.id}
              className="w-[48.5%] bg-spotifyLightGray rounded-md mb-2.5 flex-row items-center overflow-hidden active:opacity-70"
            >
              <Image source={{ uri: item.cover }} className="w-14 h-14" />
              <Text className="text-white font-semibold text-xs ml-2.5 flex-1 pr-2" numberOfLines={2}>
                {item.name}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      {/* Sección Recomendados / Resultados Filtrados */}
      <View className="px-4 mb-6">
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-white text-lg font-bold">
            {searchQuery ? `Resultados (${filteredSongs.length})` : 'Recomendados para ti'}
          </Text>
          <Text className="text-spotifyGreen text-xs font-semibold">Ver más</Text>
        </View>

        {filteredSongs.length === 0 ? (
          <View className="bg-spotifyDarkGray p-6 rounded-xl items-center">
            <Text className="text-gray-400 text-base">No se encontraron resultados para "{searchQuery}"</Text>
          </View>
        ) : (
          filteredSongs.map((song) => {
            const isPlaying = nowPlayingId === song.id;
            return (
              <Pressable
                key={song.id}
                onPress={() => setNowPlayingId(song.id)}
                className={`flex-row items-center justify-between p-3 rounded-xl mb-2.5 active:opacity-70 ${
                  isPlaying ? 'bg-spotifyLightGray border border-spotifyGreen/40' : 'bg-spotifyDarkGray'
                }`}
              >
                <View className="flex-row items-center flex-1 mr-2">
                  <Image source={{ uri: song.coverUrl }} className="w-14 h-14 rounded-lg mr-3" />
                  <View className="flex-1">
                    <Text 
                      className={`text-base font-bold ${isPlaying ? 'text-spotifyGreen' : 'text-white'}`}
                      numberOfLines={1}
                    >
                      {song.title}
                    </Text>
                    <Text className="text-gray-400 text-xs mt-0.5" numberOfLines={1}>
                      {song.artist}
                    </Text>
                  </View>
                </View>

                <View className="items-end">
                  <Text className="text-gray-500 text-xs">{song.plays}</Text>
                  <Text className="text-sm mt-1">{isPlaying ? '🔊' : '▶️'}</Text>
                </View>
              </Pressable>
            );
          })
        )}
      </View>

      {/* Banner de Descubrimiento Semanal */}
      <View className="mx-4 bg-spotifyDarkGray p-5 rounded-2xl border border-gray-800">
        <Text className="text-spotifyGreen text-xs font-black uppercase tracking-widest mb-1">Especial de la Semana</Text>
        <Text className="text-white text-xl font-black mb-2">Radar de Novedades</Text>
        <Text className="text-gray-300 text-sm mb-4">
          Descubre nueva música seleccionada por nuestro algoritmo según tus gustos recientes.
        </Text>
        <Pressable className="bg-spotifyGreen self-start px-5 py-2.5 rounded-full active:opacity-80">
          <Text className="text-black font-bold text-sm">Escuchar Ahora</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}