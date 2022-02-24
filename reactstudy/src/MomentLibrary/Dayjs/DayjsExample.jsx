import React, { useRef, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.locale("ko");
dayjs.extend(utc);
dayjs.extend(timezone);

export default function DayjsExample() {
  const dayjsDate = dayjs();
  const newDayjsDate = dayjsDate.add(1, "week");
  const cloneNewDayjsDate = newDayjsDate.add(1, "week");

  const [day, setDay] = useState("");
  const birthDayRef = useRef(null);
  const handleBirthDayChange = (event) => {
    setDay(dayjs(event.target.value, "YYYY-MM-DD").format("dddd"));
  };
  return (
    <div>
      <div>Immutable Check</div>
      <div>
        <div>{dayjsDate.format()}</div>
        <div>{newDayjsDate.format()}</div>
        <div>{cloneNewDayjsDate.format()}</div>
      </div>
      <div>
        <div>Summer Time (New York)</div>
        <div>{dayjs.tz.guess()}</div>
        <div>{dayjs.tz("2018-03-10 13:00:00", "America/New_York").add(1, "day").format()}</div>
        <div>{dayjs.tz("2018-03-10 13:00:00", "America/New_York").add(24, "hour").format()}</div>
      </div>
      <div>
        <div>Leap Year (Korea)</div>
        <div>{dayjs("2017-01-01").subtract(1, "year").format()}</div>
        <div>{dayjs("2017-01-01").subtract(365, "day").format()}</div>
      </div>
      <div>
        <div>한국어로 표기</div>
        <div>{dayjs("07-17-2021").format("YYYY년 M월 D일")}</div>
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
        <div>{dayjs("2021-07-17 03:00").diff(dayjs("2021-07-18 02:00"), "hours")}</div>
      </div>
    </div>
  );
}
