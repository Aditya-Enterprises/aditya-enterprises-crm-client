import type { IconType } from "react-icons";
import {
  FaArrowTrendUp,
  FaBath,
  FaBed,
  FaBell,
  FaBolt,
  FaBuilding,
  FaCalendarDays,
  FaChartSimple,
  FaChevronLeft,
  FaChevronRight,
  FaCircleCheck,
  FaCircleQuestion,
  FaClock,
  FaCreditCard,
  FaDoorOpen,
  FaDownload,
  FaDumbbell,
  FaEllipsis,
  FaEllipsisVertical,
  FaEnvelope,
  FaFileCircleExclamation,
  FaFilePen,
  FaFilter,
  FaGear,
  FaHandshake,
  FaHouse,
  FaList,
  FaLocationDot,
  FaLock,
  FaMagnifyingGlass,
  FaPhone,
  FaPlus,
  FaRightFromBracket,
  FaRulerCombined,
  FaSeedling,
  FaTableCellsLarge,
  FaTableColumns,
  FaUserGroup,
  FaUsers,
  FaXmark,
} from "react-icons/fa6";

const icons: Record<string, IconType> = {
  add: FaPlus,
  add_home: FaHouse,
  analytics: FaChartSimple,
  assignment: FaFilePen,
  assignment_late: FaFileCircleExclamation,
  bolt: FaBolt,
  bathtub: FaBath,
  bed: FaBed,
  calendar_month: FaCalendarDays,
  call: FaPhone,
  chevron_left: FaChevronLeft,
  chevron_right: FaChevronRight,
  close: FaXmark,
  contract_edit: FaFilePen,
  dashboard: FaTableCellsLarge,
  domain: FaBuilding,
  download: FaDownload,
  filter_alt: FaFilter,
  filter_list: FaFilter,
  fitness_center: FaDumbbell,
  garage: FaHouse,
  group: FaUserGroup,
  groups: FaUsers,
  handshake: FaHandshake,
  help: FaCircleQuestion,
  check_circle: FaCircleCheck,
  list: FaList,
  location_on: FaLocationDot,
  lock: FaLock,
  logout: FaRightFromBracket,
  mail: FaEnvelope,
  meeting_room: FaDoorOpen,
  more_horiz: FaEllipsis,
  more_vert: FaEllipsisVertical,
  outdoor_garden: FaSeedling,
  notifications: FaBell,
  payments: FaCreditCard,
  person_search: FaMagnifyingGlass,
  phone: FaPhone,
  schedule: FaClock,
  search: FaMagnifyingGlass,
  settings: FaGear,
  square_foot: FaRulerCombined,
  trending_up: FaArrowTrendUp,
  view_kanban: FaTableColumns,
};

function iconSizeClass(className: string) {
  if (className.includes("text-xs")) return "h-3 w-3";
  if (className.includes("text-base")) return "h-4 w-4";
  if (className.includes("text-lg")) return "h-5 w-5";
  if (className.includes("text-xl")) return "h-5 w-5";
  if (className.includes("text-2xl")) return "h-6 w-6";
  return "h-6 w-6";
}

function Icon({ name, className = "" }: { name: string; className?: string }) {
  const IconComponent = icons[name] ?? icons.help;

  return (
    <IconComponent
      aria-hidden="true"
      className={`shrink-0 ${iconSizeClass(className)} ${className}`}
    />
  );
}

export default Icon;
