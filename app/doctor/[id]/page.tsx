import { Header } from "@/components/header";
import { Icon } from "@/components/icon";
import { formatHour } from "@/other/helper";
import Image from "next/image";

export default function Doctor({
  params,
}: Readonly<{ params: { id: string } }>) {
  const doctor = {
    firstName: "Vinicius",
    lastName: "Campos",
    speciality: "Oftalmologista",
    state: "RS",
    city: "Porto Alegre",
    photo: "/photos/photo-4.jpg",
    bio: "Médico formado pela FMU com especialidade em Oftalmologista",
    price: "200",
    attendences: 2,
    experience: "8 anos",
    availability: "Quarta à Sexta - 10:00 - 12:00",
    address: "Rua tal 123",
    agenda: [
      {
        id: 1,
        date: "2024-06-03T09:00:00.000Z",
        availability: true,
      },
      {
        id: 2,
        date: "2024-06-03T10:00:00.000Z",
        availability: true,
      },
      {
        id: 3,
        date: "2024-06-03T11:00:00.000Z",
        availability: true,
      },
    ],
  };

  return (
    <>
      <Header
        href="/"
        title="Agenda"
        iconName="arrow-left"
        iconClassName="w-4 h-4"
      />
      <div className="bg-green-700 p-4 rounded-xl text-white flex gap-4 mt-5 mb-5">
        <Image
          src={doctor.photo}
          alt={doctor.firstName}
          width={76}
          height={76}
          className="rounded-lg"
        />
        <div>
          <h1>
            Dr. {doctor.firstName} {doctor.lastName}
          </h1>
          <p className="text-left">
            <Icon name="map" className="w-4 h-4 text-white">
              {doctor.city}, {doctor.state}
            </Icon>
          </p>
        </div>
      </div>

      <div>
        <p className="p-4 border border-gray-100">
          Médico formado pela FMU com especialidade em Oftalmologista
        </p>

        <div className="border-b border-b-gray-100 flex py-2">
          <div className="w-1/2">
            <h2 className="text-[#9f9f9f]">Valor Consulta</h2>
            <p>{doctor.price}</p>
          </div>
          <div>
            <h2 className="text-[#9f9f9f]">Atendimentos</h2>
            <p>{doctor.attendences}</p>
          </div>
        </div>

        <div className="border-b border-b-gray-100 flex py-2">
          <div className="w-1/2">
            <h2 className="text-[#9f9f9f]">Especialidade</h2>
            <p>{doctor.speciality}</p>
          </div>
          <div>
            <h2 className="text-[#9f9f9f]">Experiência</h2>
            <p>{doctor.experience}</p>
          </div>
        </div>

        <div className="border-b border-b-gray-100 py-2">
          <h2 className="text-[#9f9f9f]">Disponibilidade</h2>
          <p>{doctor.availability}</p>
        </div>

        <div className="border-b border-b-gray-100 py-2">
          <h2 className="text-[#9f9f9f]">Endereço</h2>
          <p>{doctor.address}</p>
        </div>

        <h2 className="p-4 border border-gray-100">Horários disponíveis</h2>
        <div className="flex flex-col gap-3">
          <div className="flex">
            <div className="w-[90px] h-9 flex items-center font-semibold">
              Hoje
            </div>
            <Agenda agenda={doctor.agenda} />
          </div>
          <div className="flex">
            <div className="w-[90px] h-9 flex items-center font-semibold">
              Amanhã
            </div>
            <Agenda agenda={doctor.agenda} />
          </div>
        </div>
      </div>
    </>
  );
}

type AgendaProps = {
  id: number;
  date: string;
  availability: boolean;
};

function Agenda({ agenda }: { agenda: AgendaProps[] }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {agenda.map((item) => (
        <AgendaButton key={item.id} {...item} />
      ))}
    </div>
  );
}

function AgendaButton({ id, date, availability }: AgendaProps) {
  if (!availability) return null;

  return (
    <button className="text-sm font-semibold text-green-500 bg-green-100 rounded-md py-3 px-2">
      <p>{formatHour(new Date(date))}</p>
    </button>
  );
}
