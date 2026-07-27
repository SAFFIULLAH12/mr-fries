import React, { useState } from 'react';
import { STORE_LOCATIONS } from '../data/foodData';
import { MapPin, Navigation, Clock, ShieldCheck, Search, Radar } from 'lucide-react';

export const DeliveryMap: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState(STORE_LOCATIONS[0]);
  const [distanceKm, setDistanceKm] = useState(2.5);
  const [userAddress, setUserAddress] = useState('');

  // Calculate estimated delivery fee based on distance
  const estimatedFee = distanceKm <= 3 ? 0 : Math.min(6, (distanceKm - 3) * 1.5);
  const estimatedTime = Math.round(15 + distanceKm * 3);

  return (
    <section id="locations" className="py-20 relative bg-gradient-to-b from-black via-gray-950 to-black z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-4 h-4 text-orange-500" />
            <span>Smart Coverage Radar</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Delivery Area & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Store Locator</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Check if your neighborhood is covered by our thermal dispatch cloud kitchen network.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Store list & Location Estimator */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Address Search Box */}
            <div className="bg-gray-900 p-4 rounded-3xl border border-white/10 shadow-xl">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-wider block mb-2">
                Check Your Address
              </label>
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter street, postal code, or landmark..."
                  value={userAddress}
                  onChange={(e) => setUserAddress(e.target.value)}
                  className="w-full bg-black border border-white/10 rounded-2xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                />
              </div>
            </div>

            {/* Distance Interactive Slider */}
            <div className="bg-gray-900 p-5 rounded-3xl border border-white/10 shadow-xl">
              <div className="flex items-center justify-between text-xs font-bold text-white mb-2">
                <span>Simulated Distance</span>
                <span className="text-amber-400 font-mono">{distanceKm.toFixed(1)} km</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="10"
                step="0.5"
                value={distanceKm}
                onChange={(e) => setDistanceKm(parseFloat(e.target.value))}
                className="w-full accent-red-500 cursor-pointer mb-4"
              />

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10 text-xs">
                <div className="bg-black/60 p-2.5 rounded-xl border border-white/5">
                  <span className="text-[10px] text-gray-400 block">Est. Delivery Fee</span>
                  <span className="font-bold text-green-400 text-sm">
                    {estimatedFee === 0 ? 'FREE' : `$${estimatedFee.toFixed(2)}`}
                  </span>
                </div>

                <div className="bg-black/60 p-2.5 rounded-xl border border-white/5">
                  <span className="text-[10px] text-gray-400 block">Arrival ETA</span>
                  <span className="font-bold text-orange-400 text-sm">{estimatedTime} mins</span>
                </div>
              </div>
            </div>

            {/* Store Hubs */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                Select Kitchen Hub
              </span>
              {STORE_LOCATIONS.map((loc) => (
                <div
                  key={loc.id}
                  onClick={() => setSelectedLocation(loc)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    selectedLocation.id === loc.id
                      ? 'bg-red-950/60 border-red-500 text-white shadow-lg shadow-red-500/20'
                      : 'bg-gray-900/60 border-white/10 text-gray-300 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400">
                      <Navigation className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white">{loc.name}</h4>
                      <p className="text-xs text-gray-400">{loc.address}</p>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-amber-400 bg-black/40 px-2.5 py-1 rounded-full">
                    {loc.distance}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Simulated Radar Map Canvas View */}
          <div className="lg:col-span-7 h-[420px] rounded-3xl bg-gray-950 border border-red-500/30 overflow-hidden relative shadow-2xl flex items-center justify-center">
            
            {/* Grid background lines */}
            <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />

            {/* Rotating Radar Scanner */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-red-500/20 flex items-center justify-center">
              <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-orange-500/20 flex items-center justify-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-amber-500/30" />
              </div>

              {/* Radar Sweep Animation */}
              <div className="absolute w-full h-full rounded-full bg-gradient-to-tr from-red-500/20 to-transparent animate-spin origin-center pointer-events-none" />
            </div>

            {/* Central Kitchen Pin Marker */}
            <div className="relative z-10 flex flex-col items-center group cursor-pointer">
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-red-600 to-orange-500 p-0.5 shadow-2xl shadow-red-500/50 animate-bounce">
                <div className="w-full h-full bg-black rounded-full flex items-center justify-center text-orange-400">
                  <MapPin className="w-6 h-6 fill-orange-500 text-black" />
                </div>
              </div>

              <div className="mt-2 bg-black/90 border border-white/20 px-3 py-1.5 rounded-xl shadow-xl text-center">
                <span className="text-xs font-black text-white block">{selectedLocation.name}</span>
                <span className="text-[10px] text-green-400 font-semibold">{selectedLocation.status}</span>
              </div>
            </div>

            {/* Simulated Delivery Zone Badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-3 rounded-2xl border border-white/10 flex items-center justify-between text-xs text-white">
              <div className="flex items-center gap-2">
                <Radar className="w-4 h-4 text-red-500 animate-pulse" />
                <span>Thermal Dispatch Radar: Active</span>
              </div>
              <span className="text-amber-400 font-bold">5 km Radius Covered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
