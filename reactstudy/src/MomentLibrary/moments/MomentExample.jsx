import React, { useRef, useState } from "react";
// import moment from 'moment'
import moment from "moment-timezone";
import "moment/locale/ko"; //한국어로 표기 가능

export default function MomentExample() {
  const momentDate = moment();
  const newMomentDate = momentDate.add(1, "week"); //momentDate도 바뀜
  const cloneMomentDate = newMomentDate.clone().add(1, "week");

  const [day, setDay] = useState("");
  const birthDayRef = useRef(null);
  const handleBirthDayChange = (event) => {
    setDay(moment(event.target.value, "YYYY-MM-DD").format("dddd"));
  };
  return (
    <div>
      <div>Immutable Check</div>
      <div>
        <div>{momentDate.format()}</div>
        <div>{newMomentDate.format()}</div>
        <div>{cloneMomentDate.format()}</div>
      </div>
      <div>
        <div>Summer Time (New York)</div>
        <div>{moment.tz("2018-03-10 13:00:00", "America/New_York").add(1, "day").format()}</div>
        <div>{moment.tz("2018-03-10 13:00:00", "America/New_York").add(24, "hour").format()}</div>
      </div>
      <div>
        <div>Leap Year (Korea)</div>
        <div>{moment("2017-01-01").subtract(1, "year").format()}</div>
        <div>{moment("2017-01-01").subtract(365, "day").format()}</div>
      </div>
      <div>
        <div>한국어로 표기</div>
        <div>{moment("07-17-2021").format("YYYY년 M월 D일")}</div>
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
        <div>{moment("2021-07-17 03:00").diff(moment("2021-07-18 02:00"), "hours")}</div>
      </div>
    </div>
  );
}
