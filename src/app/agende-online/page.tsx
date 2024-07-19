'use client'

import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
 } from '@/components/ui/select'

import { Calendar } from '@/components/ui/calendar'
import { ptBR } from 'date-fns/locale'


function formatarTelefone(v: String) {

  let r = v.replace(/\D/g, "");
  r = r.replace(/^0/, "");

  if (r.length > 11) {
    r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (r.length > 7) {
    r = r.replace(/^(\d\d)(\d{5})(\d{0,4}).*/, "($1) $2-$3");
  } else if (r.length > 2) {
    r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  } else if (v.trim() !== "") {
    r = r.replace(/^(\d*)/, "($1");
  }
  return r;
}

export default function AgendeOnline() {
  const [date, setDate] = React.useState<Date | undefined>()
  const [phone, setPhone] = React.useState('')

  return (
    <div className="bg-white min-h-screen items-center text-center">
      <div className="pt-1">
        <h1 className="text-3xl px-10 mb-2 text-black">
          Conquiste uma vida melhor{' '}
          <span className="text-mainPink">sem sair de casa! </span>
        </h1>
      </div>
      <div className="rounded-xl shadow-2xl text-left text-white bg-mainPink mx-auto">
        <div className="px-4 pt-4">
          <Label htmlFor="name">Qual seu nome?</Label>
          <Input id="name" className='text-black' placeholder="Digite aqui" />
        </div>
        <div className="px-4 pt-4">
          <Label htmlFor="phone">Seu telefone com DDD</Label>
          <Input
            id="phone"
            inputMode='numeric'
            className="text-black"
            placeholder="(__) _____-____"
            value={formatarTelefone(phone)}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="px-4 pt-2 text-black">
          <Label htmlFor="options" className='text-white'>No que podemos te ajudar?</Label>
          <Select >
            <SelectTrigger className="w-[180px]">
              <SelectValue className='text-neutral-400' placeholder="Escolha aqui" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Outros</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className='pt-4 text-center'>

    <p>Escolha um dia para sua consulta</p>
      <div className='bg-white mt-1 rounded-lg shadow-xl w-min mx-auto'>
      <Calendar
      id='calendar'
      selected={date}
      onSelect={setDate}
      locale={ptBR}
      mode="single"
      disabled={[
        {before: new Date(Date.now()+24 * 60 * 60 * 1000)},
        {
          dayOfWeek: [0,6]
        },
        {
          from: new Date(Date.now() + 24 * 60 * 60 * 1000),
          to: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000)
        }
      ]}
      
      />
        </div>
      </div>
      <div className="mx-auto w-fit pt-1 text-center text-black">
          {/* <Label htmlFor= "options" className='text-white'>Que horas?</Label> */}
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue className='text-neutral-400' placeholder="Manhã" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="manha" onClick={(e) => e.stopPropagation()}>Manhã</SelectItem>
                <SelectItem value="inicio tarde"onClick={(e) => e.stopPropagation()}>Início da tarde</SelectItem>
                <SelectItem value="fim tarde"onClick={(e) => e.stopPropagation()}>Fim da tarde</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        </div>
    </div>
  )
}