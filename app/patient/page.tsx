import { Header } from "@/components/header";
import { formatHour } from "@/other/helper";
import Image from "next/image";

export default function Patient() {
  const appointments = [
    {
      date: "2024-06-03T10:00:00.000Z",
      firstName: "Marlon",
      id: "1",
      photo: "photo-3.jpg",
      made: false,
      speciality: "Clínico Geral",
    },
    {
      date: "2024-06-03T13:00:00.000Z",
      firstName: "Daniel",
      id: "2",
      photo: "photo-2.jpg",
      made: false,
      speciality: "Cardiologista",
    },
  ];

  return (
    <>
      <Header title=" Meus agendamentos" href="/home" iconClassName="w-4 h-4" />

      <div className="border border-gray-100 p-2 flex justify-between items-center mt-8 mb-10">
        <button className="py-2 px-4 rounded-xl font-semibold bg-green-600 hover:opacity-85 w-full">
          Próximos
        </button>
        <button className="py-2 px-4 rounded-xl font-semibold hover:bg-green-100 w-full">
          Realizados
        </button>
      </div>

      <div>
        <h2 className="font-semibold text-lg mb-4">Hoje</h2>
        <div className="flex flex-col gap-4">
          {appointments.map((appointment) => (
            <Card key={appointment.id} {...appointment} />
          ))}
        </div>
        <h2 className="font-semibold text-lg mb-4 mt-5">Amanhã</h2>
        <div className="flex flex-col gap-4">
          {appointments.map((appointment) => (
            <Card key={appointment.id} {...appointment} />
          ))}
        </div>
      </div>
    </>
  );
}

interface AppointmentProps {
  id: string;
  firstName: string;
  speciality: string;
  date: string;
  made: boolean;
  photo: string;
}

function Card(appointment: AppointmentProps) {
  return (
    <div className="flex w-full items-center gap-6">
      <div className="flex flex-col">
        {formatHour(new Date(appointment.date))}
        <span className="border-b border-dashed" />
        {formatHour(new Date(appointment.date), true)}
      </div>
      <div className="flex p-4 rounded-lg bg-green-50 w-full items-center relative">
        <span className="absolute -m-4 w-[2px] h-[60px] bg-green-500 rounded-r-lg"></span>
        <div className="mr-3">
          <Image
            src={`/photos/${appointment.photo}`}
            alt={appointment.firstName}
            width={48}
            height={48}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold text-lg">Dr. {appointment.firstName}</h2>
          <p className="text-[#343a40]">{appointment.speciality}</p>
        </div>
      </div>
    </div>
  );
}
