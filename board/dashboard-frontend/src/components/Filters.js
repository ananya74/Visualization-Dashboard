import React from 'react';

export default function Filters({ filters, setFilters }) {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Hardcoded example options – update or load dynamically if needed
  const filterOptions = {
    end_year: ['2020', '2021', '2022', '2023'],
    topic: ['gas', 'oil', 'renewable', 'policy'],
    sector: ['energy', 'transport', 'healthcare'],
    region: ['North America', 'Europe', 'Asia'],
    pestle: ['Political', 'Economic', 'Social'],
    source: ['News Source A', 'Source B'],
    country: ['United States', 'India', 'Germany'],
  };

  return (
    <div className="card p-3 mb-4">
      <div className="row">
        {Object.keys(filterOptions).map((name) => (
          <div className="col-md-3 mb-2" key={name}>
            <select
              className="form-control"
              name={name}
              value={filters[name] || ''}
              onChange={handleChange}
            >
              <option value="">{name.replace('_', ' ').toUpperCase()}</option>
              {filterOptions[name].map((val) => (
                <option key={val} value={val}>
                  {val}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}
