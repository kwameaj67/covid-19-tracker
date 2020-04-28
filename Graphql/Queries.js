import gql from 'graphql-tag'

export const CovidQuery = gql`
query getallData {
  countries {
      country
      countryInfo {
          _id
          lat
          long
          flag
          iso3
          iso2
      }
      continent
      result {
          tests
          cases
          todayCases
          deaths
          todayDeaths
          recovered
          active
          critical
          casesPerOneMillion
          deathsPerOneMillion
          testsPerOneMillion
          updated
      }
  }
}
`
export const GlobalTotal = gql`
        {
            globalTotal {
                affectedCountries
                tests
                cases
                todayCases
                deaths
                todayDeaths
                recovered
                active
                critical
                casesPerOneMillion
                deathsPerOneMillion
                testsPerOneMillion
                updated
            }
        }

`