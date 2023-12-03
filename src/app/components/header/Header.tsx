'use client'
import ActionButton from "./actionButton/ActionButton";
import AlarmIcon from "./alarmIcon/AlarmIcon";
import ChatBar from "./ChatBar/ChatBar";
import CountrySelect from "./countrySelector/CountrySelector";
import Logo from "./logo/Logo";
import SearchField from "./searchField/SearchField";
import Switcher from "./switcher/Switcher";

type Props = {
  v: Number;
};

export default function Header({ v }: Props) {
  return (
    <header className="fijb">
      <div className="flex">
        <Logo />
        <SearchField />
      </div>
      <div className="flex">
        <Switcher />
        <CountrySelect />
        <AlarmIcon />
        <ChatBar />
        <ActionButton />
      </div>
    </header>
  );
}
