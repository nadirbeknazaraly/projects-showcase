import { gql } from 'apollo-boost';

export const LatestCompanies = gql`
  query LatestCompanies {
    latestCompanies {
      id
      name
      area {
        name
      }
      size
      logoURLs {
        large
      }
    }
  }
`;

export const Companies = gql`
  query Companies ($filter: InputFilter) {
    companies (filter: $filter) {
      id
      name
      area {
        name
      }
      size
      logoURLs {
        large
      }
    }
  }
`;

export const Company = gql`
  query Company ($id: ID!) {
    company (id: $id) {
      id
      name
      description
      area {
        name
      }
      size
      siteURL
      logoURLs {
        large
      }
      hhSource {
        id
      }
    }
  }
`;

export const HHCompanies = gql`
  query HHCompanies ($text: String!) {
    HHCompanies (text: $text) {
      id
      name
    }
  }
`;

export const SuggestCompanies = gql`
  query SuggestCompanies ($name: String!, $hhSourceID: String) {
    suggestCompanies (name: $name, hhSourceID: $hhSourceID) {
      id
      name
      area {
        name
      }
      size
      logoURLs {
        large
      }
    }
  }
`;

export const HHVacancies = gql`
  query HHVacancies ($id: String!) {
    HHVacancies (id: $id) {
      id
      name
      area {
        name
      }
      salary {
        from
        to
        gross
        currency
      }
      address {
        metro {
          station_name
        }
      }
      published_at
      alternate_url
    }
  }
`;

export const Cities = gql`
  query Cities {
    cities {
      id
      name
    }
  }
`;

export const Sizes = gql`
  query Sizes {
    sizes {
      name
      value
    }
  }
`;

