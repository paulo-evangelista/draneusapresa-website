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
import { Textarea } from '@/components/ui/textarea'
import { Calendar } from '@/components/ui/calendar'
import { ptBR } from 'date-fns/locale'
import { Button } from '@/components/ui/button'
import whatsAppLogo from "assets/whatsapp.svg"
import Image from 'next/image'

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
    <div className="bg-white pb-8 items-center text-center">
      <div className="pt-1">
        <h1 className="text-3xl px-10 mb-2 text-black">
          Conquiste uma vida melhor{' '}
          <span className="text-mainPink">sem sair de casa! </span>
        </h1>
      </div>
      <div className="rounded-xl shadow-2xl text-left text-white max-w-md bg-mainPink mx-auto">
        <div className="px-4 pt-4">
          <Label htmlFor="name">Qual seu nome?</Label>
          <Input id="name" className='text-black w-64' placeholder="Digite aqui" />
        </div>
        <div className="px-4 pt-2">
          <Label htmlFor="phone">Seu telefone com DDD</Label>
          <div className='flex bg-neutral-100 w-64 rounded-lg pl-1'>
            <Image src={whatsAppLogo} alt="whatsapp logo" height={32}></Image>
          <Input
            id="phone"
            inputMode='numeric'
            className="text-black"
            placeholder="(__) _____-____"
            value={formatarTelefone(phone)}
            onChange={(e) => setPhone(e.target.value)}
            />
            </div>
        </div>
        <div className="px-4 pt-2 text-black">
          <Label htmlFor="options" className='text-white'>No que podemos te ajudar?</Label>
          <Select >
            <SelectTrigger className="w-[320px]">
              <SelectValue className='text-neutral-400' placeholder="Escolha aqui" />
            </SelectTrigger>
            <SelectContent
            					ref={(ref) => {
                        if (!ref) return;
                        ref.ontouchstart = (e) => {
                          e.preventDefault();
                        };
                      }}
            >
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
        <div className='pt-8 text-center'>

    <p>Escolha seu dia preferido para a consulta</p>
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
            <SelectContent
            					ref={(ref) => {
                        if (!ref) return;
                        ref.ontouchstart = (e) => {
                          e.preventDefault();
                        };
                      }}
            >
              <SelectGroup>
                <SelectItem value="manha">Manhã</SelectItem>
                <SelectItem value="inicio tarde">Início da tarde</SelectItem>
                <SelectItem value="fim tarde">Fim da tarde</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="px-4 pt-4">
          <Label htmlFor="aditional">Alguma informação adicional? (Opcional)</Label>
          <Textarea id="aditional" className='text-neutral-800' placeholder="Digite aqui" />
        </div>
        <div className='mx-auto w-fit pt-8 text-center'>
        <button className='bg-white text-mainPink hover:scale-110 transition rounded-lg py-2 px-10 shadow-xl'>
                Enviar
                </button>
          <p className='pt-1 px-10 pb-4 text-xs text-gray-100 font-light'>Vamos entrar em contato via WhatsApp para encontrar o melhor horário e marcar sua consulta online 😊</p>
        </div>
      </div>
    </div>
  )
}