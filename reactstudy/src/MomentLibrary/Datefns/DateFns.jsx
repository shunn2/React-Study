import React, { useRef, useState } from "react";
import { add, sub, format, differenceInHours } from "date-fns";
import { format as timeZoneFormat, toDate } from "date-fns-tz";
import addWeeks from "date-fns/addWeeks";
import { ko } from "date-fns/locale";

export default function DateFns() {
  const dateFnsDate = new Date();
  const newDateFnsDate = add(dateFnsDate, { weeks: 1 });
  const cloneNewDateFnsDate = add(newDateFnsDate, { weeks: 1 });

  const [day, setDay] = useState("");
  const birthDayRef = useRef(null);
  const handleBirthDayChange = (event) => {
    setDay(format(new Date(event.target.value), "EEEE", { locale: ko }));
  };
  return (
    <div>
      <div>date-fns</div>
      <div>
        <div>{format(dateFnsDate, "yyyy-MM-dd")}</div>
        <div>{format(newDateFnsDate, "yyyy-MM-dd")}</div>
        <div>{format(cloneNewDateFnsDate, "yyyy-MM-dd")}</div>
      </div>
      <div>
        <div>Summer Time (New York)</div>
        <div>{timeZoneFormat(new Date("2018-03-10 13:00:00"), "yyyy-MM-dd HH:mm:ssXXX", { timeZone: "America/New_York" })}</div>
        <div>{timeZoneFormat(add(toDate(new Date("2018-03-10 13:00:00"), { timeZone: "America/New_York" }), { days: 1 }), "yyyy-MM-dd HH:mm:ssXXX", { timeZone: "America/New_York" })}</div>
        <div>{timeZoneFormat(add(new Date("2018-03-10 13:00:00"), { hours: 24 }), "yyyy-MM-dd HH:mm:ssXXX", { timeZone: "America/New_York" })}</div>
      </div>
      <div>
        <div>Leap Year (Korea)</div>
        <div>{format(sub(new Date("2017-01-01"), { years: 1 }), "yyyy-MM-dd")}</div>
        <div>{format(sub(new Date("2017-01-01"), { days: 365 }), "yyyy-MM-dd")}</div>
      </div>
      <div>
        <div>한국어로 표기</div>
        <div>{format(new Date("07-17-2021"), "yyyy년 M월 d일")}</div>
      </div>
      <div>
        <div>특정 날짜의 요일 찾기</div>
        <div>
          <input type="date" ref={birthDayRef} onChange={handleBirthDayChange} />
          <div>무슨 요일이었을까</div>
          <div>{day}</div>
        </div>
      </div>
      <div>
        <div>두 날짜 비교</div>
        <div>{differenceInHours(new Date("2021-07-17 03:00"), new Date("2021-07-18 02:00"))}</div>
      </div>
    </div>
  );
}
