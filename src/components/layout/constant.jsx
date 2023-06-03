import { CalendarBlank, ClockCounterClockwise, HouseLine, UsersFour } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export const MENU_ITEM_ADMIN = [
  {
    icon: <HouseLine size={20} />,
    label: <Link to="/dashboard-admin">Dashboard</Link>,
    key: 1,
  },
  {
    icon: <CalendarBlank size={20} />,
    label: <Link to="/jadwal-kuliah-admin">Jadwal Kuliah</Link>,
    key: 2,
  },
  {
    icon: <UsersFour size={20} />,
    label: <Link to="/data-mahasiswa">Data Mahasiswa</Link>,
    key: 3,
  },
  {
    icon: <ClockCounterClockwise size={20} />,
    label: <Link to="/riwayat-presensi">Riwayat Presensi</Link>,
    key: 4,
  },
];
