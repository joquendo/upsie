import React, {useState} from 'react';
import Searchbar from '../Searchbar/Searchbar';
import SoftwarePackage from '../SoftwarePackage/SoftwarePackage';
import softwareData from '../../../public/data/software.json';

const Software = () => {

  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div>
      <Searchbar query={searchQuery} setSearchQuery={setSearchQuery} />
      <section className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12">
        {softwareData
            .filter((software) => {

              if (searchQuery.length === 0) return true;
              
              const version = software.version.split('.');
              const query = searchQuery.split('.');

              if (query.length === 1 && Number(query[0]) <= Number(version[0])) {
                return true;
              }
              if (query.length === 2) {
                if (Number(query[0]) < Number(version[0])) {
                  return true;
                } else if (Number(query[0]) === Number(version[0])) {
                  if (Number(query[1]) <= (Number(version[1])) || 0) {
                    return true;
                  }
                }
              }
              if (query.length === 3) {
                if (Number(query[0]) < Number(version[0])) {
                  return true;
                } else if (Number(query[0]) === Number(version[0])) {
                  if (Number(query[1]) < (Number(version[1]) || 0)) {
                    return true;
                  } else if (Number(query[1]) === Number(version[1])) {
                    if (Number(query[2]) <= (Number(version[2]) || 0)) {
                      return true;
                    }
                  }
                }
              }
            }).map((software, idx) => {
              return (
                <SoftwarePackage key={`${idx}-${software.name}-${software.version}`} {...software} />
              )
            })
        }
    </section>
    </div>
    
  )
}

export default Software;