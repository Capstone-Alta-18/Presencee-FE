import { CalendarBlank, ClockCounterClockwise, HouseLine, UsersFour } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export const MENU_ITEM_DOSEN = [
  {
    icon: <HouseLine size={20} />,
    label: <Link to="/dosen-page">Dashboard</Link>,
    key: 1,
  },
  {
    icon: <CalendarBlank size={20} />,
    label: <Link to="/dosen-page/jadwal-kuliah-dosen">Jadwal Kuliah</Link>,
    key: 2,
  },
  {
    icon: <UsersFour size={20} disabled />,
    label: "Data Mahasiswa",
    key: 3,
    disabled: true,
  },
  {
    icon: <ClockCounterClockwise size={20} disabled />,
    label: "Riwayat Presensi",
    key: 4,
    disabled: true,
  },
];
