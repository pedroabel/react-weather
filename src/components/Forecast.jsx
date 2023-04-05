import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
  "Domingo",
];

const Forecast = ({ data }) => {
  const dayInWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );

  return (
    <div className="flex flex-col space-y-6 w-full max-w-screen-sm bg-white p-10  mt-10 rounded ">
      <label className=" text-center font-bold text-3xl">Semana</label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg w-1/4">
                    {forecastDays[idx]}
                  </span>
                  <div className="flex items-center justify-end w-1/4 pr-10">
                    <span className="font-semibold">{item.main.humidity}</span>
                    <svg
                      className="w-6 h-6 fill-current ml-1"
                      viewBox="0 0 16 20"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g transform="matrix(1,0,0,1,-4,-2)">
                        <path d="M17.66,8L12.71,3.06C12.32,2.67 11.69,2.67 11.3,3.06L6.34,8C4.78,9.56 4,11.64 4,13.64C4,15.64 4.78,17.75 6.34,19.31C7.9,20.87 9.95,21.66 12,21.66C14.05,21.66 16.1,20.87 17.66,19.31C19.22,17.75 20,15.64 20,13.64C20,11.64 19.22,9.56 17.66,8ZM6,14C6.01,12 6.62,10.73 7.76,9.6L12,5.27L16.24,9.65C17.38,10.77 17.99,12 18,14C18.016,17.296 14.96,19.809 12,19.74C9.069,19.672 5.982,17.655 6,14Z" />
                      </g>
                    </svg>
                  </div>
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    className="w-9"
                    alt=""
                  />
                  <span className="font-semibold text-lg w-1/4 text-right">
                    {Math.round(item.main.temp_max)}°C /{" "}
                    {Math.round(item.main.temp_min)}°C
                  </span>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="pb-8">
                <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700" />
                <div className="pb-1 flex justify-between items-center">
                  <label className="font-semibold">Pressão:</label>
                  <label>{item.main.pressure}</label>
                </div>
                <div className="pb-1 flex justify-between items-center">
                  <label className="font-semibold">Umidade:</label>
                  <label>{item.main.humidity}</label>
                </div>
                <div className="pb-1 flex justify-between items-center">
                  <label className="font-semibold">Nuvens:</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="pb-1 flex justify-between items-center">
                  <label className="font-semibold"> Vento:</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className="pb-1 flex justify-between items-center">
                  <label className="font-semibold">Sensação:</label>
                  <label>{item.main.feels_like}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Forecast;
