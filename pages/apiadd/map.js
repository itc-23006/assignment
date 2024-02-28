// pages/map/map.js
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const Map = ({ location }) => {
  // プロパティが存在するか確認
  if (!location || !location.lat || !location.lng) {
    // エラー処理やデフォルトの座標を設定するなど、適切な対応を行う
    return <div>Error: Location data is missing.</div>
  }

  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  }

  const center = {
    lat: location.lat,
    lng: location.lng
  }

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={15}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  )
}

export default Map
