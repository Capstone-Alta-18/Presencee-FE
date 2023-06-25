import { useEffect, useState } from "react";
import { api } from "../../../../api/Index";

export const useFetchDosenOptions = () => {
  const [dosenOptions, setDosenOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getDosen();
        const data = response.data;

        const options = data.dosens.map((dosen) => ({
          label: dosen.name,
          value: dosen.ID,
        }));
        setDosenOptions(options);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return dosenOptions;
};

export const useFetchRoomOptions = () => {
  const [roomOptions, setRoomOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getRoom();
        const data = response.data;

        const options = data.rooms.map((room) => ({
          label: room.name,
          value: room.ID,
        }));
        setRoomOptions(options);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return roomOptions;
};
export const useFetchMatkulOptions = () => {
  const [matkulOptions, setMatkulOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getMatkul();
        const data = response.data;

        const options = data.matakuliahs.map((matkul) => ({
          label: matkul.name,
          value: matkul.ID,
        }));
        setMatkulOptions(options);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return matkulOptions;
};
