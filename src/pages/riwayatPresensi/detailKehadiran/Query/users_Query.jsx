import { gql } from "@apollo/client";

export const GET_MATKUL = gql`
  query MyQuery {
    MataKuliah {
      uuid
      mataKuliah
      Persentase
    }
  }
`;

export const GET_MATKULB = gql`
  query MyQuery {
    MataKuliahB {
      uuid
      mataKuliah
      Persentase
    }
  }
`;
export const GET_MATKULC = gql`
  query MyQuery {
    MataKuliahC {
      uuid
      mataKuliah
      Persentase
    }
  }
`;
export const GET_MATKULD = gql`
  query MyQuery {
    MataKuliahD {
      uuid
      mataKuliah
      Persentase
    }
  }
`;
