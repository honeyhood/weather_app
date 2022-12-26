import { useState } from 'react';
import { UilSearch } from '@iconscout/react-unicons';

function Inputs({ units, setUnits, setQuery }) {
  const [value, setValue] = useState('');

  const handleSearchClick = () => {
    if (value) {
      setQuery({ city: value });
    }
  };

  const handleUnitClick = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Search..."
          className="text-xl font-light p-2 focus: outline-none w-full shadow-xl capitalize"
        />
        <UilSearch
          onClick={handleSearchClick}
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-110"
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          onClick={handleUnitClick}
          name="metric"
          className="text-white font-light text-xl transition ease-out hover:scale-110"
        >
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button
          onClick={handleUnitClick}
          name="imperial"
          className="text-white font-light text-xl transition ease-out hover:scale-110"
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
