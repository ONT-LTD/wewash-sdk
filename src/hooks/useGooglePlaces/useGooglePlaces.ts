import { useState } from 'react';
import axios from 'axios';
import * as Location from 'expo-location';

interface GooglePrediction {
  description: string;
  place_id: string;
  structured_formatting: {
    main_text: string;
    secondary_text: string;
  };
}

interface PlaceDetails {
  formatted_address: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
  name: string;
}

export const useGooglePlaces = (apiKey: string) => {
  if (!apiKey) {
    console.error(
      '[useGooglePlaces] Google API key is missing. Please provide a valid API key.'
    );
  }

  const [query, setQuery] = useState('');
  const [predictions, setPredictions] = useState<GooglePrediction[]>([]);
  const [placeDetails, setPlaceDetails] = useState<PlaceDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPredictions = async (text: string) => {
    setQuery(text);
    setError(null);

    if (!apiKey) {
      setError('Missing API key for fetching place details');
      return null;
    }

    if (!apiKey || text.length < 3) {
      setPredictions([]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json`,
        {
          params: {
            input: text,
            key: apiKey,
            language: 'en',
            components: 'country:ng' // Restrict results to Nigeria
          }
        }
      );
      setPredictions(response.data.predictions);
    } catch (error) {
      setError('Failed to fetch location predictions');
      console.error('Error fetching predictions:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchPlaceDetails = async (placeId: string) => {
    setError(null);
    setIsLoading(true);

    if (!apiKey) {
      setError('Missing API key for fetching place details');
      return null;
    }

    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/details/json`,
        {
          params: {
            place_id: placeId,
            key: apiKey,
            fields: 'address_component,formatted_address,geometry'
          }
        }
      );

      if (response.data.status === 'OK') {
        setPlaceDetails(response.data.result);
        return response.data.result;
      } else {
        throw new Error('Failed to fetch place details');
      }
    } catch (error) {
      setError('Failed to fetch place details');
      console.error('Error fetching place details:', error);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const getCurrentLocation = async () => {
    setError(null);
    setIsLoading(true);

    if (!apiKey) {
      setError('Missing API key for reverse geocoding');
      return null;
    }

    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setError('Permission to access location was denied');
        return null;
      }

      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High
      });

      const { latitude, longitude } = location.coords;

      const response = await axios.get(
        'https://maps.googleapis.com/maps/api/geocode/json',
        {
          params: {
            latlng: `${latitude},${longitude}`,
            key: apiKey
          }
        }
      );

      if (response.data.status === 'OK' && response.data.results.length > 0) {
        const result = response.data.results[0];
        setPlaceDetails({
          formatted_address: result.formatted_address,
          geometry: {
            location: {
              lat: latitude,
              lng: longitude
            }
          },
          name: result.formatted_address
        });
        return result;
      }

      return null;
    } catch (error) {
      setError('Failed to get current location');
      console.error('Error getting current location:', error);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    query,
    predictions,
    placeDetails,
    isLoading,
    error,
    fetchPredictions,
    fetchPlaceDetails,
    getCurrentLocation
  };
};
